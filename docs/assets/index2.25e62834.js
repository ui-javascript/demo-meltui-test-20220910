
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
    
import{u as e}from"./index2.709687ee.js";import{O as a,bc as n,b8 as o,A as t,c as d,o as l,w as u,aC as s,X as i}from"./index.9528fe4a.js";const v=()=>({form:a(n,void 0),formItem:a(o,void 0)}),r=(a,{formItemContext:n,disableIdGeneration:o,disableIdManagement:v})=>{o||(o=t(!1)),v||(v=t(!1));const r=t();let m;const I=d((()=>{var e;return!!(!a.label&&n&&n.inputIds&&(null==(e=n.inputIds)?void 0:e.length)<=1)}));return l((()=>{m=u([s(a,"id"),o],(([a,o])=>{const t=null!=a?a:o?void 0:e().value;t!==r.value&&((null==n?void 0:n.removeInputId)&&(r.value&&n.removeInputId(r.value),(null==v?void 0:v.value)||o||!t||n.addInputId(t)),r.value=t)}),{immediate:!0})})),i((()=>{m&&m(),(null==n?void 0:n.removeInputId)&&r.value&&n.removeInputId(r.value)})),{isLabeledByFormItem:I,inputId:r}};export{r as a,v as u};
