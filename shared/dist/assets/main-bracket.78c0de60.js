import{_,d as x,u as m,o as v,a,c as e,b as t,f as i,F as p,g as u,h as f,bB as y,j as w,t as c,e as B}from"./plugin-vue_export-helper.2efe6ab9.js";/* empty css             */import{m as M}from"./Match.dc67f5d3.js";import{a as s}from"./anime.es.4ca930c3.js";var z="/bundles/eschamp-bundle/shared/dist/assets/Main_Lines.1ecc98c3.png";const I={class:"main-bracket"},V=["src"],j={key:0,class:"bracket"},F={class:"round"},N={class:"match"},C=["src"],L={class:"bot"},O={class:"bot"},Q=x({__name:"Main",setup(E){const d=m("mainBracket","eschamp-bundle",{defaultValue:y}),n=m("bots","eschamp-bundle",{defaultValue:w}),l=h=>{var r;return n!=null&&n.data?(r=n.data[h])==null?void 0:r.Name:null},k=()=>{s({targets:".round",translateX:[-100,0],opacity:[0,1],delay:s.stagger(500),duration:750,easing:"easeOutQuad",complete:()=>{s({targets:".bg",opacity:[0,1],duration:1e3,easing:"easeOutQuad"})}})};return v(()=>setTimeout(k,1500)),(h,r)=>{var b;return a(),e("div",I,[t("img",{class:"bg",src:i(z)},null,8,V),(b=i(d))!=null&&b.data?(a(),e("div",j,[(a(!0),e(p,null,u(i(d).data,(g,R)=>(a(),e("div",F,[(a(!0),e(p,null,u(g,(o,S)=>(a(),e("div",N,[t("img",{class:"match-bg",src:i(M)},null,8,C),t("div",L,[t("h1",null,c(l(o.bot1.id||"")),1),t("h1",null,c(o.bot1.score),1)]),t("div",O,[t("h1",null,c(l(o.bot2.id||"")),1),t("h1",null,c(o.bot2.score),1)])]))),256))]))),256))])):f("",!0)])}}});var A=_(Q,[["__scopeId","data-v-e3826248"]]);const D=B(A);D.mount("#app");
