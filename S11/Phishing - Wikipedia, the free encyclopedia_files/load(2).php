var isCompatible=function(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;};var startUp=function(){mw.config=new mw.Map(true);mw.loader.register([["site","1329937471",[],"site"],["noscript","1293840000",[],"noscript"],["startup","1329977333",[],"startup"],["user","1293840000",[],"user"],["user.groups","1293840000",[],"user"],["user.options","1293840000",[],"private"],["user.tokens","1293840000",[],"private"],["filepage","1293840000",[]],["skins.vector","1325628544",[]],["skins.monobook","1320879997",[]],["skins.simple","1325631572",[]],["skins.chick","1316448689",[]],["skins.modern","1325628544",[]],["skins.cologneblue","1325631573",[]],["skins.nostalgia","1316448690",[]],["skins.standard","1316448601",[]],["jquery","1318023333",[]],["jquery.async","1316448906",[]],["jquery.appear","1316448906",[]],["jquery.autoEllipsis","1316448906",["jquery.highlightText"]],["jquery.byteLength","1316448915",[]],[
"jquery.byteLimit","1316448916",["jquery.byteLength"]],["jquery.checkboxShiftClick","1316448906",[]],["jquery.client","1316448906",[]],["jquery.collapsibleTabs","1325631568",[]],["jquery.colorUtil","1316448905",[]],["jquery.color","1316448915",["jquery.colorUtil"]],["jquery.cookie","1316448916",[]],["jquery.delayedBind","1325631568",[]],["jquery.expandableField","1316448906",["jquery.delayedBind"]],["jquery.form","1316448915",[]],["jquery.getAttrs","1316448916",[]],["jquery.highlightText","1316448905",[]],["jquery.hoverIntent","1316448906",[]],["jquery.messageBox","1316448906",[]],["jquery.placeholder","1316448904",[]],["jquery.json","1316448905",[]],["jquery.localize","1322079009",[]],["jquery.makeCollapsible","1329963498",[]],["jquery.mwPrototypes","1316448916",[]],["jquery.qunit","1316448905",[]],["jquery.suggestions","1316448916",["jquery.autoEllipsis"]],["jquery.tabIndex","1316448915",[]],["jquery.tablesorter","1329963533",[]],["jquery.textSelection","1321375549",[]],[
"jquery.tipsy","1316448821",[]],["jquery.ui.core","1316448832",["jquery"],"jquery.ui"],["jquery.ui.widget","1316448865",[],"jquery.ui"],["jquery.ui.mouse","1316448874",["jquery.ui.widget"],"jquery.ui"],["jquery.ui.position","1316448865",[],"jquery.ui"],["jquery.ui.draggable","1316448821",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui"],["jquery.ui.droppable","1316448874",["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui"],["jquery.ui.resizable","1316448874",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.selectable","1316448865",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.sortable","1316448865",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.accordion","1316448821",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.autocomplete","1316448865",["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui"],[
"jquery.ui.button","1319422262",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.datepicker","1316448874",["jquery.ui.core"],"jquery.ui"],["jquery.ui.dialog","1316448865",["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui"],["jquery.ui.progressbar","1316448866",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.ui.slider","1316448866",["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui"],["jquery.ui.tabs","1316448822",["jquery.ui.core","jquery.ui.widget"],"jquery.ui"],["jquery.effects.core","1316448887",["jquery"],"jquery.ui"],["jquery.effects.blind","1316448892",["jquery.effects.core"],"jquery.ui"],["jquery.effects.bounce","1316448887",["jquery.effects.core"],"jquery.ui"],["jquery.effects.clip","1316448887",["jquery.effects.core"],"jquery.ui"],["jquery.effects.drop","1316448887",["jquery.effects.core"],"jquery.ui"],["jquery.effects.explode",
"1316448892",["jquery.effects.core"],"jquery.ui"],["jquery.effects.fold","1316448893",["jquery.effects.core"],"jquery.ui"],["jquery.effects.highlight","1316448887",["jquery.effects.core"],"jquery.ui"],["jquery.effects.pulsate","1316448892",["jquery.effects.core"],"jquery.ui"],["jquery.effects.scale","1316448892",["jquery.effects.core"],"jquery.ui"],["jquery.effects.shake","1316448893",["jquery.effects.core"],"jquery.ui"],["jquery.effects.slide","1316448893",["jquery.effects.core"],"jquery.ui"],["jquery.effects.transfer","1316448893",["jquery.effects.core"],"jquery.ui"],["mediawiki","1323802402",[]],["mediawiki.api","1323802401",[]],["mediawiki.api.category","1323802401",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.edit","1323802402",["mediawiki.api","mediawiki.Title"]],["mediawiki.api.parse","1323802400",["mediawiki.api"]],["mediawiki.api.titleblacklist","1323802400",["mediawiki.api","mediawiki.Title"]],["mediawiki.debug","1324433371",[]],["mediawiki.feedback","1324587172",[
"mediawiki.api.edit","mediawiki.Title","mediawiki.jqueryMsg","jquery.ui.dialog"]],["mediawiki.htmlform","1316448878",[]],["mediawiki.user","1325701904",["jquery.cookie"]],["mediawiki.Title","1317774200",["mediawiki.util"]],["mediawiki.Uri","1323901355",[]],["mediawiki.page.startup","1320881909",["jquery.client"]],["mediawiki.page.ready","1316448903",["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.placeholder"]],["mediawiki.util","1325631568",["jquery.client","jquery.cookie","jquery.messageBox","jquery.mwPrototypes"]],["mediawiki.libs.jpegmeta","1316448942",[]],["mediawiki.action.history","1316448893",["jquery.ui.button"],"mediawiki.action.history"],["mediawiki.action.history.diff","1316448894",[],"mediawiki.action.history"],["mediawiki.action.edit","1326295092",["jquery.textSelection","jquery.byteLimit"]],["mediawiki.action.view.rightClickEdit","1316448894",[]],["mediawiki.action.view.metadata","1329963630",[]],["mediawiki.action.watch.ajax","1329963503",[]],[
"mediawiki.special","1317328664",[]],["mediawiki.special.preferences","1329963680",[]],["mediawiki.special.changeslist","1316448884",["jquery.makeCollapsible"]],["mediawiki.special.search","1316448884",[]],["mediawiki.special.block","1317449866",[]],["mediawiki.special.undelete","1316448885",[]],["mediawiki.special.movePage","1316448884",["jquery.byteLimit"]],["mediawiki.special.recentchanges","1316448880",["mediawiki.special"]],["mediawiki.special.upload","1329963573",["mediawiki.libs.jpegmeta"]],["mediawiki.language","1316448940",[]],["mediawiki.jqueryMsg","1323802401",["mediawiki.language","mediawiki.util"]],["mediawiki.legacy.ajax","1316448600",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.commonPrint","1317328679",[]],["mediawiki.legacy.config","1316448609",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.IEFixes","1316448601",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.mwsuggest","1329963498",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.preview","1316448608",[
"mediawiki.legacy.wikibits"]],["mediawiki.legacy.protect","1316448600",["mediawiki.legacy.wikibits","jquery.byteLimit"]],["mediawiki.legacy.shared","1326739400",[]],["mediawiki.legacy.oldshared","1316448656",[]],["mediawiki.legacy.upload","1316448600",["mediawiki.legacy.wikibits"]],["mediawiki.legacy.wikibits","1329963498",["mediawiki.language"]],["mediawiki.legacy.wikiprintable","1316448656",[]],["ext.gadget.Navigation_popups","1301011012",[]],["ext.gadget.exlinks","1317823575",["mediawiki.util"]],["ext.gadget.Twinkle","1329757532",["mediawiki.util","jquery.ui.dialog","jquery.tipsy"]],["ext.gadget.HideFundraisingNotice","1293840000",[]],["ext.gadget.HotCat","1317470597",[]],["ext.gadget.textareasansserif","1326747219",[]],["ext.gadget.UTCLiveClock","1317470518",[]],["ext.gadget.mySandbox","1329912781",["mediawiki.util"]],["ext.gadget.purgetab","1309793310",["mediawiki.util"]],["ext.gadget.dropdown-menus","1293840000",[]],["ext.gadget.NewDiff","1324608978",[]],[
"ext.gadget.NoAnimations","1318714911",[]],["ext.gadget.NoSmallFonts","1320868941",[]],["ext.gadget.MenuTabsToggle","1326631630",["jquery.cookie"]],["ext.gadget.wmfFR2011Style","1319267442",[]],["ext.gadget.Blackskin","1323415449",[]],["ext.gadget.widensearch","1318714989",[]],["ext.gadget.DejaVu_Sans","1293840000",[]],["ext.gadget.ShowMessageNames","1318509199",["mediawiki.util"]],["ext.gadget.BugStatusUpdate","1329346144",[]],["ext.articleFeedback.startup","1321577755",["mediawiki.util"]],["ext.articleFeedback","1329963513",["jquery.ui.dialog","jquery.ui.button","jquery.articleFeedback","jquery.cookie","jquery.clickTracking","ext.articleFeedback.ratingi18n"]],["ext.articleFeedback.ratingi18n","1293840000",[]],["ext.articleFeedback.dashboard","1316449739",[]],["jquery.articleFeedback","1329963513",["jquery.appear","jquery.tipsy","jquery.json","jquery.localize","jquery.ui.dialog","jquery.ui.button","jquery.cookie","jquery.clickTracking"]],["ext.articleFeedbackv5.startup","1328125760",[
"mediawiki.util","mediawiki.user"]],["ext.articleFeedbackv5","1329963655",["jquery.ui.dialog","jquery.ui.button","jquery.articleFeedbackv5","jquery.cookie","jquery.clickTracking","ext.articleFeedbackv5.ratingi18n"]],["ext.articleFeedbackv5.ie","1328125760",[]],["ext.articleFeedbackv5.ratingi18n","1293840000",[]],["ext.articleFeedbackv5.dashboard","1328125760",["mediawiki.util","mediawiki.user","jquery.articleFeedbackv5.special"]],["jquery.articleFeedbackv5","1329963655",["jquery.appear","jquery.tipsy","jquery.json","jquery.localize","jquery.ui.dialog","jquery.ui.button","jquery.cookie","jquery.clickTracking","jquery.articleFeedbackv5.elastic"]],["jquery.articleFeedbackv5.special","1329977333",["mediawiki.util"]],["jquery.articleFeedbackv5.elastic","1328125761",[]],["ext.wikihiero","1316448951",[]],["ext.checkUser","1316450498",["mediawiki.util"]],["ext.flaggedRevs.basic","1316450529",[]],["ext.flaggedRevs.advanced","1316450521",["mediawiki.util"]],["ext.flaggedRevs.review","1317677132"
,["mediawiki.util"]],["ext.centralNotice.interface","1327952108",[]],["ext.centralNotice.bannerStats","1327952108",[]],["ext.collection.jquery.jstorage","1316450454",["jquery.json"]],["ext.collection.suggest","1316450455",["ext.collection.bookcreator"]],["ext.collection","1319584158",["ext.collection.bookcreator","jquery.ui.sortable"]],["ext.collection.bookcreator","1325636050",["ext.collection.jquery.jstorage"]],["ext.collection.checkLoadFromLocalStorage","1316450459",["ext.collection.jquery.jstorage"]],["ext.vector.collapsibleNav","1329963509",["jquery.client","jquery.cookie","jquery.tabIndex"],"ext.vector"],["ext.vector.collapsibleTabs","1321267002",["jquery.collapsibleTabs","jquery.delayedBind"],"ext.vector"],["ext.vector.editWarning","1329963509",[],"ext.vector"],["ext.vector.expandableSearch","1316450334",["jquery.client","jquery.expandableField","jquery.delayedBind"],"ext.vector"],["ext.vector.footerCleanup","1316450334",[],"ext.vector"],["ext.vector.sectionEditLinks",
"1316450336",["jquery.cookie","jquery.clickTracking"],"ext.vector"],["ext.vector.simpleSearch","1329963509",["jquery.client","jquery.suggestions","jquery.autoEllipsis","jquery.placeholder"],"ext.vector"],["contentCollector","1316450092",[],"ext.wikiEditor"],["jquery.wikiEditor","1329963572",["jquery.client","jquery.textSelection","jquery.delayedBind"],"ext.wikiEditor"],["jquery.wikiEditor.iframe","1316450093",["jquery.wikiEditor","contentCollector"],"ext.wikiEditor"],["jquery.wikiEditor.dialogs","1316450094",["jquery.wikiEditor","jquery.wikiEditor.toolbar","jquery.ui.dialog","jquery.ui.button","jquery.ui.draggable","jquery.ui.resizable","jquery.tabIndex"],"ext.wikiEditor"],["jquery.wikiEditor.dialogs.config","1320881743",["jquery.wikiEditor","jquery.wikiEditor.dialogs","jquery.wikiEditor.toolbar.i18n","jquery.suggestions"],"ext.wikiEditor"],["jquery.wikiEditor.highlight","1316450102",["jquery.wikiEditor","jquery.wikiEditor.iframe"],"ext.wikiEditor"],["jquery.wikiEditor.preview",
"1316450101",["jquery.wikiEditor"],"ext.wikiEditor"],["jquery.wikiEditor.previewDialog","1316450101",["jquery.wikiEditor","jquery.wikiEditor.dialogs"],"ext.wikiEditor"],["jquery.wikiEditor.publish","1316450092",["jquery.wikiEditor","jquery.wikiEditor.dialogs"],"ext.wikiEditor"],["jquery.wikiEditor.templateEditor","1316450101",["jquery.wikiEditor","jquery.wikiEditor.iframe","jquery.wikiEditor.dialogs"],"ext.wikiEditor"],["jquery.wikiEditor.templates","1316450101",["jquery.wikiEditor","jquery.wikiEditor.iframe"],"ext.wikiEditor"],["jquery.wikiEditor.toc","1316450094",["jquery.wikiEditor","jquery.wikiEditor.iframe","jquery.ui.draggable","jquery.ui.resizable","jquery.autoEllipsis","jquery.color"],"ext.wikiEditor"],["jquery.wikiEditor.toolbar","1316450144",["jquery.wikiEditor","jquery.wikiEditor.toolbar.i18n"],"ext.wikiEditor"],["jquery.wikiEditor.toolbar.config","1321279096",["jquery.wikiEditor","jquery.wikiEditor.toolbar.i18n","jquery.wikiEditor.toolbar","jquery.cookie","jquery.async"],
"ext.wikiEditor"],["jquery.wikiEditor.toolbar.i18n","1293840000",[],"ext.wikiEditor"],["ext.wikiEditor","1316450101",["jquery.wikiEditor"],"ext.wikiEditor"],["ext.wikiEditor.dialogs","1316450092",["ext.wikiEditor","ext.wikiEditor.toolbar","jquery.wikiEditor.dialogs","jquery.wikiEditor.dialogs.config"],"ext.wikiEditor"],["ext.wikiEditor.highlight","1316450101",["ext.wikiEditor","jquery.wikiEditor.highlight"],"ext.wikiEditor"],["ext.wikiEditor.preview","1316450094",["ext.wikiEditor","jquery.wikiEditor.preview"],"ext.wikiEditor"],["ext.wikiEditor.previewDialog","1316450101",["ext.wikiEditor","jquery.wikiEditor.previewDialog"],"ext.wikiEditor"],["ext.wikiEditor.publish","1316450093",["ext.wikiEditor","jquery.wikiEditor.publish"],"ext.wikiEditor"],["ext.wikiEditor.templateEditor","1316450092",["ext.wikiEditor","ext.wikiEditor.highlight","jquery.wikiEditor.templateEditor"],"ext.wikiEditor"],["ext.wikiEditor.templates","1316450092",["ext.wikiEditor","ext.wikiEditor.highlight",
"jquery.wikiEditor.templates"],"ext.wikiEditor"],["ext.wikiEditor.toc","1316450092",["ext.wikiEditor","ext.wikiEditor.highlight","jquery.wikiEditor.toc"],"ext.wikiEditor"],["ext.wikiEditor.tests.toolbar","1316450094",["ext.wikiEditor.toolbar"],"ext.wikiEditor"],["ext.wikiEditor.toolbar","1316450092",["ext.wikiEditor","jquery.wikiEditor.toolbar","jquery.wikiEditor.toolbar.config"],"ext.wikiEditor"],["ext.wikiEditor.toolbar.hideSig","1317646778",[],"ext.wikiEditor"],["ext.prefSwitch","1316450643",["jquery.client"]],["jquery.clickTracking","1316449456",["jquery.cookie"]],["ext.clickTracking","1316449456",["jquery.clickTracking"]],["ext.clickTracking.special","1316449462",["jquery.json","jquery.ui.datepicker","jquery.ui.dialog"]],["ext.UserBuckets","1316449456",["jquery.clickTracking","jquery.json","jquery.cookie","ext.UserBuckets.AccountCreationUserBucket"]],["ext.UserBuckets.AccountCreationUserBucket","1316450415",["jquery.clickTracking"]],["ext.wikiLove.icon","1316449609",[]],[
"ext.wikiLove.defaultOptions","1329963503",[]],["ext.wikiLove.startup","1329963503",["ext.wikiLove.defaultOptions","jquery.ui.dialog","jquery.ui.button","jquery.localize","jquery.elastic"]],["ext.wikiLove.local","1312944211",[]],["ext.wikiLove.init","1316449609",["ext.wikiLove.startup"]],["jquery.elastic","1326313502",[]],["ext.markAsHelpful","1326313506",["mediawiki.util"]],["ext.moodBar.init","1329963663",["jquery.cookie","jquery.client","mediawiki.util","mediawiki.user"]],["ext.moodBar.tooltip","1329963663",["jquery.cookie","ext.moodBar.init"]],["jquery.NobleCount","1320260576",[]],["ext.moodBar.core","1329963663",["mediawiki.util","ext.moodBar.init","jquery.localize","jquery.NobleCount","jquery.moodBar"]],["ext.moodBar.dashboard","1329963765",["mediawiki.util","user.tokens","jquery.NobleCount","jquery.elastic"]],["ext.moodBar.dashboard.styles","1327620497",[]],["jquery.moodBar","1326313496",["mediawiki.util"]],["ext.babel","1316607365",[]],["ext.apiSandbox","1329964511",[
"mediawiki.util"]]]);mw.config.set({"wgLoadScript":"//bits.wikimedia.org/en.wikipedia.org/load.php","debug":false,"skin":"vector","stylepath":"//bits.wikimedia.org/skins-1.18","wgUrlProtocols":"http\\:\\/\\/|https\\:\\/\\/|ftp\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|gopher\\:\\/\\/|telnet\\:\\/\\/|nntp\\:\\/\\/|worldwind\\:\\/\\/|mailto\\:|news\\:|svn\\:\\/\\/|git\\:\\/\\/|mms\\:\\/\\/|\\/\\/","wgArticlePath":"/wiki/$1","wgScriptPath":"/w","wgScriptExtension":".php","wgScript":"/w/index.php","wgVariantArticlePath":false,"wgActionPaths":[],"wgServer":"//en.wikipedia.org","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.18wmf1","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgSeparatorTransformTable":["",""],"wgDigitTransformTable"
:["",""],"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Wikipedia","5":"Wikipedia talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","100":"Portal","101":"Portal talk","108":"Book","109":"Book talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"wikipedia":4,"wikipedia_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"portal":100,"portal_talk":101,"book":108,"book_talk":109,"wp":4,"wt":5,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgSiteName":"Wikipedia","wgFileExtensions":["png","gif","jpg","jpeg","xcf","pdf","mid","ogg","ogv","svg","djvu","tiff","tif","oga"],"wgDBname":"enwiki","wgFileCanRotate":true,"wgAvailableSkins":{
"nostalgia":"Nostalgia","cologneblue":"CologneBlue","monobook":"MonoBook","chick":"Chick","modern":"Modern","myskin":"MySkin","simple":"Simple","standard":"Standard","vector":"Vector"},"wgExtensionAssetsPath":"//bits.wikimedia.org/w/extensions-1.18","wgCookiePrefix":"enwiki","wgResourceLoaderMaxQueryLength":-1,"wgLegacyJavaScriptGlobals":true,"wgCaseSensitiveNamespaces":[],"wgMWSuggestTemplate":"//en.wikipedia.org/w/api.php?action=opensearch\x26search={searchTerms}\x26namespace={namespaces}\x26suggest","wgCollectionVersion":"1.5","wgCollapsibleNavBucketTest":false,"wgCollapsibleNavForceNewVersion":false,"wgArticleFeedbackSMaxage":2592000,"wgArticleFeedbackCategories":["Article Feedback Pilot","Article Feedback","Article Feedback Additional Articles"],"wgArticleFeedbackBlacklistCategories":["Article Feedback Blacklist","Article Feedback 5","Article Feedback 5 Additional Articles"],"wgArticleFeedbackLotteryOdds":100,"wgArticleFeedbackTracking":{"buckets":{"track":0.27,"ignore":99.73},
"version":8,"expires":30,"tracked":false},"wgArticleFeedbackOptions":{"buckets":{"show":100,"hide":0},"version":8,"expires":30,"tracked":false},"wgArticleFeedbackNamespaces":[0],"wgArticleFeedbackRatingTypesFlipped":{"trustworthy":1,"objective":2,"complete":3,"wellwritten":4},"wgArticleFeedbackv5SMaxage":2592000,"wgArticleFeedbackv5Categories":["Article_Feedback_5","Article_Feedback_5_Additional_Articles"],"wgArticleFeedbackv5BlacklistCategories":["Article_Feedback_Blacklist"],"wgArticleFeedbackv5LotteryOdds":0,"wgArticleFeedbackv5Debug":false,"wgArticleFeedbackv5Bucket2TagNames":["suggestion","praise","problem","question"],"wgArticleFeedbackv5Bucket5RatingCategories":["trustworthy","objective","complete","wellwritten"],"wgArticleFeedbackv5DisplayBuckets":{"buckets":{"zero":0,"one":34,"two":33,"three":33,"four":0,"five":0},"version":1,"expires":30,"tracked":false},"wgArticleFeedbackv5Tracking":{"buckets":{"ignore":0,"track":100},"version":0,"expires":30,"tracked":false},
"wgArticleFeedbackv5Options":{"buckets":{"show":100,"hide":0},"version":0,"expires":30,"tracked":false},"wgArticleFeedbackv5LinkBuckets":{"buckets":{"-":0,"A":0,"B":0,"C":0,"D":100,"E":0,"F":0,"G":0,"H":0},"version":1,"expires":30,"tracked":false},"wgArticleFeedbackv5Namespaces":[0],"wgArticleFeedbackv5LearnToEdit":"//en.wikipedia.org/wiki/Wikipedia:Tutorial","wgArticleFeedbackv5WhatsThisPage":"Project:ArticleFeedback","wgArticleFeedbackv5TermsPage":"//wikimediafoundation.org/wiki/Feedback_privacy_statement","wgArticleFeedbackv5SurveyUrls":{"1":"https://www.surveymonkey.com/s/aft5-1","2":"https://www.surveymonkey.com/s/aft5-2","3":"https://www.surveymonkey.com/s/aft5-3"},"mbConfig":{"validTypes":["happy","sad","confused"],"userBuckets":[],"bucketConfig":{"buckets":{"feedback":100,"share":0,"editing":0},"version":3,"expires":30},"infoUrl":"//en.wikipedia.org/wiki/Wikipedia:New_editor_feedback","feedbackDashboardUrl":"//en.wikipedia.org/wiki/Special:FeedbackDashboard","privacyUrl":
"//wikimediafoundation.org/wiki/Feedback_policy","disableExpiration":365}});};if(isCompatible()){document.write("\x3cscript src=\"//bits.wikimedia.org/en.wikipedia.org/load.php?debug=false\x26amp;lang=en\x26amp;modules=jquery%2Cmediawiki\x26amp;only=scripts\x26amp;skin=vector\x26amp;version=20111213T185322Z\" type=\"text/javascript\"\x3e\x3c/script\x3e");}delete isCompatible;;

/* cache key: enwiki:resourceloader:filter:minify-js:4:8baf60b84bc05b336ae005b14c4f5829 */