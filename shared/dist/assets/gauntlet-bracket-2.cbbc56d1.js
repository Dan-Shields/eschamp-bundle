import{_,d as k,u as b,o as x,a,c as e,b as t,f as s,F as h,g,h as v,k as y,j as w,t as d,e as B}from"./plugin-vue_export-helper.2efe6ab9.js";/* empty css             */import{m as z}from"./Match.dc67f5d3.js";import{a as c}from"./anime.es.4ca930c3.js";var G="/bundles/eschamp-bundle/shared/dist/assets/Gauntlet_2_Lines.5bf890d0.png";const I={class:"gauntlet-bracket"},V=["src"],j={key:0,class:"bracket"},F={class:"round"},N={class:"match"},C=["src"],L={class:"bot"},O={class:"bot"},Q=k({__name:"Gauntlet2",setup(E){const l=b("gauntletBracket","eschamp-bundle",{defaultValue:y}),n=b("bots","eschamp-bundle",{defaultValue:w}),i=u=>{var r;return n!=null&&n.data?(r=n.data[u])==null?void 0:r.Name:null},f=()=>{c({targets:".round",translateX:[-100,0],opacity:[0,1],delay:c.stagger(500),duration:750,easing:"easeOutQuad",complete:()=>{c({targets:".bg",opacity:[0,1],duration:1e3,easing:"easeOutQuad"})}})};return x(()=>setTimeout(f,1500)),(u,r)=>{var p;return a(),e("div",I,[t("img",{class:"bg",src:s(G)},null,8,V),(p=s(l))!=null&&p.data?(a(),e("div",j,[(a(!0),e(h,null,g(s(l).data.slice(4,7),(m,M)=>(a(),e("div",F,[(a(!0),e(h,null,g(m,(o,R)=>(a(),e("div",N,[t("img",{class:"match-bg",src:s(z)},null,8,C),t("div",L,[t("h1",null,d(i(o.bot1.id||"")),1),t("h1",null,d(o.bot1.score),1)]),t("div",O,[t("h1",null,d(i(o.bot2.id||"")),1),t("h1",null,d(o.bot2.score),1)])]))),256))]))),256))])):v("",!0)])}}});var A=_(Q,[["__scopeId","data-v-df481006"]]);const D=B(A);D.mount("#app");
