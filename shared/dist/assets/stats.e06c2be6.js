import{_ as y,d as w,u as g,ab as f,b as s,c as _,a as t,e as S,t as o,F as V,r as k,s as x,g as N,o as l,bb as R,bu as B,h as I}from"./plugin-vue_export-helper.c1af9d5a.js";/* empty css             */import{r as L}from"./raceToImg.c9ef94a0.js";const P={key:0,class:"bot"},A=["src"],C={class:"profile"},D=["src"],F={class:"name"},E={class:"author"},T={class:"lang"},U={class:"stats"},$={class:"stat"},j={class:"label"},q={class:"value"},z=w({setup(J){const c=g("scoreboard","eschamp-bundle",{defaultValue:x}),r=g("bots","eschamp-bundle",{defaultValue:N}),d=new URLSearchParams(window.location.search).get("bot")==="2"?"bot2":"bot1",a=f(()=>{var e;return!(r!=null&&r.data)||!((e=c==null?void 0:c.data)!=null&&e[d])?null:r.data[c.data[d].id]}),u=f(()=>{var e;return L((e=a.value)==null?void 0:e.Race)});return(e,M)=>{var i,h,m,p,b,v;return s(a)?(l(),_("div",P,[t("img",{class:"avatar",src:(m=(h=(i=s(a))==null?void 0:i.Image)==null?void 0:h[0].url)!=null?m:""},null,8,A),t("div",C,[s(u)?(l(),_("img",{key:0,class:"race",src:s(u)},null,8,D)):S("",!0),t("h1",F,o((p=s(a))==null?void 0:p.Name),1),t("h4",E,o((b=s(a))==null?void 0:b.Author),1),t("h4",T,o((v=s(a))==null?void 0:v.Language),1)]),t("div",U,[(l(),_(V,null,k(4,n=>R(t("div",$,[t("h2",j,o(s(a)[`Stat${n}`]),1),t("h1",q,o(s(a)[`Stat${n}Val`]),1)],512),[[B,s(a)[`Stat${n}`]]])),64))])])):S("",!0)}}});var G=y(z,[["__scopeId","data-v-7d676fb0"]]);const H=I(G);H.mount("#app");
