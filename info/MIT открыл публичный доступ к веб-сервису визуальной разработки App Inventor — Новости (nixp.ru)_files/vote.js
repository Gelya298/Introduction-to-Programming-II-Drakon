Vote = {
	votesClasses: [
		[-2, 'awful'],
		[-1, 'bad'],
		[1, 'good'],
		[2, 'best']
	],
	init: function() {
		(document.body).linkify(this.put.bindAsEventListener(this));
	},
	translate: function(value, searchIndex) {
		var result;
		this.votesClasses.each(function(el) {
			if (el[searchIndex] == value) {
				result = el[1-searchIndex];
				throw $break;
			}
		});
		return result;
	},
	put: function(e) {
		var a = e.findElement('a');
		if (!a || !a.up().hasClassName('votes')) return;
		e.stop();
		if (a.up().hasClassName('blocked')) {
			main.alert('За свои объекты голосовать нельзя :-(', 'Хорошо, не буду!');
			return;
		}
		if (!User.checkLogin(e, this.put.bind(this, e))) return;
		
		var tokens = $w(a.className).first().split('-');
		var classvalue = tokens[0];
		var classsize = tokens[1];
		var userVote = this.translate(classvalue, 1);
		var uoi = a.up().getUoi();
		if (a.hasClassName('vote_set')) { // An arrogant user tries to set his vote twice
			return; // No need to execute the code and load the server with unnecessary execution
		}
		
		// Getting elements related to voting
		var currentVotes = $('current-votes-for-'+uoi);
		var currentVotesSum = $('current-votes-sum-for-'+uoi);
		var currentUserVote = $('current-user-vote-for-'+uoi);
		var currentVotesStrings = currentVotes.innerHTML.split(' ');
		var votingPanel = $('voting-panel-for-'+uoi);
		
		
		// Looking for count of votes
		var votesCount = parseInt(currentVotesStrings[0]); // parseInt returns NaN if a string cannot be converted
		// Looking for user vote
		var oldUserVote = parseInt(currentUserVote.innerHTML);
		// Looking for votes sum
		var votesSum = parseInt(currentVotesSum.innerHTML);
		
		if (!isNaN(votesCount)) { // If count of votes is numeric
			if (oldUserVote == 0) { // If user hasn't voted yet
				votesCount += 1; // Adding one vote
			}
		} else {
			votesCount = 1; // Setting votes count to one. Since there has been no votes, our current user obviously didn't vote
		}
		
		currentUserVote.innerHTML = userVote.toString(); // Setting user vote
		
		// Recalculating voting
		votesSum += (userVote - oldUserVote);
		currentVotesSum.innerHTML = votesSum.toString(); // Setting current votes sum
		var average = votesSum/votesCount;
		average = (average < 0) ? Math.floor(average) : Math.ceil(average); // Handling odd Math.round() behaviour. Consider this a hack. PHP rounds (-2+1)/2 to -1, while JS does to 0.
		if (average == 0) {
			average = 1; // Getting rid of "neutral" vote
		}
		
		// Applying current voting to page
		currentVotes.setAttribute('class','vote'); // Resetting to state with no voting applied
		currentVotes.addClassName(this.translate(average, 0)+'-mini');
		currentVotes.show();
		var votingItems = votingPanel.childElements();
		for (var i = 0; i<votingItems.length; i++) {
			votingItems[i].addClassName('vote_faded'); // Make it faded
			if (votingItems[i].hasClassName('vote_set')) { // If we found the currently set vote
				votingItems[i].removeClassName('vote_set'); 
			}
		}
		a.removeClassName('vote_faded');
		a.addClassName('vote_set');
			
		// Handling Russian translation
		/*
		var appendix = 'ов';
		var remainder = votesCount % 10;
		if (remainder == 2 || remainder == 3 || remainder == 4) {
			appendix = 'а';
		} else if (remainder == 1) {
			appendix = ''
		}
		*/
		
		currentVotes.innerHTML = votesCount.toString();
		
		new Ajax.Request(a.href); // Very simple expression with no options, because all parameters are already forged into uri by symfony
	},
	updateUserVote: function(uoi, vote) {
		var voteToIndex = {
			'vote-2': 0,
			'vote-1': 1,
			'vote1': 2,
			'vote2': 3
		};
		$('current-user-vote-for-'+uoi).update(vote);
		var votingPanel = $('voting-panel-for-'+uoi);
		var votingItems = votingPanel.childElements();
		for (var i = 0; i<votingItems.length; i++) {
			if (!votingPanel.hasClassName('blocked')) votingItems[i].addClassName('vote_faded');
			if (votingItems[i].hasClassName('vote_set')) { // If we found the currently set vote
				votingItems[i].removeClassName('vote_set'); 
			}
		}
		if (vote) {
			votingItems[voteToIndex['vote'+vote]].removeClassName('vote_faded');
			votingItems[voteToIndex['vote'+vote]].addClassName('vote_set');
		}
	},
	showVotingPanels: function(data) {
		var data = data.collectVotingData;
		$$('.votes').each(function(el) {
			var uoi = main.extractUoi(el.id);
			el[(data[uoi]['couldSetVote']? 'remove' : 'add')+'ClassName']('blocked');
			this.updateUserVote(uoi, data[uoi]['vote']);
		}, this);
	},
	hideVotingPanels: function() {
		$$('.votes').each(function(el) {
			el.removeClassName('blocked');
			el.childElements().invoke('removeClassName', 'vote_faded');
		}, this);
	},
	collectVotingData: function() {
		var st = [];
		$$('.votes').each(function(el) {
			st.push(main.extractUoi(el.id));
		});
		return {
			func: 'collectVotingData',
			arguments: st
		};
	}
};

User.stateChange.append({
	load: Vote.init.bind(Vote),
	login: Vote.showVotingPanels.bind(Vote),
	logout: Vote.hideVotingPanels.bind(Vote),
	data: Vote.collectVotingData.bind(Vote)
});
