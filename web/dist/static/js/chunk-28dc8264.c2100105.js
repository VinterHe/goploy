(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28dc8264"],{2017:function(e,t,s){"use strict";var o=s("3b76"),r=s.n(o);r.a},"3b76":function(e,t,s){},"9ed6":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("代码发布")])]),e._v(" "),s("el-form-item",{attrs:{prop:"account"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{ref:"account",attrs:{size:"medium",placeholder:"请输入账号",name:"account",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.account,callback:function(t){e.$set(e.loginForm,"account",t)},expression:"loginForm.account"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,size:"medium",placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showPhrase,expression:"showPhrase"}],attrs:{prop:"phrase"}},[s("el-row",{attrs:{type:"flex",align:"middle"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"phrase"}})],1),e._v(" "),s("el-input",{attrs:{name:"phrase",size:"medium",placeholder:"请输入验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.phrase,callback:function(t){e.$set(e.loginForm,"phrase","string"===typeof t?t.trim():t)},expression:"loginForm.phrase"}}),e._v(" "),s("img",{staticStyle:{"padding-right":"5px"},attrs:{src:e.phrase,alt:"验证码"},on:{click:e.changePhrase}})],1)],1),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登 录")])],1)],1)},r=[],n=s("61f7"),a=s("c24f"),i={name:"Login",data:function(){var e=this,t=function(e,t,s){Object(n["c"])(t)?s():s(new Error("请输入正确的用户名"))},s=function(e,t,s){s()},o=function(t,s,o){e.showPhrase&&(void 0===s||""===s)?o(new Error("验证码不能为空")):o()};return{phrase:"",showPhrase:!1,loginForm:{account:"admin",password:"123456",phrase:""},loginRules:{account:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:s}],phrase:[{required:!0,trigger:"blur",validator:o}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.isShowPhrase()},methods:{isShowPhrase:function(){var e=this;Object(a["g"])().then(function(t){var s=t.data;e.showPhrase=s.show,e.showPhrase&&e.changePhrase()})},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},changePhrase:function(){this.phrase="/user/getPhrase?"+Math.random()},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1}).catch(function(){e.loading=!1,e.showPhrase=!0,e.changePhrase()})})}}},c=i,l=(s("2017"),s("c5cf"),s("2877")),p=Object(l["a"])(c,o,r,!1,null,"883e4e70",null);t["default"]=p.exports},c5cf:function(e,t,s){"use strict";var o=s("e246"),r=s.n(o);r.a},e246:function(e,t,s){}}]);