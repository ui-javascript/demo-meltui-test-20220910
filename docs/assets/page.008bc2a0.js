
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{d as e,c as t,bB as s,O as o,A as r,o as i,s as n,t as l,e as a,h as p,j as c,l as d,g as u,L as h,P as x,v as m,aL as g,Y as f,J as v,k as b,m as w,bC as y,n as j,i as k,f as S,w as z,aj as L,bf as I}from"./index.9528fe4a.js";var $=Object.defineProperty,A=(e,t,s)=>(((e,t,s)=>{t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s})(e,"symbol"!=typeof t?t+"":t,s),s);const O=e=>Function(`"use strict"; ${e}`)(),N=(e,t,s,o)=>{if(e){if(!e.includes("{{"))return e;e=e.replace(/\{\{/g,"").replace(/\}\}/g,"")}return O(`\n    const rowIndex = ${o};\n    const column = ${JSON.stringify(s)};\n    const record = ${JSON.stringify(t)};\n    return (${e})\n  `)};class W{constructor(e){A(this,"json",{}),A(this,"context",""),e&&(this.json=s.exports.merge(this.json,e))}edit(e=!0){return this.context="",s.exports.set(this.json,"edit.enabled",e),s.exports.set(this.json,"edit.mode","modal"),this}inlineMode(){return this.context="",s.exports.set(this.json,"edit.mode","inline"),this}modalMode(){return this.context="",s.exports.set(this.json,"edit.mode","modal"),this}drawerMode(){return this.context="",s.exports.set(this.json,"edit.mode","drawer"),this}layout(){return this.context="layout",this}inline(e=!0){return"search"===this.context&&e&&s.exports.set(this.json,"search.layout","inline"),this}cols(e){return"search"===this.context&&e&&s.exports.set(this.json,"search.cols",e),this}xxl(e){if("search"===this.context&&e){let t=s.exports.get(this.json,"search.cols");s.exports.set(this.json,"search.cols",s.exports.merge(t,{xxl:e}))}return this}xl(e){if("search"===this.context&&e){let t=s.exports.get(this.json,"search.cols");s.exports.set(this.json,"search.cols",s.exports.merge(t,{xl:e}))}return this}lg(e){if("search"===this.context&&e){let t=s.exports.get(this.json,"search.cols");s.exports.set(this.json,"search.cols",s.exports.merge(t,{lg:e}))}return this}md(e){if("search"===this.context&&e){let t=s.exports.get(this.json,"search.cols");s.exports.set(this.json,"search.cols",s.exports.merge(t,{md:e}))}return this}sm(e){if("search"===this.context&&e){let t=s.exports.get(this.json,"search.cols");s.exports.set(this.json,"search.cols",s.exports.merge(t,{sm:e}))}return this}xs(e){if("search"===this.context&&e){let t=s.exports.get(this.json,"search.cols");s.exports.set(this.json,"search.cols",s.exports.merge(t,{lg:e}))}return this}header(e=!0){return this.context="header",s.exports.set(this.json,"header.visible",e),this}visible(e=!0){return"header"===this.context?(s.exports.set(this.json,this.context+".visible",e),this):this}body(){return this.context="body",this}search(e=!0){return this.context="search",s.exports.set(this.json,"search.enabled",e),this}virtualList(){return this.context="body.virtualList",s.exports.set(this.json,"row.expand",!1),s.exports.set(this.json,"pagination",!1),s.exports.set(this.json,"edit",!1),this}height(e){return"body.virtualList"===this.context&&s.exports.set(this.json,"body.virtualList.height",e),this}size(e){return this.context="size",e&&s.exports.set(this.json,"size",e),this}mini(){return(this.context="size")&&s.exports.set(this.json,"size","mini"),this}small(){return(this.context="size")&&s.exports.set(this.json,"size","small"),this}medium(){return(this.context="size")&&s.exports.set(this.json,"size","medium"),this}large(){return(this.context="size")&&s.exports.set(this.json,"size","large"),this}column(){return this.context="column",this}resizable(e=!0){return s.exports.set(this.json,"column.resizable",e),s.exports.set(this.json,"row.border.cell",!0),this}scroll(){return this.context="body.scroll",this}x(e){return"body.scroll"===this.context&&s.exports.set(this.json,"body.scroll.x",e),this}y(e){return"body.scroll"===this.context&&s.exports.set(this.json,"body.scroll.y",e),this}row(){return this.context="row",this}selection(){return this.context="row.selection",this}checkboxType(){return s.exports.set(this.json,"row.selection.type","checkbox"),this}radioType(){return s.exports.set(this.json,"row.selection.type","radio"),this}checkAll(e=!0){return s.exports.set(this.json,"row.selection.showCheckedAll",e),this}currentOnly(e=!0){return s.exports.set(this.json,"row.selection.currentOnly",e),this}operation(e=!0){return this.context="operation",this}viewOperation(e=!0){if(!e)return this;this.context="operation.view";const t=s.exports.get(this.json,"operation.operationList")||{};return t.view={type:"AButton",title:"查看"},s.exports.set(this.json,"operation.operationList",t),this}editOperation(e=!0){if(!e)return this;this.context="operation.edit";const t=s.exports.get(this.json,"operation.operationList")||{};return t.edit={type:"AButton",title:"编辑"},s.exports.set(this.json,"operation.operationList",t),this}removeOperation(e=!0){if(!e)return this;this.context="operation.remove";const t=s.exports.get(this.json,"operation.operationList")||{};return t.remove={type:"AButton",title:"删除",status:"danger"},s.exports.set(this.json,"operation.operationList",t),this}clickEmit(e){if("operation.view"===this.context){const t=s.exports.get(this.json,"operation.operationList")||{};t.view=Object.assign({},t,{clickEmit:e}),s.exports.set(this.json,"operation.operationList",t)}if("operation.edit"===this.context){const t=s.exports.get(this.json,"operation.operationList")||{};t.edit=Object.assign({},t,{clickEmit:e}),s.exports.set(this.json,"operation.operationList",t)}return this}expand(e=!0){return this.context="row.expand",this}width(e){return this.context?(s.exports.set(this.json,this.context+".width",e),this):this}title(e){return this.context?(s.exports.set(this.json,this.context+".title",e),this):this}render(e){return this.context?(s.exports.set(this.json,this.context+".render",e),this):this}hover(e=!0){return(!this.context||"row"==this.context)&&s.exports.set(this.json,"row.hover",e),this}border(e=!0){return(!this.context||"row"==this.context)&&s.exports.set(this.json,"row.border.cell",e),this}stripe(e=!0){return(!this.context||"row"==this.context)&&s.exports.set(this.json,"row.stripe",e),this}parse(e){return e&&(this.json=s.exports.merge(this.json,e)),this.json}}class V{constructor(e){A(this,"json",{}),A(this,"context",""),e&&(this.json=s.exports.merge(this.json,e))}column(){return this.context="column",this}fixed(){return this.context="column.fixed",this}title(e){return e&&s.exports.set(this.json,"title.name",e),this}widget(e){return this.context="widget",e&&s.exports.set(this.json,"widget.type",e),this}input(){return this.context="widget",s.exports.set(this.json,"widget.type","AInput"),this}format(e){return s.exports.set(this.json,"widget.format",e),this}placeholder(e){return"widget"===this.context&&s.exports.set(this.json,"widget.placeholder",e),"searchable"===this.context&&s.exports.set(this.json,"searchable.placeholder",e),this}clearable(e=!0){return this.context="widget",s.exports.set(this.json,"widget.clearable",e),this}select(e){return this.context="widget",s.exports.set(this.json,"widget.type","ASelect"),s.exports.set(this.json,"widget.options",e),this}props(e){return(this.context="widget")&&s.exports.set(this.json,"widget.props",e),this}inputNumber(){return this.context="widget",s.exports.set(this.json,"widget.type","AInputNumber"),this}textArea(){return this.context="widget",s.exports.set(this.json,"widget.type","ATextarea"),this}upperFirst(){return s.exports.set(this.json,"title.upperFirst",!0),this}width(e){return s.exports.set(this.json,"title.width",e),this}left(){return"column.fixed"===this.context?(s.exports.set(this.json,"column.fixed","left"),this):(s.exports.set(this.json,"title.align","left"),this)}right(){return"column.fixed"===this.context?(s.exports.set(this.json,"column.fixed","right"),this):(s.exports.set(this.json,"title.align","right"),this)}center(){return s.exports.set(this.json,"title.align","center"),this}editable(e=!0){return s.exports.set(this.json,"editable",e),this}readonly(){return s.exports.set(this.json,"editable",!1),this}keepWatch(e){return s.exports.set(this.json,"widget.keepWatch",e),this}sortable(){return this.context="sortable",this}asc(){if("sortable"===this.context){let e=s.exports.get(this.json,"sortable.sortDirections")||[];e.push("ascend"),s.exports.set(this.json,"sortable.sortDirections",e)}return this}desc(){if("sortable"===this.context){let e=s.exports.get(this.json,"sortable.sortDirections")||[];e.push("descend"),s.exports.set(this.json,"sortable.sortDirections",e)}return this}filterable(){return this.context="filterable",this}filter(e){return"filterable"===this.context&&(s.exports.set(this.json,"filterable.render",e),s.exports.set(this.json,"title.align","center")),this}eq(e){if("filterable"===this.context){let t=s.exports.get(this.json,"filterable.filters")||[];s.exports.isArray(e)?e.forEach((e=>{t.push({text:"= "+e,value:e})})):t.push({text:"= "+e,value:e}),s.exports.set(this.json,"filterable.filters",t),s.exports.set(this.json,"filterable.type","eq"),s.exports.set(this.json,"title.align","center")}return this}gt(e){if("filterable"===this.context){let t=s.exports.get(this.json,"filterable.filters")||[];s.exports.isArray(e)?e.forEach((e=>{t.push({text:"> "+e,value:e+""})})):t.push({text:"> "+e,value:e+""}),s.exports.set(this.json,"filterable.filters",t),s.exports.set(this.json,"filterable.type","gt"),s.exports.set(this.json,"title.align","center")}return this}lt(e){if("filterable"===this.context){let t=s.exports.get(this.json,"filterable.filters")||[];s.exports.isArray(e)?e.forEach((e=>{t.push({text:"< "+e,value:e+""})})):t.push({text:"< "+e,value:e+""}),s.exports.set(this.json,"filterable.filters",t),s.exports.set(this.json,"filterable.type","lt"),s.exports.set(this.json,"title.align","center")}return this}startsWith(e){if("filterable"===this.context){let t=s.exports.get(this.json,"filterable.filters")||[];s.exports.isArray(e)?e.forEach((e=>{t.push({text:""+e,value:e})})):t.push({text:""+e,value:e}),s.exports.set(this.json,"filterable.filters",t),s.exports.set(this.json,"filterable.type","startsWith"),s.exports.set(this.json,"title.align","center")}return this}includes(e){if("filterable"===this.context){let t=s.exports.get(this.json,"filterable.filters")||[];s.exports.isArray(e)?e.forEach((e=>{t.push({text:""+e,value:e})})):t.push({text:""+e,value:e}),s.exports.set(this.json,"filterable.filters",t),s.exports.set(this.json,"filterable.type","includes"),s.exports.set(this.json,"title.align","center")}return this}searchable(e=!0){return this.context="searchable",s.exports.set(this.json,"searchable.enabled",e),this}advancedOnly(e=!0){return"searchable"===this.context&&s.exports.set(this.json,"searchable.advancedOnly",e),this}cell(){return this.context="cell",this}ellipsis(e=!0){return s.exports.set(this.json,"cell.ellipsis",e),this}tooltip(e=!0){return s.exports.set(this.json,"cell.tooltip",e),this}parse(e){return e&&(this.json=s.exports.merge(this.json,e)),this.json}}const C=Symbol("ArcoConfigProvider"),_=e=>{var t,s,r;const i=w(),n=o(C,void 0),l=null!=(r=null!=(s=null==n?void 0:n.prefixCls)?s:null==(t=null==i?void 0:i.appContext.config.globalProperties.$arco)?void 0:t.classPrefix)?r:"arco";return e?`${l}-${e}`:l},B=Object.prototype.toString;function P(e){return"[object Number]"===B.call(e)&&e==e}var U=(e,t)=>{for(const[s,o]of t)e[s]=o;return e};const E=e({name:"IconDoubleLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-double-left`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),M=["stroke-width","stroke-linecap","stroke-linejoin"],F=[S("path",{d:"M36.857 9.9 22.715 24.042l14.142 14.142M25.544 9.9 11.402 24.042l14.142 14.142"},null,-1)];var q=U(E,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},F,14,M)}]]);const D=Object.assign(q,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+q.name,q)}}),R=e({name:"IconDoubleRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-double-right`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),T=["stroke-width","stroke-linecap","stroke-linejoin"],J=[S("path",{d:"m11.143 38.1 14.142-14.142L11.143 9.816M22.456 38.1l14.142-14.142L22.456 9.816"},null,-1)];var H=U(R,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},J,14,T)}]]);const K=Object.assign(H,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+H.name,H)}}),G=e({name:"IconCloseCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-close-circle`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),Z=["stroke-width","stroke-linecap","stroke-linejoin"],Y=[S("path",{d:"m17.643 17.643 6.364 6.364m0 0 6.364 6.364m-6.364-6.364 6.364-6.364m-6.364 6.364-6.364 6.364M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1)];var Q=U(G,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},Y,14,Z)}]]);const X=Object.assign(Q,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+Q.name,Q)}}),ee=e({name:"IconPlus",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-plus`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),te=["stroke-width","stroke-linecap","stroke-linejoin"],se=[S("path",{d:"M5 24h38M24 5v38"},null,-1)];var oe=U(ee,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},se,14,te)}]]);const re=Object.assign(oe,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+oe.name,oe)}}),ie=e({name:"IconDownload",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-download`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),ne=["stroke-width","stroke-linecap","stroke-linejoin"],le=[S("path",{d:"m33.072 22.071-9.07 9.071-9.072-9.07M24 5v26m16 4v6H8v-6"},null,-1)];var ae=U(ie,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},le,14,ne)}]]);const pe=Object.assign(ae,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+ae.name,ae)}}),ce=e({name:"IconSearch",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-search`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),de=["stroke-width","stroke-linecap","stroke-linejoin"],ue=[S("path",{d:"M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"},null,-1)];var he=U(ce,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},ue,14,de)}]]);const xe=Object.assign(he,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+he.name,he)}}),me=e({name:"IconDelete",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-delete`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),ge=["stroke-width","stroke-linecap","stroke-linejoin"],fe=[S("path",{d:"M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15"},null,-1)];var ve=U(me,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},fe,14,ge)}]]);const be=Object.assign(ve,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+ve.name,ve)}}),we=e({name:"IconEdit",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},setup(e){const s=_("icon");return{cls:t((()=>[s,`${s}-edit`,{[`${s}-spin`]:e.spin}])),innerStyle:t((()=>{const t={};return e.size&&(t.fontSize=P(e.size)?`${e.size}px`:e.size),e.rotate&&(t.transform=`rotate(${e.rotate}deg)`),t}))}}}),ye=["stroke-width","stroke-linecap","stroke-linejoin"],je=[S("path",{d:"m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"},null,-1)];var ke=U(we,[["render",function(e,t,s,o,r,i){return l(),a("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:j(e.cls),style:k(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},je,14,ye)}]]);const Se=Object.assign(ke,{install:(e,t)=>{var s;const o=null!=(s=null==t?void 0:t.iconPrefix)?s:"";e.component(o+ke.name,ke)}}),ze=f(" 重置 "),Le=f(" 查询 "),Ie=f(" 新增 "),$e=f(" 批量更新 "),Ae=f(" 批量删除 "),Oe=f(" 下载 "),Ne={__name:"ArcoCrudTable",props:{data:{type:Array,default:[]},schema:{type:Object,default:{}},options:{type:Object,default:{}},loading:{type:Boolean,default:!1}},setup(e){const o=e,w=r({pageSize:10,showTotal:!0,showPageSize:!0}),j=r(!1),k=r({}),S=r([]),z=r({}),L=r(!1),I=r([]),$=r({}),A=r({});let V=r(void 0),C=r();const _=r(!1),B=r(!1),P=t((()=>new W(o.options).edit(B.value).parse())),U=e=>{const t=s.exports.get(e,"widget.type"),o=s.exports.get(e,"widget.keepWatch");return t?o?t+"Cascader":t:"AInput"};i((()=>{_.value=!!s.exports.get(o.options,"body.virtualList"),I.value=[],$.value={},A.value={},V.value=void 0,C.value=s.exports.get(o.options,"row.expand"),C.value&&C.value.render&&(V.value=s.exports.merge(C.value,{expandedRowRender:e=>N(C.value.render,e,{},null)})),Object.keys(o.schema).forEach((e=>{var t,r;let i=o.schema[e],n=s.exports.get(i,"title.name")||e,l=s.exports.get(i,"title.upperFirst"),a=s.exports.get(i,"widget.options");a&&($.value=Object.assign({},a.value,a));let p=s.exports.get(i,"widget.keepWatch");p&&(A.value[p]=e);let c=s.exports.get(i,"widget.format");if(s.exports.get(i,"filterable")){let t=s.exports.get(i,"filterable.render"),o=s.exports.get(i,"filterable.type")||"eq";"eq"==o&&(t=`{{ record.${e} === value[0] }}`),"lt"==o&&(t=`{{ record.${e} < value[0] }}`),"gt"==o&&(t=`{{ record.${e} > value[0] }}`),"startsWith"==o&&(t=`{{ record.${e}.startsWith(value[0]) }}`),"includes"==o&&(t=`{{ record.${e}.includes(value[0]) }}`),s.exports.set(i,"filterable.filter",((e,s)=>((e,t,s)=>{if(e){if(!e.includes("{{"))return e;e=e.replace(/\{\{/g,"").replace(/\}\}/g,"")}return O(`\n    const value = ${JSON.stringify(t)};\n    const record = ${JSON.stringify(s)};\n    return (${e})\n  `)})(t,e,s)))}I.value.push({title:l?s.exports.upperFirst(n):n,dataIndex:e,width:s.exports.get(i,"title.width"),align:s.exports.get(i,"title.align")||"left",keepWatch:p,format:c,formSchema:i,sortable:s.exports.get(i,"sortable"),filterable:s.exports.get(i,"filterable"),fixed:s.exports.get(i,"column.fixed"),ellipsis:s.exports.get(i,"cell.ellipsis"),tooltip:s.exports.get(i,"cell.tooltip"),widget:s.exports.get(i,"widget")||{},slotName:!s.exports.get(o.options,"body.virtualList")&&(null==(r=null==(t=o.options)?void 0:t.edit)?void 0:r.enabled)&&0!=s.exports.get(i,"editable")?U(i):c?"format":null})}));let e=s.exports.get(o.options,"operation.operationList");e&&Object.keys(e).length>0&&I.value.push({title:"操作栏",fixed:"right",align:"center",width:60*Object.keys(e).length+40,slotName:"operationList"})}));const E=e=>{w.value=Object.assign({},w.value,{pageSize:e})},M=e=>{w.value=Object.assign({},w.value,{current:e})},F=(e,t)=>{let s=A.value[e.dataIndex];s&&(t[s]="")};return(e,t)=>{var r,i,A,O;const W=n("AFormItem"),C=n("AGridItem"),_=n("AGrid"),U=n("AForm"),q=n("ACol"),R=n("AButton"),T=n("ASpace"),J=n("ARow"),H=n("ADivider"),G=n("AInput"),Z=n("AInputNumber"),Y=n("ATextarea"),Q=n("ASelect"),ee=n("ATable"),te=n("AModal");return l(),a("div",null,[p(s.exports.get)(o.options,"search.enabled")?(l(),c(J,{key:0,style:{"margin-bottom":"10px"},gutter:20},{default:d((()=>[u(q,{flex:"auto"},{default:d((()=>[u(U,{layout:p(s.exports.get)(o.options,"search.layout"),"label-align":"left"},{default:d((()=>[u(_,{cols:p(s.exports.get)(o.options,"search.cols"),colGap:12,style:{width:"100%"}},{default:d((()=>[(l(!0),a(h,null,x(I.value.filter((e=>p(s.exports.get)(e.formSchema,"searchable.enabled")&&(L.value||!L.value&&!p(s.exports.get)(e.formSchema,"searchable.advancedOnly")))),(e=>(l(),c(C,{key:L.value+"_"},{default:d((()=>[u(W,{"label-col-flex":"60px",field:e.dataIndex,label:e.title},{default:d((()=>{var t;return[(l(),c(m((null==(t=e.widget)?void 0:t.type)||"AInput"),g({modelValue:z.value[e.dataIndex],"onUpdate:modelValue":t=>z.value[e.dataIndex]=t,onChange:t=>F(e,o.data)},{...p(s.exports.get)(e.formSchema,"widget.props"),options:e.keepWatch?$.value[o.data[e.keepWatch]]:$.value[e.dataIndex],"allow-clear":p(s.exports.get)(e.formSchema,"widget.clearable"),placeholder:p(N)(p(s.exports.get)(e.formSchema,"searchable.placeholder"),{},e,null)||"请输入"+e.title}),null,16,["modelValue","onUpdate:modelValue","onChange"]))]})),_:2},1032,["field","label"])])),_:2},1024)))),128))])),_:1},8,["cols"])])),_:1},8,["layout"])])),_:1}),u(q,{flex:L.value?"50px":"290px"},{default:d((()=>[u(T,{direction:L.value?"vertical":"horizontal"},{default:d((()=>[u(R,{status:"success",type:"primary",onClick:t[0]||(t[0]=e=>L.value=!L.value)},{icon:d((()=>[L.value?(l(),c(p(D),{key:0})):(l(),c(p(K),{key:1}))])),default:d((()=>[f(" "+v(L.value?"收起":"展开"),1)])),_:1}),u(R,{type:"primary",status:"warning",onClick:t[1]||(t[1]=e=>z.value={})},{icon:d((()=>[u(p(X))])),default:d((()=>[ze])),_:1}),u(R,{type:"primary"},{icon:d((()=>[u(p(xe))])),default:d((()=>[Le])),_:1})])),_:1},8,["direction"])])),_:1},8,["flex"])])),_:1})):b("",!0),p(s.exports.get)(o.options,"search.enabled")?(l(),c(H,{key:1})):b("",!0),u(J,{gutter:12,style:{"margin-bottom":"20px"}},{default:d((()=>[u(q,{span:12,align:"left"},{default:d((()=>[u(T,null,{default:d((()=>[u(R,{type:"primary"},{icon:d((()=>[u(p(re),{style:{cursor:"pointer"}})])),default:d((()=>[Ie])),_:1}),S.value.length>0?(l(),c(R,{key:0},{icon:d((()=>[u(p(Se),{style:{cursor:"pointer"}})])),default:d((()=>[$e])),_:1})):b("",!0),S.value.length>0?(l(),c(R,{key:1,status:"danger"},{icon:d((()=>[u(p(be),{style:{cursor:"pointer"}})])),default:d((()=>[Ae])),_:1})):b("",!0)])),_:1})])),_:1}),u(q,{span:12,align:"right"},{default:d((()=>[u(R,null,{icon:d((()=>[u(p(pe),{style:{cursor:"pointer"}})])),default:d((()=>[Oe])),_:1})])),_:1})])),_:1}),u(ee,{size:p(s.exports.get)(o.options,"size"),hoverable:null==(i=null==(r=o.options)?void 0:r.row)?void 0:i.hover,stripe:null==(O=null==(A=o.options)?void 0:A.row)?void 0:O.stripe,bordered:p(s.exports.get)(o.options,"row.border"),"column-resizable":p(s.exports.get)(o.options,"column.resizable"),expandable:p(V),pagination:w.value,"show-header":p(s.exports.get)(o.options,"header.visible"),scroll:p(s.exports.get)(o.options,"body.scroll"),"row-selection":p(s.exports.get)(o.options,"row.selection"),"virtual-list-props":p(s.exports.get)(o.options,"body.virtualList"),selectedKeys:S.value,"onUpdate:selectedKeys":t[2]||(t[2]=e=>S.value=e),columns:I.value,onPageChange:M,onPageSizeChange:E,data:o.data},{AInput:d((({rowIndex:e,column:t,record:o})=>[u(G,g({modelValue:o[t.dataIndex],"onUpdate:modelValue":e=>o[t.dataIndex]=e},{"allow-clear":p(s.exports.get)(t.formSchema,"widget.clearable"),placeholder:p(N)(p(s.exports.get)(t.formSchema,"widget.placeholder"),o,t,e)||"请输入",...p(s.exports.get)(t.formSchema,"widget.props")}),null,16,["modelValue","onUpdate:modelValue"])])),AInputNumber:d((({rowIndex:e,column:t,record:o})=>[u(Z,g({modelValue:o[t.dataIndex],"onUpdate:modelValue":e=>o[t.dataIndex]=e},{"allow-clear":p(s.exports.get)(t.formSchema,"widget.clearable"),placeholder:p(N)(p(s.exports.get)(t.formSchema,"widget.placeholder"),o,t,e)||"请输入",...p(s.exports.get)(t.formSchema,"widget.props")}),null,16,["modelValue","onUpdate:modelValue"])])),ATextarea:d((({rowIndex:e,column:t,record:o})=>[u(Y,g({modelValue:o[t.dataIndex],"onUpdate:modelValue":e=>o[t.dataIndex]=e},{"allow-clear":p(s.exports.get)(t.formSchema,"widget.clearable"),placeholder:p(N)(p(s.exports.get)(t.formSchema,"widget.placeholder"),o,t,e)||"请输入",...p(s.exports.get)(t.formSchema,"widget.props")}),null,16,["modelValue","onUpdate:modelValue"])])),ASelect:d((({rowIndex:e,column:t,record:o})=>[u(Q,g({options:$.value[t.dataIndex]||[],onChange:e=>F(t,o),modelValue:o[t.dataIndex],"onUpdate:modelValue":e=>o[t.dataIndex]=e},{"allow-clear":p(s.exports.get)(t.formSchema,"widget.clearable"),placeholder:p(N)(p(s.exports.get)(t.formSchema,"widget.placeholder"),o,t,e)||"请输入",...p(s.exports.get)(t.formSchema,"widget.props")}),null,16,["options","onChange","modelValue","onUpdate:modelValue"])])),ASelectCascader:d((({rowIndex:e,column:t,record:o})=>[u(Q,g({options:$.value[o[t.keepWatch]]||[],modelValue:o[t.dataIndex],"onUpdate:modelValue":e=>o[t.dataIndex]=e},{"allow-clear":p(s.exports.get)(t.formSchema,"widget.clearable"),placeholder:p(N)(p(s.exports.get)(t.formSchema,"widget.placeholder"),o,t,e)||"请输入",...p(s.exports.get)(t.formSchema,"widget.props")}),null,16,["options","modelValue","onUpdate:modelValue"])])),format:d((({rowIndex:e,column:t,record:s})=>[f(v(p(N)(t.format,s,t,e)),1)])),operationList:d((({record:t,column:r,rowIndex:i})=>[(l(!0),a(h,null,x(Object.keys(o.options.operation.operationList),(n=>(l(),c(m(o.options.operation.operationList[n].type||"AButton"),g({"allow-clear":p(s.exports.get)(r.formSchema,"widget.clearable"),type:"text",status:o.options.operation.operationList[n].status,placeholder:p(N)(p(s.exports.get)(r.formSchema,"widget.placeholder"),t,r,i)||"请输入",...p(s.exports.get)(r.formSchema,"widget.props")},{onClick:s=>o.options.operation.operationList[n].clickEmit?e.$emit(o.options.operation.operationList[n].clickEmit,{record:t}):((e,t,s)=>{k.value=s,"view"===e&&(B.value=!1,j.value=!0),"edit"===e&&(B.value=!0,j.value=!0),"remove"===e&&y.confirm({title:"删除确认",content:`确认删除吗 ${s.name||s.title||s.id||s.key} ?`,status:"danger"})})(n,o.options.operation.operationList[n],t)}),{default:d((()=>[f(v(o.options.operation.operationList[n].title),1)])),_:2},1040,["onClick"])))),256))])),_:1},8,["size","hoverable","stripe","bordered","column-resizable","expandable","pagination","show-header","scroll","row-selection","virtual-list-props","selectedKeys","columns","data"]),u(te,{visible:j.value,"onUpdate:visible":t[3]||(t[3]=e=>j.value=e),title:B.value?"编辑":"查看"},{default:d((()=>[u(p(Ve),{data:k.value,options:p(P),schema:o.schema},null,8,["data","options","schema"])])),_:1},8,["visible","title"])])}}},We={key:1},Ve={__name:"ArcoCrudForm",props:{data:{type:Object,default:{}},schema:{type:Object,default:{}},options:{type:Object,default:{}},loading:{type:Boolean,default:!1}},setup(e){const t=e,o=r([]),u=r({}),f=r({});return i((()=>{o.value=[],u.value=[],Object.keys(t.schema).forEach((e=>{let r=t.schema[e],i=s.exports.get(r,"title.name")||e,n=s.exports.get(r,"title.upperFirst"),l=s.exports.get(r,"widget.options");l&&(u.value=Object.assign({},l.value,l));let a=s.exports.get(r,"widget.keepWatch");a&&(f.value[a]=e);let p=s.exports.get(r,"widget.format");o.value.push({title:n?s.exports.upperFirst(i):i,dataIndex:e,width:s.exports.get(r,"title.width"),align:s.exports.get(r,"title.align")||"left",keepWatch:a,format:p,formSchema:r,widget:s.exports.get(r,"widget")||{}})}))})),(e,r)=>{const i=n("AFormItem"),b=n("AForm");return l(),c(b,{"auto-label-width":"",modelValue:t.data,"onUpdate:modelValue":r[0]||(r[0]=e=>t.data=e),layout:p(s.exports.get)(t.options,"layout.type")},{default:d((()=>[(l(!0),a(h,null,x(o.value,(e=>(l(),c(i,{field:e.dataIndex,label:e.title},{default:d((()=>{var o;return[null!=(o=t.options.edit)&&o.enabled?(l(),c(m(e.widget.type),g({key:0,modelValue:t.data[e.dataIndex],"onUpdate:modelValue":s=>t.data[e.dataIndex]=s,onChange:s=>((e,t)=>{if("ASelect"===e.widget.type&&Object.keys(f.value).includes(e.dataIndex)){let s=f.value[e.dataIndex];s&&(t[s]="")}})(e,t.data)},{"allow-clear":p(s.exports.get)(e.formSchema,"widget.clearable"),placeholder:p(N)(p(s.exports.get)(e.formSchema,"widget.placeholder"),t.data)||"请输入",...p(s.exports.get)(e.formSchema,"widget.props"),options:e.keepWatch?u.value[t.data[e.keepWatch]]:u.value[e.dataIndex]}),null,16,["modelValue","onUpdate:modelValue","onChange"])):(l(),a("span",We,v(t.data[e.dataIndex]),1))]})),_:2},1032,["field","label"])))),256))])),_:1},8,["modelValue","layout"])}}},Ce={__name:"page",setup(e){const t=r(!0),s=r(!1);let o=r((new W).row().hover().border().stripe().layout().search().inline().cols().sm(1).md(2).xl(3).row().selection().checkboxType().checkAll().column().resizable().viewOperation().clickEmit("showItem").editOperation().removeOperation().parse());z((()=>s.value),(e=>{o.value=new W(o.value).edit(e).parse()}),{deep:!0}),z((()=>t.value),(e=>{o.value=new W(o.value).search(e).parse()}),{deep:!0});const i=r({name:(new V).title().upperFirst().left().format("{{ '[No.' + rowIndex  + ']' + record.name }}").readonly().column().fixed().left().input().placeholder("输入姓名").clearable().cell().ellipsis().tooltip().width(150).searchable().parse(),salary:(new V).title("工资").inputNumber().placeholder("输入工资").clearable(!1).sortable().asc().desc().filterable().gt(2e4).gt([25e3,1e5]).searchable().advancedOnly().parse(),address:(new V).title("地址").filterable().includes(["北京","绵阳","Park Road"]).textArea().clearable().placeholder("{{ '请输入' + record.name + '的地址'}}").props({autoSize:!0}).searchable().advancedOnly().parse(),province:(new V).title("省份").center().select({province:["北京","四川","广东"],"北京":["海淀","朝阳","昌平"],"四川":["成都","绵阳"],"广东":["广州","深圳"]}).parse(),city:(new V).title("城市").center().select().keepWatch("province").parse()}),n=L([{key:"1",name:"Jane Doe",salary:23e3,address:"北京海淀知春路",province:"北京",city:"海淀",email:"jane.doe@example.com"},{key:"2",name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{key:"3",name:"Kevin Sandra",salary:22e3,address:"四川绵阳咩咩",province:"四川",city:"绵阳",email:"kevin.sandra@example.com"},{key:"4",name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{key:"5",name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}]);for(let r=10;r<1e3;r++)n.push({key:r+"xx",name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"});const c=e=>{const{record:t}=e;y.info({title:"Info Title",content:JSON.stringify(t,null,2)})};return(e,t)=>(l(),a("div",null,[u(p(Ne),{class:"mt-2",data:n,options:p(o),schema:i.value,onShowItem:c},null,8,["data","options","schema"])]))}};"function"==typeof I&&I(Ce);export{Ce as default};
