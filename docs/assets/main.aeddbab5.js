
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e,d as a,u as s,a as o,b as i,c as t,w as r,o as d,e as n,f as m,g as p,n as l,h as c,i as u,j as b,k as f,l as j,m as h,p as x,q as v,r as y,s as g,t as M,T as k,v as w,K as _,x as C}from"./index.90e3157b.js";import{E as P}from"./el-backtop.21ecda13.js";import{_ as D}from"./index.d26fafe6.js";import{_ as S}from"./index.c20aae0a.js";import q from"./index.e1426103.js";import F from"./index.a63b6dbc.js";import L from"./index.16b7a8e6.js";import $ from"./index.f34eb3c6.js";import A from"./index.3c7e92ce.js";import B from"./index.926a64c6.js";import"./error2.13f96d52.js";/* empty css                */import"./index.a7e17429.js";import"./index.69b79e5f.js";import"./index.4b0b0e60.js";import"./el-button.607a2acf.js";import"./index.8bfffa1c.js";import"./index2.a22147d6.js";import"./index2.f9558fe3.js";/* empty css                  */import"./index2.07f7ca1c.js";import"./index2.a0f42dde.js";import"./el-tooltip.0ca4bad9.js";import"./index.f3a57263.js";import"./typescript2.b7eef2c1.js";import"./el-input.9d6a86cc.js";import"./el-divider.94df15ea.js";import"./el-alert.ecde57de.js";const E={class:"layout"},I={id:"app-main"},J={class:"wrapper"},K={class:"main"},O=a({name:"Layout"});var R=e(Object.assign(O,{setup(e){const{proxy:a}=h(),O=x(),R=v(),T=s(),z=o(),G=i(),H=t((()=>void 0!==O.meta.copyright?O.meta.copyright:T.copyright.enable));function N(){R.push({name:"reload"})}return r((()=>T.menu.subMenuCollapse),(e=>{"mobile"===T.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),r((()=>O.path),(()=>{"mobile"===T.mode&&T.$patch((e=>{e.menu.subMenuCollapse=!0}))})),d((()=>{a.$hotkeys("f5",(e=>{T.topbar.enablePageReload&&(e.preventDefault(),N())}))})),y("reload",N),y("switchMenu",(function(e){G.setActived(e),T.menu.switchMainMenuAndPageJump&&(C(G.sidebarMenusFirstDeepestPath)?window.open(G.sidebarMenusFirstDeepestPath,"_blank"):R.push(G.sidebarMenusFirstDeepestPath))})),(e,a)=>{const s=g("router-view"),o=S,i=D,t=P;return M(),n("div",E,[m("div",I,[p(q),m("div",J,[m("div",{class:l(["sidebar-container",{show:"mobile"===c(T).mode&&!c(T).menu.subMenuCollapse}])},[p(F),p(L)],2),m("div",{class:l(["sidebar-mask",{show:"mobile"===c(T).mode&&!c(T).menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>c(T).toggleSidebarCollapse())},null,2),m("div",{class:"main-container",style:u({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==c(T).menu.menuMode||c(T).topbar.enableSidebarCollapse||c(T).topbar.enableBreadcrumb?(M(),b($,{key:0})):f("v-if",!0),m("div",K,[p(o,null,{default:j((()=>[p(s,null,{default:j((({Component:e,route:a})=>[p(k,{name:"main",mode:"out-in",appear:""},{default:j((()=>[(M(),b(_,{include:c(z).list},[(M(),b(w(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})])),_:1})]),c(H)?(M(),b(i,{key:1})):f("v-if",!0)],4)]),p(t,{right:20,bottom:20,title:"回到顶部"})]),p(A),p(B)])}}}),[["__scopeId","data-v-042cacdc"]]);export{R as default};
//# sourceMappingURL=main.aeddbab5.js.map