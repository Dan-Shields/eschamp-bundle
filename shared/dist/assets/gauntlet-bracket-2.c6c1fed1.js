import{_ as f,d as v,u as p,o as k,c as e,a as t,f as o,F as m,g as b,h as y,k as B,j as x,b as a,t as r,e as I}from"./plugin-vue_export-helper.45550751.js";/* empty css             */import{m as V}from"./Match.dc67f5d3.js";import{a as l}from"./anime.es.4ca930c3.js";var F="/bundles/eschamp-bundle/shared/dist/assets/Gauntlet_2_Lines.5bf890d0.png";const G={class:"gauntlet-bracket"},N=["src"],C={key:0,class:"bracket"},L={class:"round"},O={class:"match"},Q=["src"],j={class:"bot"},A={class:"bot"},D=v({setup(R){const u=p("gauntletBracket","eschamp-bundle",{defaultValue:B}),s=p("bots","eschamp-bundle",{defaultValue:x}),d=i=>{var c;return s!=null&&s.data?(c=s.data[i])==null?void 0:c.Name:null},g=()=>{l({targets:".round",translateX:[-100,0],opacity:[0,1],delay:l.stagger(500),duration:750,easing:"easeOutQuad",complete:()=>{l({targets:".bg",opacity:[0,1],duration:1e3,easing:"easeOutQuad"})}})};return k(()=>setTimeout(g,1500)),(i,c)=>{var _;return a(),e("div",G,[t("img",{class:"bg",src:o(F)},null,8,N),(_=o(u))!=null&&_.data?(a(),e("div",C,[(a(!0),e(m,null,b(o(u).data.slice(4,7),(h,S)=>(a(),e("div",L,[(a(!0),e(m,null,b(h,(n,T)=>(a(),e("div",O,[t("img",{class:"match-bg",src:o(V)},null,8,Q),t("div",j,[t("h1",null,r(d(n.bot1.id||"")),1),t("h1",null,r(n.bot1.score),1)]),t("div",A,[t("h1",null,r(d(n.bot2.id||"")),1),t("h1",null,r(n.bot2.score),1)])]))),256))]))),256))])):y("",!0)])}}});var E=f(D,[["__scopeId","data-v-5c38b764"]]);const M=I(E);M.mount("#app");