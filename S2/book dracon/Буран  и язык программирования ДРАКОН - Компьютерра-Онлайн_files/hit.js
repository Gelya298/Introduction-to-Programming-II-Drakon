// track.seorate.ru

function _seorateTracker() {
  this.RefName='_apcrf';
  this.UidName='_apcag';
  this.WWWSyn=1;
  this.timeBirth=-1;
  this.urlStart=null;
  this.urlRef=null;
  this.uid=null;
  this.httpDomain=null;
  this.httpProto=null;
  this.doHit=1;

  this.fromCookies = function() {
    var cookies=document.cookie;
    var cv,u;
    if(cookies.length>0) {
      var ca=cookies.split('; ');
      if(ca.length<1) { ca=cookies.split(';'); }
      for(var i=ca.length-1; i>=0; i--) {
        var c=ca[i].split('=');
        if(c[0]==this.UidName) {
          cv=c[1]+'-';
          u=cv.split('-');
          if(u[0].length>1) { this.timeBirth=u[0]; }
          if(u[1].length>1) { this.uid=u[1]; }
        } else if(c[0]==this.RefName) {
          cv=unescape(c[1])+'\x00';
          u=cv.split('\x00');
          this.urlStart=u[0]; this.urlRef=u[1];
        }
      }
    }
  }

  this.fromURL = function() {
    var l=document.location;
    var proto=this.httpProto=l.protocol;
    if( proto=='http:' || proto=='https:' ) {
      var h=l.hostname;
      h.toLowerCase();
      if(this.WWWSyn && h.indexOf("www.")==0) { h=h.substring(4,h.length); }
      this.httpDomain=h;
    } else { this.doHit=0; }
  }

  this.getUrlEntry = function() {
    var us=this.urlStart;
    var ur=this.urlRef;
    if( us ) {
      if( !ur ) { this.urlRef=ur=''; }
    } else {
      var dl=document.location;
      var r=document.referrer;
      if( r && r.length>0 ) {
        var rh=r;
        var i=rh.indexOf('://');
        if( i>=0 ) { rh=rh.substring(i+3,rh.length); }
        i=rh.indexOf('/');
        if( i<0 ) {
          i=rh.indexOf(':');
          if( i<0 ) {
            i=rh.indexOf('?');
            if( i<0 ) { i=rh.indexOf('#'); }
          }
        }
        if( i>=0 ) { rh=rh.substring(0,i); }
        rh.toLowerCase();
        if(this.WWWSyn && rh.indexOf("www.")==0) { rh=rh.substring(4,rh.length); }
        if( rh==this.httpDomain ) {
          this.urlStart=this.urlRef=us=ur=null;
        } else {
          this.urlStart=us=dl;
          this.urlRef=ur=r;
        }
      } else {
        this.urlStart=us=dl;
        this.urlRef=ur='';
      }
      if( us ) {
        var dt=(new Date()).valueOf();
        var et=new Date(dt + 45*86400000);
        document.cookie=this.RefName+'='+escape(us+'\x00'+ur)+'; expires='+et.toGMTString()+'; path=/; domain=.'+this.httpDomain;
      }
    }
    return us? ';uf='+escape(us)+';rf='+escape(ur): '';
  }

  this.hashDomain = function() {
    var d=this.httpDomain;
    if (!d || d=="") return 1;
    var h=0,g=0;
    for (var i=d.length-1;i>=0;i--) {
      var c=parseInt(d.charCodeAt(i));
      h=((h << 6) & 0xfffffff) + c + (c << 14);
      if ((g=h & 0xfe00000)!=0) h=(h ^ (g >> 21));
    }
    return h;
  }

  this.i2s = function(r) {
    var c=new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','S','T','U','V','X','Y','Z');
    var m=31, mh=3;
    return c[r>>30&mh]+c[r>>25&m]+c[r>>20&m]+c[r>>15&m]+c[r>>10&m]+c[r>>5&m]+c[r&m];
  }

  this.getVisitor = function() {
    var uid=this.uid;
    var tb=this.timeBirth;
    var dt=new Date();
      var now=Math.floor(dt.getTime()*0.001);
      if( !uid ) {
        var uh=this.hashDomain();
        var ur=Math.floor(Math.random()*2147483647);
        this.uid=uid=this.i2s(uh)+this.i2s(now)+this.i2s(ur);
      }
    if( tb<=0 ) { this.timeBirth=tb=now; }
    dt.setYear(dt.getFullYear()+10);
    document.cookie=this.UidName+'='+tb+'-'+uid+'; expires='+dt.toGMTString()+'; path=/; domain=.'+this.httpDomain;
    var age=now-tb;
    return ';uc='+uid+';ag='+age;
  }

  this.onHit = function() {
    return (this.doHit)? (this.getVisitor()+this.getUrlEntry()) : '';
  }

  this.fromURL();
  this.fromCookies();
}

function seorateTracker() {
  var AP8='';
  var doHit=1;
    var APuma=null;
    var APrefa=null;
    var APurla=null;
  try {
    var tracker=new _seorateTracker();
    if(tracker) { AP8=tracker.onHit(); doHit=tracker.doHit; }
    if(typeof(seorateOpts)!="undefined"){
      if(typeof(seorateOpts.target)!='undefined') { APuma=seorateOpts.target; }
      if(typeof(seorateOpts.url)!='undefined') { APurla=seorateOpts.url; }
      if(typeof(seorateOpts.referrer)!='undefined') { APrefa=seorateOpts.referrer; }
    }
  } catch(err) {}

  if(doHit) { try {
    AP9='';
    if('https:'==document.location.protocol) {
      AP9=';ssl=1';
      APhit='https';
    } else { APhit='http'; }
    APhit+='://track.seorate.ru/img/hit?';
    APid='i1';
    APd=document;
    APdu=APurla?APurla:APd.URL;
    APwlr=APurla?APurla:window.location.href;
    if(APuma) {
      APdu+=((APdu.indexOf('?')>=0)?'&':'?')+'_seorateTarget='+APuma;
      APwlr+=((APwlr.indexOf('?')>=0)?'&':'?')+'_seorateTarget='+APuma;
    }
    APna=navigator;
    APtz=(new Date()).getTimezoneOffset();
    AP1=';rn='+Math.random()+';t='+APtz;
    AP2='';if(APd.cookie){AP2+=';c=1'}
    AP3=';r='+escape(APrefa?APrefa:document.referrer);
    AP4=''; if(typeof(screen)!='undefined') {
      AP4=';s='+screen.width+'*'+screen.height+'*'+(screen.colorDepth?screen.colorDepth:screen.pixelDepth);
    }
    AP5=';u='+escape(APdu); // +';t='+escape(document.title);
    AP6=';frm=0'; if (self!=top){AP6=';frm=1';}
    if(APwlr!=APdu) { AP7=';hr='+escape(APwlr); } else { AP7=''; }
    APsrc=APhit+APid+AP1+AP2+AP3+AP4+AP5+AP6+AP7+AP8+AP9;
    var img=new Image(1,1);
    img.src=APsrc;
    img.onload=function(){return;};
  } catch(err) {} }
}

// end
