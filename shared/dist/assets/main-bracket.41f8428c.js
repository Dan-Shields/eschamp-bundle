import{_ as v,d as f,u as m,o as k,c as t,a as e,f as o,F as p,g as b,h as y,bA as B,j as x,b as a,t as r,e as I}from"./plugin-vue_export-helper.45550751.js";/* empty css             */import{m as M}from"./Match.dc67f5d3.js";import{a as d}from"./anime.es.4ca930c3.js";var V="/bundles/eschamp-bundle/shared/dist/assets/Main_Lines.1ecc98c3.png";const F={class:"main-bracket"},N=["src"],A={key:0,class:"bracket"},C={class:"round"},L={class:"match"},O=["src"],Q={class:"bot"},j={class:"bot"},D=f({setup(S){const i=m("mainBracket","eschamp-bundle",{defaultValue:B}),s=m("bots","eschamp-bundle",{defaultValue:x}),u=l=>{var c;return s!=null&&s.data?(c=s.data[l])==null?void 0:c.Name:null},h=()=>{d({targets:".round",translateX:[-100,0],opacity:[0,1],delay:d.stagger(500),duration:750,easing:"easeOutQuad",complete:()=>{d({targets:".bg",opacity:[0,1],duration:1e3,easing:"easeOutQuad"})}})};return k(()=>setTimeout(h,1500)),(l,c)=>{var _;return a(),t("div",F,[e("img",{class:"bg",src:o(V)},null,8,N),(_=o(i))!=null&&_.data?(a(),t("div",A,[(a(!0),t(p,null,b(o(i).data,(g,T)=>(a(),t("div",C,[(a(!0),t(p,null,b(g,(n,X)=>(a(),t("div",L,[e("img",{class:"match-bg",src:o(M)},null,8,O),e("div",Q,[e("h1",null,r(u(n.bot1.id||"")),1),e("h1",null,r(n.bot1.score),1)]),e("div",j,[e("h1",null,r(u(n.bot2.id||"")),1),e("h1",null,r(n.bot2.score),1)])]))),256))]))),256))])):y("",!0)])}}});var E=v(D,[["__scopeId","data-v-e3826248"]]);const R=I(E);R.mount("#app");
