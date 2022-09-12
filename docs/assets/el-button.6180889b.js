
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{w as o,h as e,R as t,ab as a,S as s,at as r,c as l,ag as n,y as i,d as c,aV as d,O as u,an as p,af as b,A as f,a_ as m,t as v,e as g,L as k,C as y,j as x,l as B,v as h,n as S,H as V,k as $,i as N,E as _,r as w,ak as I,aD as z,I as E,W as j}from"./index.c66562dd.js";import{T}from"./index.8bfffa1c.js";import{u as A}from"./index2.1c3d2afc.js";const C=Symbol("buttonGroupContextKey"),G=({from:t,replacement:a,scope:s,version:r,ref:l,type:n="API"},i)=>{o((()=>e(i)),(o=>{}),{immediate:!0})},D=t({size:a,disabled:Boolean,type:{type:String,values:["default","primary","success","warning","info","danger","text",""],default:""},icon:{type:s,default:""},nativeType:{type:String,values:["button","submit","reset"],default:"button"},loading:Boolean,loadingIcon:{type:s,default:()=>r},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}});function U(o,e=20){return o.mix("#141414",e).toString()}const F=["aria-disabled","disabled","autofocus","type"];var H=_(c({name:"ElButton",props:D,emits:{click:o=>o instanceof MouseEvent},setup(o,{expose:t,emit:a}){const s=o,r=d();G({from:"type.text",replacement:"type.link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},l((()=>"text"===s.type)));const c=u(C,void 0),_=p("button"),w=i("button"),{form:I}=A(),z=b(l((()=>null==c?void 0:c.size))),E=n(),j=f(),D=l((()=>s.type||(null==c?void 0:c.type)||"")),H=l((()=>{var o,e,t;return null!=(t=null!=(e=s.autoInsertSpace)?e:null==(o=_.value)?void 0:o.autoInsertSpace)&&t})),K=l((()=>{var o;const e=null==(o=r.default)?void 0:o.call(r);if(H.value&&1===(null==e?void 0:e.length)){const o=e[0];if((null==o?void 0:o.type)===m){const e=o.children;return/^\p{Unified_Ideograph}{2}$/u.test(e.trim())}}return!1})),L=function(o){const e=n(),t=i("button");return l((()=>{let a={};const s=o.color;if(s){const r=new T(s),l=o.dark?r.tint(20).toString():U(r,20);if(o.plain)a=t.cssVarBlock({"bg-color":o.dark?U(r,90):r.tint(90).toString(),"text-color":s,"border-color":o.dark?U(r,50):r.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":l,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":l}),e.value&&(a[t.cssVarBlockName("disabled-bg-color")]=o.dark?U(r,90):r.tint(90).toString(),a[t.cssVarBlockName("disabled-text-color")]=o.dark?U(r,50):r.tint(50).toString(),a[t.cssVarBlockName("disabled-border-color")]=o.dark?U(r,80):r.tint(80).toString());else{const n=o.dark?U(r,30):r.tint(30).toString(),i=r.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(a=t.cssVarBlock({"bg-color":s,"text-color":i,"border-color":s,"hover-bg-color":n,"hover-text-color":i,"hover-border-color":n,"active-bg-color":l,"active-border-color":l}),e.value){const e=o.dark?U(r,50):r.tint(50).toString();a[t.cssVarBlockName("disabled-bg-color")]=e,a[t.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,a[t.cssVarBlockName("disabled-border-color")]=e}}}return a}))}(s),M=o=>{"reset"===s.nativeType&&(null==I||I.resetFields()),a("click",o)};return t({ref:j,size:z,type:D,disabled:E,shouldAddSpace:K}),(o,t)=>(v(),g("button",{ref_key:"_ref",ref:j,class:S([e(w).b(),e(w).m(e(D)),e(w).m(e(z)),e(w).is("disabled",e(E)),e(w).is("loading",o.loading),e(w).is("plain",o.plain),e(w).is("round",o.round),e(w).is("circle",o.circle),e(w).is("text",o.text),e(w).is("link",o.link),e(w).is("has-bg",o.bg)]),"aria-disabled":e(E)||o.loading,disabled:e(E)||o.loading,autofocus:o.autofocus,type:o.nativeType,style:N(e(L)),onClick:M},[o.loading?(v(),g(k,{key:0},[o.$slots.loading?y(o.$slots,"loading",{key:0}):(v(),x(e(V),{key:1,class:S(e(w).is("loading"))},{default:B((()=>[(v(),x(h(o.loadingIcon)))])),_:1},8,["class"]))],64)):o.icon||o.$slots.icon?(v(),x(e(V),{key:1},{default:B((()=>[o.icon?(v(),x(h(o.icon),{key:0})):y(o.$slots,"icon",{key:1})])),_:3})):$("v-if",!0),o.$slots.default?(v(),g("span",{key:2,class:S({[e(w).em("text","expand")]:e(K)})},[y(o.$slots,"default")],2)):$("v-if",!0)],14,F))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);var K=_(c({name:"ElButtonGroup",props:{size:D.size,type:D.type},setup(o){const t=o;w(C,I({size:z(t,"size"),type:z(t,"type")}));const a=i("button");return(o,t)=>(v(),g("div",{class:S(`${e(a).b("group")}`)},[y(o.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const L=E(H,{ButtonGroup:K});j(K);export{L as E,G as u};
//# sourceMappingURL=el-button.6180889b.js.map