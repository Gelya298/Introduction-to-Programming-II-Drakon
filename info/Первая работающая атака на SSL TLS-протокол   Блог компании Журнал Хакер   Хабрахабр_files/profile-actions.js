var addVotingForUser = function(userProfile){
	var voteButtons = userProfile.getElements(".profile-karma-holder .vote a");
	if (voteButtons) {
		var voteUp = function(e){
			Voter.vote(e, e.target, 'user', 'plus');
			return false;
		};
		var voteDown = function(e){
			Voter.vote(e, e.target, 'user', 'minus');
			return false;
		};
		if (voteButtons) {
			for (var i=0; i < voteButtons.length; i++) {
				var voteButton = $(voteButtons[i]);
				if (voteButton.hasClass("vote_plus")) {
					voteButton.addEvent("click",voteUp);
				} else if (voteButton.hasClass("vote_minus")) {
					voteButton.addEvent("click",voteDown);
				}
			}
		}	
	}

};

var friendship = function(userProfActions,userId){
	var add = userProfActions.getElement("a.friend-add");
	var del = userProfActions.getElement("a.friend-del");
    if (add && del) {
        add.addEvent('click', function() {
            friendingHandler.friendUnfriend(userId, true);
			return false;
        })
        del.addEvent('click', function() {
			var uId = userId.replace("user","");
			friendingHandler.removeFriendSend(uId);
            add.setStyle('display', 'inline')
            del.setStyle('display', 'none')
			return false;
        })
    }
};

var blogInviting = function(userProfActions){
	blogInvitingButton = userProfActions.getElement("a.profile-actions-bloginviting");
	if (blogInvitingButton) {
		blogInvitingButton.addEvent("click",function(){
			profileForm.getInvitationList();
			return false;
		})
	}
	
}
var showUserActions = function(userProfActions){
	var arrowMenuButton = userProfActions.getElement("dd.menu-arr"),
		uprofmenu		= userProfActions.getElements(".profile-actions-menu-container *"),
		showed 			= userProfActions.hasClass("active");
	var hideUserProfActions = function(e){
		if (!e.target.clicker || !e.target.clicker == "userProfActions") {
			userProfActions.removeClass("active");
			showed = false;
		}
	}
	
	$(document).addEvent("click",function(e){
		hideUserProfActions(e);
	})
	
	var lchecked;
	
	var switchUserActions = function(){ 
		if (showed) {
			userProfActions.removeClass("active");
			showed = false;
			}
		else {
			userProfActions.addClass("active");
			showed = true;
			if (!lchecked) {
				var mnamewidth = userProfActions.getSize().x;
				if (mnamewidth < 260) {
					userProfActions.addClass("profile-actions-menu-too-left");
				}
				lchecked = true
				
			}
		}
	}
	
};
tm.init.add(function(){
	var userProfile = $(document).getElement("div.profile-header");
	if (userProfile) {
		var userProfActions = userProfile.getElement(".profile-actions");
        var profileButtons = userProfile.getElement(".profile-buttons");
		var voteHolder = userProfile.getElement(".vote_holder"), userId;
		if (voteHolder) {
			userId = voteHolder.id;
		} 
		if (profileButtons) {
			showUserActions(userProfActions);
			blogInviting(profileButtons);
			friendship(profileButtons,userId);
		}
		
		
		addVotingForUser(userProfile);
		
	}
	var userInfo = $(document).getElement(".userinfo");
	if (userInfo) {
		var userTwitter = userInfo.getElement(".twitter");
		if (userTwitter){
			var twitterTimePlace = userInfo.getElement(".twitter-time");
			if (twitterTimePlace) {
				twitterTime = twitterTimePlace.get("text");
				twitterTime = tm.helpers.humanizeDate(twitterTime);
				twitterTimePlace.set("text", twitterTime).removeClass("hidden");
			}
			var twitterReload = userTwitter.getElement("#js-getTwitterForm");
			if (twitterReload) {
				profileForm.sendData(twitterReload, 'twitter');
			}
		}
	}
});
