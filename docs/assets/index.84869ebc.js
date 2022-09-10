
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{R as e,S as r,d as t,y as a,A as n,r as o,o as s,t as i,e as l,C as p,n as c,h as u,E as d,U as f,O as m,V as b,f as v,j as h,l as y,v as E,H as x,J as g,m as w,I as A,W as C,_ as T,u as k,c as _,X as j,g as R,k as S,p as I,L as N,P as O,Y as P,Q as M}from"./index.9528fe4a.js";/* empty css                */import{_ as D}from"./index.279f1f14.js";import B from"./index.67fe092e.js";import"./el-button.7ed08b15.js";import"./index.8bfffa1c.js";import"./index2.25e62834.js";import"./index2.709687ee.js";/* empty css                  */import"./index2.6bd4f6d7.js";import"./error2.13f96d52.js";import"./index2.7d8af6e5.js";const H=Symbol("breadcrumbKey");var $=d(t({name:"ElBreadcrumb",props:e({separator:{type:String,default:"/"},separatorIcon:{type:r,default:""}}),setup(e){const r=e,t=a("breadcrumb"),d=n();return o(H,r),s((()=>{const e=d.value.querySelectorAll(`.${t.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")})),(e,r)=>(i(),l("div",{ref_key:"breadcrumb",ref:d,class:c(u(t).b()),"aria-label":"Breadcrumb",role:"navigation"},[p(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);var L=d(t({name:"ElBreadcrumbItem",props:e({to:{type:f([String,Object]),default:""},replace:{type:Boolean,default:!1}}),setup(e){const r=e,t=w(),o=m(H,void 0),s=a("breadcrumb"),{separator:d,separatorIcon:f}=b(o),A=t.appContext.config.globalProperties.$router,C=n(),T=()=>{r.to&&A&&(r.replace?A.replace(r.to):A.push(r.to))};return(e,r)=>(i(),l("span",{class:c(u(s).e("item"))},[v("span",{ref_key:"link",ref:C,class:c([u(s).e("inner"),u(s).is("link",!!e.to)]),role:"link",onClick:T},[p(e.$slots,"default")],2),u(f)?(i(),h(u(x),{key:0,class:c(u(s).e("separator"))},{default:y((()=>[(i(),h(E(u(f))))])),_:1},8,["class"])):(i(),l("span",{key:1,class:c(u(s).e("separator")),role:"presentation"},g(u(d)),3))],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const F=A($,{BreadcrumbItem:L}),U=C(L);function q(e,r){void 0===r&&(r={});for(var t=function(e){for(var r=[],t=0;t<e.length;){var a=e[t];if("*"!==a&&"+"!==a&&"?"!==a)if("\\"!==a)if("{"!==a)if("}"!==a)if(":"!==a)if("("!==a)r.push({type:"CHAR",index:t,value:e[t++]});else{var n=1,o="";if("?"===e[i=t+1])throw new TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<e.length;)if("\\"!==e[i]){if(")"===e[i]){if(0==--n){i++;break}}else if("("===e[i]&&(n++,"?"!==e[i+1]))throw new TypeError("Capturing groups are not allowed at ".concat(i));o+=e[i++]}else o+=e[i++]+e[i++];if(n)throw new TypeError("Unbalanced pattern at ".concat(t));if(!o)throw new TypeError("Missing pattern at ".concat(t));r.push({type:"PATTERN",index:t,value:o}),t=i}else{for(var s="",i=t+1;i<e.length;){var l=e.charCodeAt(i);if(!(l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||95===l))break;s+=e[i++]}if(!s)throw new TypeError("Missing parameter name at ".concat(t));r.push({type:"NAME",index:t,value:s}),t=i}else r.push({type:"CLOSE",index:t,value:e[t++]});else r.push({type:"OPEN",index:t,value:e[t++]});else r.push({type:"ESCAPED_CHAR",index:t++,value:e[t++]});else r.push({type:"MODIFIER",index:t,value:e[t++]})}return r.push({type:"END",index:t,value:""}),r}(e),a=r.prefixes,n=void 0===a?"./":a,o="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(r.delimiter||"/#?"),"]+?"),s=[],i=0,l=0,p="",c=function(e){if(l<t.length&&t[l].type===e)return t[l++].value},u=function(e){var r=c(e);if(void 0!==r)return r;var a=t[l],n=a.type,o=a.index;throw new TypeError("Unexpected ".concat(n," at ").concat(o,", expected ").concat(e))},d=function(){for(var e,r="";e=c("CHAR")||c("ESCAPED_CHAR");)r+=e;return r};l<t.length;){var f=c("CHAR"),m=c("NAME"),b=c("PATTERN");if(m||b){var v=f||"";-1===n.indexOf(v)&&(p+=v,v=""),p&&(s.push(p),p=""),s.push({name:m||i++,prefix:v,suffix:"",pattern:b||o,modifier:c("MODIFIER")||""})}else{var h=f||c("ESCAPED_CHAR");if(h)p+=h;else if(p&&(s.push(p),p=""),c("OPEN")){v=d();var y=c("NAME")||"",E=c("PATTERN")||"",x=d();u("CLOSE"),s.push({name:y||(E?i++:""),pattern:y&&!E?o:E,prefix:v,suffix:x,modifier:c("MODIFIER")||""})}else u("END")}}return s}function J(e,r){return function(e,r){void 0===r&&(r={});var t=function(e){return e&&e.sensitive?"":"i"}(r),a=r.encode,n=void 0===a?function(e){return e}:a,o=r.validate,s=void 0===o||o,i=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),t)}));return function(r){for(var t="",a=0;a<e.length;a++){var o=e[a];if("string"!=typeof o){var l=r?r[o.name]:void 0,p="?"===o.modifier||"*"===o.modifier,c="*"===o.modifier||"+"===o.modifier;if(Array.isArray(l)){if(!c)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===l.length){if(p)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var u=0;u<l.length;u++){var d=n(l[u],o);if(s&&!i[a].test(d))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(d,'"'));t+=o.prefix+d+o.suffix}}else if("string"!=typeof l&&"number"!=typeof l){if(!p){var f=c?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(f))}}else{d=n(String(l),o);if(s&&!i[a].test(d))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(d,'"'));t+=o.prefix+d+o.suffix}}else t+=o}return t}}(q(e,r),r)}const K={class:"left-box"},Q=t({name:"Topbar"});var V=T(Object.assign(Q,{setup(e){const r=I(),t=k(),a=_((()=>"mobile"===t.mode||["side","head","single"].includes(t.menu.menuMode)&&t.topbar.enableSidebarCollapse)),o=_((()=>{let e=[];return t.dashboard.enable&&e.push({path:"/dashboard",title:t.dashboard.title}),r.meta.breadcrumbNeste&&e.push(...r.meta.breadcrumbNeste.filter((e=>!1===e.hide))),e})),p=n(0);function d(){p.value=document.documentElement.scrollTop||document.body.scrollTop}return s((()=>{window.addEventListener("scroll",d)})),j((()=>{window.removeEventListener("scroll",d)})),(e,n)=>{const s=D,d=x,f=U,m=F;return i(),l("div",{class:c(["topbar-container",{fixed:u(t).topbar.fixed,shadow:p.value}]),"data-fixed-calc-width":""},[v("div",K,[u(a)?(i(),l("div",{key:0,class:c(["sidebar-collapse",{"is-collapse":u(t).menu.subMenuCollapse}]),onClick:n[0]||(n[0]=e=>u(t).toggleSidebarCollapse())},[R(d,null,{default:y((()=>[R(s,{name:"toolbar-collapse"})])),_:1})],2)):S("",!0),u(t).topbar.enableBreadcrumb&&"pc"===u(t).mode&&"filesystem"!==u(t).app.routeBaseOn?(i(),h(m,{key:1},{default:y((()=>[R(M,{name:"breadcrumb"},{default:y((()=>[(i(!0),l(N,null,O(u(o),((e,t)=>{return i(),h(f,{key:e.path,to:t<u(o).length-1?(a=e.path,J(a)(r.params)):""},{default:y((()=>[P(g(e.title),1)])),_:2},1032,["to"]);var a})),128))])),_:1})])),_:1})):S("",!0)]),R(B)],2)}}}),[["__scopeId","data-v-6e388be1"]]);export{V as default};
