import{_ as O,d as V,u as M,ab as g,k as A,c as x,a as r,b as s,e as k,t as h,l as B,m as R,p as Z,n as q,bx as L,bC as j,s as D,g as F,o as p,h as G}from"./plugin-vue_export-helper.c1af9d5a.js";/* empty css             */import{u as P,M as z}from"./marquee-text.2c1485c5.js";import{c as J}from"./_commonjsHelpers.2cf1d77b.js";import{a as W}from"./anime.es.4ca930c3.js";import{r as S}from"./raceToImg.c9ef94a0.js";var X=function(t){if(typeof t!="number")throw new TypeError("Expected a number");var n=t>0?Math.floor:Math.ceil;return{days:n(t/864e5),hours:n(t/36e5)%24,minutes:n(t/6e4)%60,seconds:n(t/1e3)%60,milliseconds:n(t)%1e3}},I={exports:{}};(function(t){(function(n){function o(i,l){l=l||2;var e=Number(i)<0,a=i.toString(),u=0;return e&&(a=a.slice(1)),u=l-a.length+1,a=new Array(u).join("0").concat(a),(e?"-":"")+a}t.exports?t.exports=o:n.addZero=o})(J)})(I);var K=X,m=I.exports,Q=function(t,n){var o=n&&n.leading,i=t<0?-t:t,l=t<=-1e3?"-":"",e=K(i),a=m(e.seconds);return e.days?l+e.days+":"+m(e.hours)+":"+m(e.minutes)+":"+a:e.hours?l+(o?m(e.hours):e.hours)+":"+m(e.minutes)+":"+a:l+(o?m(e.minutes):e.minutes)+":"+a};const H=t=>(Z("data-v-33ce0e82"),t=t(),q(),t),U={class:"container",ref:"container"},Y=H(()=>r("div",{class:"slidein cta-slidein"},[r("div",{class:"cta"},[r("h1",null,"ESCHAMP.COM/JOIN")])],-1)),$={class:"slidein ticker-slidein"},ee={key:0,class:"ticker"},te={class:"yellow-box"},ae={class:"race-container"},se=["src"],re={class:"race-container"},ne=["src"],oe={class:"head2head"},ie={class:"score"},ce={class:"score"},de={class:"top-text"},le=["innerHTML"],ue={class:"slidein timer-slidein"},_e={key:0,class:"next-match-timer"},he=H(()=>r("h3",null,"NEXT MATCH",-1)),pe={style:{"margin-top":"-5px"}},me=V({setup(t){const n=M("ticker","eschamp-bundle",{defaultValue:L}),o=P(),i=M("timers","eschamp-bundle",{defaultValue:j}),l=g(()=>!(i!=null&&i.data)||!i.data.nextMatchPlaying?"SOON":Q(i.data.nextMatch*1e3,{leading:!0})),e=M("scoreboard","eschamp-bundle",{defaultValue:D}),a=M("bots","eschamp-bundle",{defaultValue:F}),u=g(()=>{var _,d;return!((d=(_=e==null?void 0:e.data)==null?void 0:_.bot1)!=null&&d.id)||!(a!=null&&a.data)?null:a.data[e.data.bot1.id]}),f=g(()=>{var _,d;return!((d=(_=e==null?void 0:e.data)==null?void 0:_.bot2)!=null&&d.id)||!(a!=null&&a.data)?null:a.data[e.data.bot2.id]}),T=g(()=>u!=null&&u.value?S(u.value.Race):null),w=g(()=>f!=null&&f.value?S(f.value.Race):null),c=W.timeline({easing:"easeInOutExpo",autoplay:!1});return A(()=>{Array.from(document.getElementsByClassName("slidein")).forEach((d,b)=>{var y;if(!(d.firstChild instanceof HTMLElement))return;const v=(y=window.getComputedStyle(d.firstChild))==null?void 0:y.width;!v||c.add({targets:d,width:v},b*100)}),c.play()}),nodecg.listenFor("show-main-ticker",()=>{c.currentTime!==c.duration&&(console.log("SHOWING ticker"),c.direction==="reverse"&&c.reverse(),c.play())}),nodecg.listenFor("hide-main-ticker",()=>{c.currentTime!==0&&(console.log("hiding ticker"),c.direction==="normal"&&c.reverse(),c.play())}),(_,d)=>{var b,v,y,C,N,E;return p(),x("div",U,[Y,r("div",$,[((b=s(n))==null?void 0:b.data)&&((v=s(e))==null?void 0:v.data)?(p(),x("div",ee,[r("div",te,[r("div",ae,[s(T)?(p(),x("img",{key:0,class:"race",src:s(T)},null,8,se)):k("",!0)]),r("div",re,[s(w)?(p(),x("img",{key:0,class:"race",src:s(w)},null,8,ne)):k("",!0)])]),r("div",oe,[r("div",null,[r("h1",null,h((y=s(u))==null?void 0:y.Name),1),r("h1",ie,h(s(e).data.bot1.score),1)]),r("div",null,[r("h1",null,h((C=s(f))==null?void 0:C.Name),1),r("h1",ce,h(s(e).data.bot2.score),1)])]),r("h1",de,h(s(n).data.topText),1),s(o)&&((N=s(o))==null?void 0:N.duration)?(p(),B(s(z),{class:"bottom-text",repeat:10,duration:s(o).duration,key:s(o).revision},{default:R(()=>[r("span",{innerHTML:s(o).text},null,8,le)]),_:1},8,["duration"])):k("",!0)])):k("",!0)]),r("div",ue,[(E=s(i))!=null&&E.data?(p(),x("div",_e,[he,r("h1",pe,h(s(l)),1)])):k("",!0)])],512)}}});var fe=O(me,[["__scopeId","data-v-33ce0e82"]]);const ve=G(fe);ve.mount("#app");