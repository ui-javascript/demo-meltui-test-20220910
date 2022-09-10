
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{_ as a,A as e,be as n,o as s,e as t,g as o,f as l,l as r,bf as c,M as i,N as u,q as d,t as f,Y as v,J as p}from"./index.9528fe4a.js";import{E as m}from"./el-button.7ed08b15.js";import{_}from"./index.279f1f14.js";import"./index.8bfffa1c.js";import"./index2.25e62834.js";import"./index2.709687ee.js";const j=a=>(i("data-v-439c912c"),a=a(),u(),a),x={class:"notfound"},b={class:"content"},w=j((()=>l("h1",null,"404",-1))),I=j((()=>l("div",{class:"desc"},"抱歉，你访问的页面不存在",-1))),y={__name:"[...all]",setup(a){const c=d(),i=e({inter:null,countdown:5});function u(){c.push("/")}return n((()=>{clearInterval(i.value.inter)})),s((()=>{i.value.inter=setInterval((()=>{i.value.countdown--,0==i.value.countdown&&(clearInterval(i.value.inter),u())}),1e3)})),(a,e)=>{const n=_,s=m;return f(),t("div",x,[o(n,{name:"404",class:"icon"}),l("div",b,[w,I,o(s,{type:"primary",onClick:u},{default:r((()=>[v(p(i.value.countdown)+" 秒后，返回首页",1)])),_:1})])])}}};"function"==typeof c&&c(y);var h=a(y,[["__scopeId","data-v-439c912c"]]);export{h as default};
