var hljs=new function(){var q={};var a={};function o(c){return c.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function l(t,s){if(!t){return false}for(var c=0;c<t.length;c++){if(t[c]==s){return true}}return false}function e(t,s,c){var u="m"+(t.cI?"i":"")+(c?"g":"");return new RegExp(s,u)}function k(s){for(var c=0;c<s.childNodes.length;c++){node=s.childNodes[c];if(node.nodeName=="CODE"){return node}if(!(node.nodeType==3&&node.nodeValue.match(/\s+/))){return null}}}function i(t){var s="";for(var c=0;c<t.childNodes.length;c++){if(t.childNodes[c].nodeType==3){s+=t.childNodes[c].nodeValue}else{if(t.childNodes[c].nodeName=="BR"){s+="\n"}else{s+=i(t.childNodes[c])}}}return s}function b(u){var s=u.className.split(/\s+/);s=s.concat(u.parentNode.className.split(/\s+/));for(var c=0;c<s.length;c++){var t=s[c].replace(/^language-/,"");if(t=="no-highlight"){throw"No highlight"}if(q[t]){return t}}}function d(c){var s=[];(function(u,v){for(var t=0;t<u.childNodes.length;t++){if(u.childNodes[t].nodeType==3){v+=u.childNodes[t].nodeValue.length}else{if(u.childNodes[t].nodeName=="BR"){v+=1}else{s.push({event:"start",offset:v,node:u.childNodes[t]});v=arguments.callee(u.childNodes[t],v);s.push({event:"stop",offset:v,node:u.childNodes[t]})}}}return v})(c,0);return s}function n(A,B,z){var t=0;var y="";var v=[];function w(){if(A.length&&B.length){if(A[0].offset!=B[0].offset){return(A[0].offset<B[0].offset)?A:B}else{return(A[0].event=="start"&&B[0].event=="stop")?B:A}}else{return A.length?A:B}}function u(F){var G="<"+F.nodeName.toLowerCase();for(var D=0;D<F.attributes.length;D++){var E=F.attributes[D];G+=" "+E.nodeName.toLowerCase();if(E.nodeValue!=undefined){G+='="'+o(E.nodeValue)+'"'}}return G+">"}function C(D){return"</"+D.nodeName.toLowerCase()+">"}while(A.length||B.length){var x=w().splice(0,1)[0];y+=o(z.substr(t,x.offset-t));t=x.offset;if(x.event=="start"){y+=u(x.node);v.push(x.node)}else{if(x.event=="stop"){var s=v.length;do{s--;var c=v[s];y+=C(c)}while(c!=x.node);v.splice(s,1);while(s<v.length){y+=u(v[s]);s++}}}}y+=z.substr(t);return y}function h(K,E){function L(Q,P){Q.sm=[];for(var O=0;O<Q.c.length;O++){for(var N=0;N<P.m.length;N++){if(P.m[N].cN==Q.c[O]){Q.sm[Q.sm.length]=P.m[N]}}}}function A(N,P){if(!P.c){return null}if(!P.sm){L(P,I)}for(var O=0;O<P.sm.length;O++){if(P.sm[O].bR.test(N)){return P.sm[O]}}return null}function x(O,N){if(D[O].e&&D[O].eR.test(N)){return 1}if(D[O].eW){var P=x(O-1,N);return P?P+1:0}return 0}function y(N,O){return O.iR&&O.iR.test(N)}function B(T,R){var P=[];function S(U){if(!l(P,U)){P[P.length]=U}}if(T.c){for(var O=0;O<R.m.length;O++){if(l(T.c,R.m[O].cN)){S(R.m[O].b)}}}var N=D.length-1;do{if(D[N].e){S(D[N].e)}N--}while(D[N+1].eW);if(T.i){S(T.i)}var Q="("+P[0];for(var O=0;O<P.length;O++){Q+="|"+P[O]}Q+=")";return e(R,Q)}function t(P,O){var Q=D[D.length-1];if(!Q.t){Q.t=B(Q,I)}P=P.substr(O);var N=Q.t.exec(P);if(!N){return[P,"",true]}if(N.index==0){return["",N[0],false]}else{return[P.substr(0,N.index),N[0],false]}}function s(R,N){var O=I.cI?N[0].toLowerCase():N[0];for(var Q in R.keywordGroups){if(!R.keywordGroups.hasOwnProperty(Q)){continue}var P=R.keywordGroups[Q].hasOwnProperty(O);if(P){return[Q,P]}}return false}function G(Q,T){if(!T.k||!T.l){return o(Q)}if(!T.lR){var S="("+T.l[0];for(var P=1;P<T.l.length;P++){S+="|"+T.l[P]}S+=")";T.lR=e(I,S,true)}var R="";var U=0;T.lR.lastIndex=0;var O=T.lR.exec(Q);while(O){R+=o(Q.substr(U,O.index-U));var N=s(T,O);if(N){u+=N[1];R+='<span class="'+N[0]+'">'+o(O[0])+"</span>"}else{R+=o(O[0])}U=T.lR.lastIndex;O=T.lR.exec(Q)}R+=o(Q.substr(U,Q.length-U));return R}function M(N,P){if(P.subLanguage&&a[P.subLanguage]){var O=h(P.subLanguage,N);u+=O.keyword_count;C+=O.r;return O.value}else{return G(N,P)}}function J(P,N){var O=P.nM?"":'<span class="'+P.displayClassName+'">';if(P.rB){c+=O;P.buffer=""}else{if(P.eB){c+=o(N)+O;P.buffer=""}else{c+=O;P.buffer=N}}D[D.length]=P}function F(S,O,T){var U=D[D.length-1];if(T){c+=M(U.buffer+S,U);return false}var P=A(O,U);if(P){c+=M(U.buffer+S,U);J(P,O);C+=P.r;return P.rB}var N=x(D.length-1,O);if(N){var R=U.nM?"":"</span>";if(U.rE){c+=M(U.buffer+S,U)+R}else{if(U.eE){c+=M(U.buffer+S,U)+R+o(O)}else{c+=M(U.buffer+S+O,U)+R}}while(N>1){R=D[D.length-2].nM?"":"</span>";c+=R;N--;D.length--}D.length--;D[D.length-1].buffer="";if(U.starts){for(var Q=0;Q<I.m.length;Q++){if(I.m[Q].cN==U.starts){J(I.m[Q],"");break}}}return U.rE}if(y(O,U)){throw"Illegal"}}var I=q[K];var D=[I.dM];var C=0;var u=0;var c="";try{var w=0;I.dM.buffer="";do{var z=t(E,w);var v=F(z[0],z[1],z[2]);w+=z[0].length;if(!v){w+=z[1].length}}while(!z[2]);if(D.length>1){throw"Illegal"}return{r:C,keyword_count:u,value:c}}catch(H){if(H=="Illegal"){return{r:0,keyword_count:0,value:o(E)}}else{throw H}}}function j(){for(var s in q){if(!q.hasOwnProperty(s)){continue}var t=q[s];for(var c=0;c<t.m.length;c++){var u=t.m[c];if(u.b){u.bR=e(t,"^"+u.b)}if(u.e){u.eR=e(t,"^"+u.e)}if(u.i){u.iR=e(t,"^(?:"+u.i+")")}t.dM.iR=e(t,"^(?:"+t.dM.i+")");if(u.r==undefined){u.r=1}if(!u.displayClassName){u.displayClassName=u.cN}}}}function g(){function t(w){if(!w.keywordGroups){for(var v in w.k){if(!w.k.hasOwnProperty(v)){continue}if(w.k[v] instanceof Object){w.keywordGroups=w.k}else{w.keywordGroups={keyword:w.k}}break}}}for(var s in q){if(!q.hasOwnProperty(s)){continue}var u=q[s];t(u.dM);for(var c=0;c<u.m.length;c++){t(u.m[c])}}}function f(){if(f.called){return}f.called=true;j();g();a=q}function r(y,C){f();try{var F=i(y);var v=b(y)}catch(z){if(z=="No highlight"){return}}if(v){var B=h(v,F).value}else{var D=0;for(var E in a){if(!a.hasOwnProperty(E)){continue}var t=h(E,F);var c=t.keyword_count+t.r;if(c>D){D=c;var B=t.value;v=E}}}if(B){var x=y.className;if(!x.match(v)){x+=" "+v}var s=d(y);if(s.length){var u=document.createElement("pre");u.innerHTML=B;B=n(s,d(u),F)}if(C){B=B.replace(/^((<[^>]+>|\t)+)/gm,function(G,J,I,H){return J.replace(/\t/g,C)})}var A=document.createElement("div");A.innerHTML='<pre><code class="'+x+'">'+B+"</code></pre>";var w=y.parentNode.parentNode;w.replaceChild(A.firstChild,y.parentNode)}}function m(){if(m.called){return}m.called=true;f();if(arguments.length){for(var c=0;c<arguments.length;c++){if(q[arguments[c]]){a[arguments[c]]=q[arguments[c]]}}}var t=document.getElementsByTagName("pre");for(var c=0;c<t.length;c++){var s=k(t[c]);if(s){r(s,hljs.tabReplace)}}}function p(){var c=arguments;var s=function(){m.apply(null,c)};if(window.addEventListener){window.addEventListener("DOMContentLoaded",s,false);window.addEventListener("load",s,false)}else{if(window.attachEvent){window.attachEvent("onload",s)}else{window.onload=s}}}this.LANGUAGES=q;this.initHighlightingOnLoad=p;this.highlightBlock=r;this.initHighlighting=m;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:["escape"],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:["escape"],r:0};this.BE={cN:"escape",b:"\\\\.",e:"^",nM:true,r:0};this.CLCM={cN:"comment",b:"//",e:"$",r:0};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.CNM={cN:"number",b:this.CNR,e:"^",r:0}}();var initHighlightingOnLoad=hljs.initHighlightingOnLoad;hljs.LANGUAGES.bash=function(){var a={"true":1,"false":1};return{dM:{l:[hljs.IR],c:["string","shebang","comment","number","test_condition","string","variable"],k:{keyword:{"if":1,then:1,"else":1,fi:1,"for":1,"break":1,"continue":1,"while":1,"in":1,"do":1,done:1,echo:1,exit:1,"return":1,set:1,declare:1},literal:a}},cI:false,m:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",e:"^",r:10},hljs.HCM,{cN:"test_condition",b:"\\[ ",e:" \\]",c:["string","variable","number"],l:[hljs.IR],k:{literal:a},r:0},{cN:"test_condition",b:"\\[\\[ ",e:" \\]\\]",c:["string","variable","number"],l:[hljs.IR],k:{literal:a}},{cN:"variable",b:"\\$([a-zA-Z0-9_]+)\\b",e:"^"},{cN:"variable",b:"\\$\\{(([^}])|(\\\\}))+\\}",e:"^",c:["number"]},{cN:"string",b:'"',e:'"',i:"\\n",c:["escape","variable"],r:0},{cN:"string",b:'"',e:'"',i:"\\n",c:["escape","variable"],r:0},hljs.BE,hljs.CNM,{cN:"comment",b:"\\/\\/",e:"$",i:"."}]}}();hljs.LANGUAGES.cs={dM:{l:[hljs.UIR],c:["comment","string","number"],k:{"abstract":1,as:1,base:1,bool:1,"break":1,"byte":1,"case":1,"catch":1,"char":1,checked:1,"class":1,"const":1,"continue":1,decimal:1,"default":1,delegate:1,"do":1,"do":1,"double":1,"else":1,"enum":1,event:1,explicit:1,extern:1,"false":1,"finally":1,fixed:1,"float":1,"for":1,foreach:1,"goto":1,"if":1,implicit:1,"in":1,"int":1,"interface":1,internal:1,is:1,lock:1,"long":1,namespace:1,"new":1,"null":1,object:1,operator:1,out:1,override:1,params:1,"private":1,"protected":1,"public":1,readonly:1,ref:1,"return":1,sbyte:1,sealed:1,"short":1,sizeof:1,stackalloc:1,"static":1,string:1,struct:1,"switch":1,"this":1,"throw":1,"true":1,"try":1,"typeof":1,uint:1,ulong:1,unchecked:1,unsafe:1,ushort:1,using:1,virtual:1,"volatile":1,"void":1,"while":1,ascending:1,descending:1,from:1,get:1,group:1,into:1,join:1,let:1,orderby:1,partial:1,select:1,set:1,value:1,"var":1,where:1,yield:1}},m:[{cN:"comment",b:"///",e:"$",rB:true,c:["xmlDocTag"]},{cN:"xmlDocTag",b:"///|<!--|-->",e:"^"},{cN:"xmlDocTag",b:"</?",e:">"},{cN:"string",b:'@"',e:'"',c:["quoteQuote"]},{cN:"quoteQuote",b:'""',e:"^"},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,hljs.BE,hljs.CNM]};hljs.LANGUAGES.ruby=function(){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var c="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var b=["comment","string","char","class","function","constant","symbol","number","variable","identifier","regexp_container"];var d={keyword:{and:1,"false":1,then:1,defined:1,module:1,"in":1,"return":1,redo:1,"if":1,BEGIN:1,retry:1,end:1,"for":1,"true":1,self:1,when:1,next:1,until:1,"do":1,begin:1,unless:1,END:1,rescue:1,nil:1,"else":1,"break":1,undef:1,not:1,"super":1,"class":1,"case":1,require:1,yield:1,alias:1,"while":1,ensure:1,elsif:1,or:1,def:1},keymethods:{__id__:1,__send__:1,abort:1,abs:1,"all?":1,allocate:1,ancestors:1,"any?":1,arity:1,assoc:1,at:1,at_exit:1,autoload:1,"autoload?":1,"between?":1,binding:1,binmode:1,"block_given?":1,call:1,callcc:1,caller:1,capitalize:1,"capitalize!":1,casecmp:1,"catch":1,ceil:1,center:1,chomp:1,"chomp!":1,chop:1,"chop!":1,chr:1,"class":1,class_eval:1,"class_variable_defined?":1,class_variables:1,clear:1,clone:1,close:1,close_read:1,close_write:1,"closed?":1,coerce:1,collect:1,"collect!":1,compact:1,"compact!":1,concat:1,"const_defined?":1,const_get:1,const_missing:1,const_set:1,constants:1,count:1,crypt:1,"default":1,default_proc:1,"delete":1,"delete!":1,delete_at:1,delete_if:1,detect:1,display:1,div:1,divmod:1,downcase:1,"downcase!":1,downto:1,dump:1,dup:1,each:1,each_byte:1,each_index:1,each_key:1,each_line:1,each_pair:1,each_value:1,each_with_index:1,"empty?":1,entries:1,eof:1,"eof?":1,"eql?":1,"equal?":1,"eval":1,exec:1,exit:1,"exit!":1,extend:1,fail:1,fcntl:1,fetch:1,fileno:1,fill:1,find:1,find_all:1,first:1,flatten:1,"flatten!":1,floor:1,flush:1,for_fd:1,foreach:1,fork:1,format:1,freeze:1,"frozen?":1,fsync:1,getc:1,gets:1,global_variables:1,grep:1,gsub:1,"gsub!":1,"has_key?":1,"has_value?":1,hash:1,hex:1,id:1,include:1,"include?":1,included_modules:1,index:1,indexes:1,indices:1,induced_from:1,inject:1,insert:1,inspect:1,instance_eval:1,instance_method:1,instance_methods:1,"instance_of?":1,"instance_variable_defined?":1,instance_variable_get:1,instance_variable_set:1,instance_variables:1,"integer?":1,intern:1,invert:1,ioctl:1,"is_a?":1,isatty:1,"iterator?":1,join:1,"key?":1,keys:1,"kind_of?":1,lambda:1,last:1,length:1,lineno:1,ljust:1,load:1,local_variables:1,loop:1,lstrip:1,"lstrip!":1,map:1,"map!":1,match:1,max:1,"member?":1,merge:1,"merge!":1,method:1,"method_defined?":1,method_missing:1,methods:1,min:1,module_eval:1,modulo:1,name:1,nesting:1,"new":1,next:1,"next!":1,"nil?":1,nitems:1,"nonzero?":1,object_id:1,oct:1,open:1,pack:1,partition:1,pid:1,pipe:1,pop:1,popen:1,pos:1,prec:1,prec_f:1,prec_i:1,print:1,printf:1,private_class_method:1,private_instance_methods:1,"private_method_defined?":1,private_methods:1,proc:1,protected_instance_methods:1,"protected_method_defined?":1,protected_methods:1,public_class_method:1,public_instance_methods:1,"public_method_defined?":1,public_methods:1,push:1,putc:1,puts:1,quo:1,raise:1,rand:1,rassoc:1,read:1,read_nonblock:1,readchar:1,readline:1,readlines:1,readpartial:1,rehash:1,reject:1,"reject!":1,remainder:1,reopen:1,replace:1,require:1,"respond_to?":1,reverse:1,"reverse!":1,reverse_each:1,rewind:1,rindex:1,rjust:1,round:1,rstrip:1,"rstrip!":1,scan:1,seek:1,select:1,send:1,set_trace_func:1,shift:1,singleton_method_added:1,singleton_methods:1,size:1,sleep:1,slice:1,"slice!":1,sort:1,"sort!":1,sort_by:1,split:1,sprintf:1,squeeze:1,"squeeze!":1,srand:1,stat:1,step:1,store:1,strip:1,"strip!":1,sub:1,"sub!":1,succ:1,"succ!":1,sum:1,superclass:1,swapcase:1,"swapcase!":1,sync:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,taint:1,"tainted?":1,tell:1,test:1,"throw":1,times:1,to_a:1,to_ary:1,to_f:1,to_hash:1,to_i:1,to_int:1,to_io:1,to_proc:1,to_s:1,to_str:1,to_sym:1,tr:1,"tr!":1,tr_s:1,"tr_s!":1,trace_var:1,transpose:1,trap:1,truncate:1,"tty?":1,type:1,ungetc:1,uniq:1,"uniq!":1,unpack:1,unshift:1,untaint:1,untrace_var:1,upcase:1,"upcase!":1,update:1,upto:1,"value?":1,values:1,values_at:1,warn:1,write:1,write_nonblock:1,"zero?":1,zip:1}};return{dM:{l:[a],c:b,k:d},m:[{cN:"comment",b:"#",e:"$",c:["yardoctag"]},{cN:"yardoctag",b:"@[A-Za-z]+",e:"^"},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:["yardoctag"],r:10},{cN:"comment",b:"^__END__",e:"\\n$"},{cN:"params",b:"\\(",e:"\\)",l:[a],k:d,c:b},{cN:"function",b:"\\bdef\\s+",e:" |$|;",l:[a],k:d,c:["ftitle","params","comment"]},{cN:"ftitle",displayClassName:"title",b:c,e:"^",l:[a],k:d},{cN:"class",b:"\\b(class|module)\\b",e:"$|;",l:[hljs.UIR],k:d,c:["title","inheritance","comment"],k:{"class":1,module:1}},{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",e:"^",r:0},{cN:"inheritance",b:"<\\s*",e:"^",c:["parent"]},{cN:"parent",b:"("+hljs.IR+"::)?"+hljs.IR,e:"^"},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",e:"^",r:0},{cN:"number",b:"\\?\\w",e:"^"},{cN:"string",b:"'",e:"'",c:["escape","subst"],r:0},{cN:"string",b:'"',e:'"',c:["escape","subst"],r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?{",e:"}",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?<",e:">",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?/",e:"/",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?%",e:"%",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?-",e:"-",c:["escape","subst"],r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:["escape","subst"],r:10},{cN:"constant",b:"(::)?([A-Z]\\w*(::)?)+",e:"^",r:0},{cN:"symbol",b:":",e:"^",c:["string","identifier"]},{cN:"identifier",b:a,e:"^",l:[a],k:d,r:0},hljs.BE,{cN:"subst",b:"#\\{",e:"}",l:[a],k:d,c:b},{cN:"regexp_container",b:"("+hljs.RSR+")\\s*",e:"^",nM:true,c:["comment","regexp"],r:0},{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:["escape"]},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))",e:"^"}]}}();hljs.XML_COMMENT={cN:"comment",b:"<!--",e:"-->"};hljs.XML_ATTR={cN:"attribute",b:"\\s[A-Za-z0-9\\._:-]+=",e:"^",c:["value"]};hljs.XML_VALUE_QUOT={cN:"value",b:'"',e:'"'};hljs.XML_VALUE_APOS={cN:"value",b:"'",e:"'"};hljs.LANGUAGES.xml={dM:{c:["pi","comment","cdata","tag"]},cI:true,m:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},hljs.XML_COMMENT,{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>"},{cN:"tag",b:"</?",e:">",c:["title","tag_internal"],r:1.5},{cN:"title",b:"[A-Za-z0-9\\._:-]+",e:"^",r:0},{cN:"tag_internal",b:"^",eW:true,nM:true,c:["attribute"],r:0,i:"[\\+\\.]"},hljs.XML_ATTR,hljs.XML_VALUE_QUOT,hljs.XML_VALUE_APOS]};hljs.HTML_TAGS={code:1,kbd:1,font:1,noscript:1,style:1,img:1,title:1,menu:1,tt:1,tr:1,param:1,li:1,tfoot:1,th:1,input:1,td:1,dl:1,blockquote:1,fieldset:1,big:1,dd:1,abbr:1,optgroup:1,dt:1,button:1,isindex:1,p:1,small:1,div:1,dir:1,em:1,frame:1,meta:1,sub:1,bdo:1,label:1,acronym:1,sup:1,body:1,xml:1,basefont:1,base:1,br:1,address:1,strong:1,legend:1,ol:1,script:1,caption:1,s:1,col:1,h2:1,h3:1,h1:1,h6:1,h4:1,h5:1,table:1,select:1,noframes:1,span:1,area:1,dfn:1,strike:1,cite:1,thead:1,head:1,option:1,form:1,hr:1,"var":1,link:1,b:1,colgroup:1,ul:1,applet:1,del:1,iframe:1,pre:1,frameset:1,ins:1,tbody:1,html:1,samp:1,map:1,object:1,a:1,xmlns:1,center:1,textarea:1,i:1,q:1,u:1};hljs.HTML_DOCTYPE={cN:"doctype",b:"<!DOCTYPE",e:">",r:10};hljs.HTML_ATTR={cN:"attribute",b:"\\s[a-zA-Z\\:_-]+=",e:"^",c:["value"]};hljs.HTML_SHORT_ATTR={cN:"attribute",b:" [a-zA-Z]+",e:"^"};hljs.HTML_VALUE={cN:"value",b:"[a-zA-Z0-9]+",e:"^"};hljs.LANGUAGES.html={dM:{c:["tag","comment","doctype","vbscript"]},cI:true,m:[hljs.XML_COMMENT,hljs.HTML_DOCTYPE,{cN:"tag",l:[hljs.IR],k:hljs.HTML_TAGS,b:"<style",e:">",c:["attribute"],i:"[\\+\\.]",starts:"css"},{cN:"tag",l:[hljs.IR],k:hljs.HTML_TAGS,b:"<script",e:">",c:["attribute"],i:"[\\+\\.]",starts:"javascript"},{cN:"tag",l:[hljs.IR],k:hljs.HTML_TAGS,b:"<[A-Za-z/]",e:">",c:["attribute"],i:"[\\+\\.]"},{cN:"css",e:"</style>",rE:true,subLanguage:"css"},{cN:"javascript",e:"<\/script>",rE:true,subLanguage:"javascript"},hljs.HTML_ATTR,hljs.HTML_SHORT_ATTR,hljs.XML_VALUE_QUOT,hljs.XML_VALUE_APOS,hljs.HTML_VALUE,{cN:"vbscript",b:"<%",e:"%>",subLanguage:"vbscript"}]};hljs.LANGUAGES.javascript={dM:{l:[hljs.UIR],c:["string","comment","number","regexp_container","function"],k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}}},m:[hljs.CLCM,hljs.CBLCLM,hljs.CNM,hljs.ASM,hljs.QSM,hljs.BE,{cN:"regexp_container",b:"("+hljs.RSR+"|case|return|throw)\\s*",e:"^",nM:true,l:[hljs.IR],k:{"return":1,"throw":1,"case":1},c:["comment","regexp"],r:0},{cN:"regexp",b:"/.*?[^\\\\/]/[gim]*",e:"^"},{cN:"function",b:"\\bfunction\\b",e:"{",l:[hljs.UIR],k:{"function":1},c:["title","params"]},{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*",e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string","comment"]}]};hljs.LANGUAGES.lua=function(){var a="\\[=*\\[",b="\\]=*\\]";return{dM:{l:[hljs.UIR],k:{keyword:{and:1,"break":1,"do":1,"else":1,elseif:1,end:1,"false":1,"for":1,"if":1,"in":1,local:1,nil:1,not:1,or:1,repeat:1,"return":1,then:1,"true":1,until:1,"while":1},built_in:{_G:1,_VERSION:1,assert:1,collectgarbage:1,dofile:1,error:1,getfenv:1,getmetatable:1,ipairs:1,load:1,loadfile:1,loadstring:1,module:1,next:1,pairs:1,pcall:1,print:1,rawequal:1,rawget:1,rawset:1,require:1,select:1,setfenv:1,setmetatable:1,tonumber:1,tostring:1,type:1,unpack:1,xpcall:1,coroutine:1,debug:1,io:1,math:1,os:1,"package":1,string:1,table:1}},c:["comment","function","number","string"]},m:[{cN:"comment",b:"--(?!"+a+")",e:"$"},{cN:"comment",b:"--"+a,e:b,c:["long_brackets"],r:10},{cN:"long_brackets",b:a,e:b,c:["long_brackets"],nM:true},{cN:"function",b:"\\bfunction\\b",e:"\\)",l:[hljs.UIR],k:{"function":1},c:["title","params","comment"]},{cN:"title",b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",e:"^"},{cN:"params",b:"\\(",eW:true,c:["comment"]},hljs.CNM,hljs.ASM,hljs.QSM,{cN:"string",b:a,e:b,c:["long_brackets"],r:10},hljs.BE]}}();hljs.LANGUAGES.lisp=function(){var a="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*";var b="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";return{cI:true,dM:{l:[a],c:["literal","number","string","comment","quoted","list"],i:"[^\\s]"},m:[{cN:"string",b:'"',e:'"',c:["escape"],r:0},hljs.BE,{cN:"number",b:b,e:"^"},{cN:"number",b:"#b[0-1]+(/[0-1]+)?",e:"^"},{cN:"number",b:"#o[0-7]+(/[0-7]+)?",e:"^"},{cN:"number",b:"#x[0-9a-f]+(/[0-9a-f]+)?",e:"^"},{cN:"number",b:"#c\\("+b+" +"+b,e:"\\)"},{cN:"comment",b:";",e:"$"},{cN:"quoted",b:"['`]\\(",e:"\\)",c:["number","string","variable","keyword","quoted_list"]},{cN:"quoted",b:"\\(quote ",e:"\\)",c:["number","string","variable","keyword","quoted_list"],l:[a],k:{title:{quote:1}}},{cN:"quoted_list",b:"\\(",e:"\\)",c:["quoted_list","literal","number","string"]},{cN:"list",b:"\\(",e:"\\)",c:["title","body"]},{cN:"title",b:a,e:"^",eW:true},{cN:"body",b:"^",eW:true,eE:true,c:["quoted","list","literal","number","string","comment","variable","keyword"]},{cN:"keyword",b:"[:&]"+a,e:"^"},{cN:"variable",b:"\\*",e:"\\*"},{cN:"literal",b:"\\b(t{1}|nil)\\b",e:"^"}]}}();hljs.LANGUAGES.java={dM:{l:[hljs.UIR],c:["javadoc","comment","string","class","number","annotation"],k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1}},m:[{cN:"class",l:[hljs.UIR],b:"(class |interface )",e:"{",i:":",k:{"class":1,"interface":1},c:["inheritance","title"]},{cN:"inheritance",b:"(implements|extends)",e:"^",nM:true,l:[hljs.IR],k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR,e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string","annotation"]},hljs.CNM,hljs.ASM,hljs.QSM,hljs.BE,hljs.CLCM,{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:["javadoctag"],r:10},{cN:"javadoctag",b:"@[A-Za-z]+",e:"^"},hljs.CBLCLM,{cN:"annotation",b:"@[A-Za-z]+",e:"^"}]};hljs.LANGUAGES.php={dM:{l:[hljs.IR],c:["comment","number","string","variable","preprocessor"],k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,"eval":1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1}},cI:true,m:[hljs.CLCM,hljs.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:["phpdoc"]},{cN:"phpdoc",b:"\\s@[A-Za-z]+",e:"^",r:10},hljs.CNM,{cN:"string",b:"'",e:"'",c:["escape"],r:0},{cN:"string",b:'"',e:'"',c:["escape"],r:0},hljs.BE,{cN:"variable",b:"\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*",e:"^"},{cN:"preprocessor",b:"<\\?php",e:"^",r:10},{cN:"preprocessor",b:"\\?>",e:"^"}]};hljs.LANGUAGES.python={dM:{l:[hljs.UIR],i:"(</|->)",c:["comment","string","function","class","number","decorator"],k:{keyword:{and:1,elif:1,is:1,global:1,as:1,"in":1,"if":1,from:1,raise:1,"for":1,except:1,"finally":1,print:1,"import":1,pass:1,"return":1,exec:1,"else":1,"break":1,not:1,"with":1,"class":1,assert:1,yield:1,"try":1,"while":1,"continue":1,del:1,or:1,def:1,lambda:1,nonlocal:10},built_in:{None:1,True:1,False:1,Ellipsis:1,NotImplemented:1}}},m:[{cN:"function",l:[hljs.UIR],b:"\\bdef ",e:":",i:"$",k:{def:1},c:["title","params"],r:10},{cN:"class",l:[hljs.UIR],b:"\\bclass ",e:":",i:"[${]",k:{"class":1},c:["title","params"],r:10},{cN:"title",b:hljs.UIR,e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string"]},hljs.HCM,hljs.CNM,{cN:"string",b:"u?r?'''",e:"'''",r:10},{cN:"string",b:'u?r?"""',e:'"""',r:10},hljs.ASM,hljs.QSM,hljs.BE,{cN:"string",b:"(u|r|ur)'",e:"'",c:["escape"],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:["escape"],r:10},{cN:"decorator",b:"@",e:"$"}]};hljs.LANGUAGES.tex={dM:{c:["parameter","command","special","formula","comment"]},m:[{cN:"parameter",b:"\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",e:"^",rB:true,c:["command","number"],nM:true,r:10},{cN:"command",b:"\\\\[a-zA-Zа-яА-я]+[\\*]?",e:"^",r:10},{cN:"command",b:"\\\\[^a-zA-Zа-яА-я0-9]",e:"^",r:0},{cN:"comment",b:"%",e:"$",r:0},{cN:"special",b:"[{}\\[\\]\\&#~]",e:"^",r:0},{cN:"formula",b:"\\$\\$",e:"\\$\\$",c:["command","special"],r:0},{cN:"formula",b:"\\$",e:"\\$",c:["command","special"],r:0},{cN:"number",b:" *=",e:"-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",eB:true}]};hljs.LANGUAGES.sql={cI:true,dM:{c:["operator","comment"],i:"[^\\s]"},m:[{cN:"operator",b:"(b|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma)\\b",e:";|$",c:["string","number","newline"],l:["[a-zA-Z][a-zA-Z0-9_\\.]*"],k:{keyword:{all:1,partial:1,global:1,month:1,current_timestamp:1,using:1,go:1,revoke:1,smallint:1,indicator:1,"end-exec":1,disconnect:1,zone:1,"with":1,character:1,assertion:1,to:1,add:1,current_user:1,usage:1,input:1,local:1,alter:1,match:1,collate:1,real:1,then:1,rollback:1,get:1,read:1,timestamp:1,session_user:1,not:1,integer:1,bit:1,unique:1,day:1,minute:1,desc:1,insert:1,execute:1,like:1,ilike:2,level:1,decimal:1,drop:1,"continue":1,isolation:1,found:1,where:1,constraints:1,domain:1,right:1,national:1,some:1,module:1,transaction:1,relative:1,second:1,connect:1,escape:1,close:1,system_user:1,"for":1,deferred:1,section:1,cast:1,current:1,sqlstate:1,allocate:1,intersect:1,deallocate:1,numeric:1,"public":1,preserve:1,full:1,"goto":1,initially:1,asc:1,no:1,key:1,output:1,collation:1,group:1,by:1,union:1,session:1,both:1,last:1,language:1,constraint:1,column:1,of:1,space:1,foreign:1,deferrable:1,prior:1,connection:1,unknown:1,action:1,commit:1,view:1,or:1,first:1,into:1,"float":1,year:1,primary:1,cascaded:1,except:1,restrict:1,set:1,references:1,names:1,table:1,outer:1,open:1,select:1,size:1,are:1,rows:1,from:1,prepare:1,distinct:1,leading:1,create:1,only:1,next:1,inner:1,authorization:1,schema:1,corresponding:1,option:1,declare:1,precision:1,immediate:1,"else":1,timezone_minute:1,external:1,varying:1,translation:1,"true":1,"case":1,exception:1,join:1,hour:1,"default":1,"double":1,scroll:1,value:1,cursor:1,descriptor:1,values:1,dec:1,fetch:1,procedure:1,"delete":1,and:1,"false":1,"int":1,is:1,describe:1,"char":1,as:1,at:1,"in":1,varchar:1,"null":1,trailing:1,any:1,absolute:1,current_time:1,end:1,grant:1,privileges:1,when:1,cross:1,check:1,write:1,current_date:1,pad:1,begin:1,temporary:1,exec:1,time:1,update:1,catalog:1,user:1,sql:1,date:1,on:1,identity:1,timezone_hour:1,natural:1,whenever:1,interval:1,work:1,order:1,cascade:1,diagnostics:1,nchar:1,having:1,left:1,call:1,"do":1,handler:1,load:1,replace:1,truncate:1,start:1,lock:1,show:1,pragma:1},aggregate:{count:1,sum:1,min:1,max:1,avg:1}}},{cN:"newline",b:"\\n",e:"^",nM:true},hljs.CNM,hljs.CBLCLM,{cN:"comment",b:"--",e:"$"},{cN:"string",b:"'",e:"'",c:["escape","squote"],r:0},{cN:"squote",b:"''",e:"^",nM:true},{cN:"string",b:'"',e:'"',c:["escape","dquote"],r:0},{cN:"dquote",b:'""',e:"^",nM:true},{cN:"string",b:"`",e:"`",c:["escape"]},hljs.BE]};hljs.LANGUAGES.perl=function(){var b=["comment","string","number","regexp","sub","variable","operator","pod"];var a={getpwent:1,getservent:1,quotemeta:1,msgrcv:1,scalar:1,kill:1,dbmclose:1,undef:1,lc:1,ma:1,syswrite:1,tr:1,send:1,umask:1,sysopen:1,shmwrite:1,vec:1,qx:1,utime:1,local:1,oct:1,semctl:1,localtime:1,readpipe:1,"do":1,"return":1,format:1,read:1,sprintf:1,dbmopen:1,pop:1,getpgrp:1,not:1,getpwnam:1,rewinddir:1,qq:1,fileno:1,qw:1,endprotoent:1,wait:1,sethostent:1,bless:1,s:1,opendir:1,"continue":1,each:1,sleep:1,endgrent:1,shutdown:1,dump:1,chomp:1,connect:1,getsockname:1,die:1,socketpair:1,close:1,flock:1,exists:1,index:1,shmget:1,sub:1,"for":1,endpwent:1,redo:1,lstat:1,msgctl:1,setpgrp:1,abs:1,exit:1,select:1,print:1,ref:1,gethostbyaddr:1,unshift:1,fcntl:1,syscall:1,"goto":1,getnetbyaddr:1,join:1,gmtime:1,symlink:1,semget:1,splice:1,x:1,getpeername:1,recv:1,log:1,setsockopt:1,cos:1,last:1,reverse:1,gethostbyname:1,getgrnam:1,study:1,formline:1,endhostent:1,times:1,chop:1,length:1,gethostent:1,getnetent:1,pack:1,getprotoent:1,getservbyname:1,rand:1,mkdir:1,pos:1,chmod:1,y:1,substr:1,endnetent:1,printf:1,next:1,open:1,msgsnd:1,readdir:1,use:1,unlink:1,getsockopt:1,getpriority:1,rindex:1,wantarray:1,hex:1,system:1,getservbyport:1,endservent:1,"int":1,chr:1,untie:1,rmdir:1,prototype:1,tell:1,listen:1,fork:1,shmread:1,ucfirst:1,setprotoent:1,"else":1,sysseek:1,link:1,getgrgid:1,shmctl:1,waitpid:1,unpack:1,getnetbyname:1,reset:1,chdir:1,grep:1,split:1,require:1,caller:1,lcfirst:1,until:1,warn:1,"while":1,values:1,shift:1,telldir:1,getpwuid:1,my:1,getprotobynumber:1,"delete":1,and:1,sort:1,uc:1,defined:1,srand:1,accept:1,"package":1,seekdir:1,getprotobyname:1,semop:1,our:1,rename:1,seek:1,"if":1,q:1,chroot:1,sysread:1,setpwent:1,no:1,crypt:1,getc:1,chown:1,sqrt:1,write:1,setnetent:1,setpriority:1,foreach:1,tie:1,sin:1,msgget:1,map:1,stat:1,getlogin:1,unless:1,elsif:1,truncate:1,exec:1,keys:1,glob:1,tied:1,closedir:1,ioctl:1,socket:1,readlink:1,"eval":1,xor:1,readline:1,binmode:1,setservent:1,eof:1,ord:1,bind:1,alarm:1,pipe:1,atan2:1,getgrent:1,exp:1,time:1,push:1,setgrent:1,gt:1,lt:1,or:1,ne:1,m:1};return{dM:{l:[hljs.IR],c:b,k:a},m:[{cN:"variable",b:"\\$\\d",e:"^"},{cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)",e:"^"},{cN:"subst",b:"[$@]\\{",e:"}",l:[hljs.IR],k:a,c:b,r:10},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",e:"^",r:0},{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:["escape","subst","variable"],r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:["escape","subst","variable"],r:5},{cN:"string",b:"qw\\s+q",e:"q",c:["escape","subst","variable"],r:5},{cN:"string",b:"'",e:"'",c:["escape"],r:0},{cN:"string",b:'"',e:'"',c:["escape","subst","variable"],r:0},hljs.BE,{cN:"string",b:"`",e:"`",c:["escape"]},{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",e:"^",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:["escape"],r:0},{cN:"string",b:"{\\w+}",e:"^",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",e:"^",r:0},{cN:"sub",b:"\\bsub\\b",e:"(\\s*\\(.*?\\))?[;{]",l:[hljs.IR],k:{sub:1},r:5},{cN:"operator",b:"-\\w\\b",e:"^",r:0},hljs.HCM,{cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},{cN:"pod",b:"\\=\\w",e:"\\=cut"}]}}();hljs.LANGUAGES.scala={dM:{l:[hljs.UIR],c:["javadoc","comment","string","class","number","annotation"],k:{type:1,yield:1,lazy:1,override:1,def:1,"with":1,val:1,"var":1,"false":1,"true":1,sealed:1,"abstract":1,"private":1,trait:1,object:1,"null":1,"if":1,"for":1,"while":1,"throw":1,"finally":1,"protected":1,"extends":1,"import":1,"final":1,"return":1,"else":1,"break":1,"new":1,"catch":1,"super":1,"class":1,"case":1,"package":1,"default":1,"try":1,"this":1,match:1,"continue":1,"throws":1}},m:[{cN:"class",l:[hljs.UIR],b:"((case )?class |object |trait )",e:"({|$)",i:":",k:{"case":1,"class":1,trait:1,object:1},c:["inheritance","title","params"]},{cN:"inheritance",b:"(extends|with)",e:"^",nM:true,l:[hljs.IR],k:{"extends":1,"with":1},r:10},{cN:"title",b:hljs.UIR,e:"^"},{cN:"params",b:"\\(",e:"\\)",c:["string","annotation"]},hljs.CNM,hljs.ASM,hljs.QSM,hljs.BE,hljs.CLCM,{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:["javadoctag"],r:10},{cN:"javadoctag",b:"@[A-Za-z]+",e:"^"},hljs.CBLCLM,{cN:"annotation",b:"@[A-Za-z]+",e:"^"},{cN:"string",b:'u?r?"""',e:'"""',r:10}]};hljs.LANGUAGES.cpp=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1}};return{dM:{l:[hljs.UIR],i:"</",c:["comment","string","number","preprocessor","stl_container"],k:a},m:[hljs.CLCM,hljs.CBLCLM,hljs.CNM,hljs.QSM,hljs.BE,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap)\\s*<",e:">",c:["stl_container"],l:[hljs.UIR],k:a,r:10}]}}();