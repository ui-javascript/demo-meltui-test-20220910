
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as e,d as a,u as s,a as o,b as i,c as t,w as r,o as d,e as n,f as m,g as p,n as l,h as c,i as u,j as b,k as f,l as j,m as h,p as x,q as v,r as y,s as g,t as M,T as k,v as w,K as C,x as _}from"./index.77a2b8a5.js";import{E as P}from"./el-backtop.9df5d846.js";import{_ as D}from"./index.9e1b574b.js";import S from"./index.77c51e5e.js";import q from"./index.805ca8db.js";import F from"./index.fd7ea1f2.js";import L from"./index.8efd6f44.js";import $ from"./index.135006b5.js";import A from"./index.a630fe38.js";import"./error2.13f96d52.js";/* empty css                */import"./index.dcd4b65f.js";import"./index.52cb0898.js";import"./index.56c2b8c1.js";import"./el-button.5a3907a7.js";import"./index.8bfffa1c.js";import"./index2.240ee0c6.js";import"./index2.1dc5c761.js";/* empty css                  */import"./index2.b138d437.js";import"./index2.a5df202e.js";import"./el-tooltip.0ca4bad9.js";import"./index.ea1dd414.js";import"./typescript2.b7eef2c1.js";import"./el-input.ccf6ff89.js";import"./el-divider.8192838c.js";import"./el-alert.30609c8f.js";const B={class:"layout"},E={id:"app-main"},I={class:"wrapper"},J={class:"main"},K=a({name:"Layout"});var O=e(Object.assign(K,{setup(e){const{proxy:a}=h(),K=x(),O=v(),R=s(),T=o(),z=i(),G=t((()=>void 0!==K.meta.copyright?K.meta.copyright:R.copyright.enable));function H(){O.push({name:"reload"})}return r((()=>R.menu.subMenuCollapse),(e=>{"mobile"===R.mode&&(e?document.querySelector("body").classList.remove("hidden"):document.querySelector("body").classList.add("hidden"))})),r((()=>K.path),(()=>{"mobile"===R.mode&&R.$patch((e=>{e.menu.subMenuCollapse=!0}))})),d((()=>{a.$hotkeys("f5",(e=>{R.topbar.enablePageReload&&(e.preventDefault(),H())}))})),y("reload",H),y("switchMenu",(function(e){z.setActived(e),R.menu.switchMainMenuAndPageJump&&(_(z.sidebarMenusFirstDeepestPath)?window.open(z.sidebarMenusFirstDeepestPath,"_blank"):O.push(z.sidebarMenusFirstDeepestPath))})),(e,a)=>{const s=g("router-view"),o=D,i=P;return M(),n("div",B,[m("div",E,[p(S),m("div",I,[m("div",{class:l(["sidebar-container",{show:"mobile"===c(R).mode&&!c(R).menu.subMenuCollapse}])},[p(q),p(F)],2),m("div",{class:l(["sidebar-mask",{show:"mobile"===c(R).mode&&!c(R).menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>c(R).toggleSidebarCollapse())},null,2),m("div",{class:"main-container",style:u({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==c(R).menu.menuMode||c(R).topbar.enableSidebarCollapse||c(R).topbar.enableBreadcrumb?(M(),b(L,{key:0})):f("v-if",!0),m("div",J,[p(s,null,{default:j((({Component:e,route:a})=>[p(k,{name:"main",mode:"out-in",appear:""},{default:j((()=>[(M(),b(C,{include:c(T).list},[(M(),b(w(e),{key:a.fullPath}))],1032,["include"]))])),_:2},1024)])),_:1})]),c(G)?(M(),b(o,{key:1})):f("v-if",!0)],4)]),p(i,{right:20,bottom:20,title:"回到顶部"})]),p($),p(A)])}}}),[["__scopeId","data-v-3ead4a54"]]);export{O as default};
//# sourceMappingURL=index.5f5a359b.js.map