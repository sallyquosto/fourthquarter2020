(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["passcodeForPMI"],{"08df":function(s,t,r){"use strict";r.r(t);var i=function(){var s=this,t=s.$createElement,r=s._self._c||t;return"user"===s.level||"zr_require_password_for_pmi"===s.item.featureId?r("div",{staticClass:"mgt-md",staticStyle:{"line-height":"32px"}},[r("span",{staticClass:"mgr-xs"},[s._v("Passcode:")]),s.isEditing?[r("password-input",{ref:"passwordInput",staticClass:"mgr-sm",staticStyle:{display:"inline-block"},attrs:{"password-must":s.passwordMust,"password-must-not":s.passwordMustNot,password:s.password,"max-length":10,"input-width":120,placement:"bottom-start",error:s.error||s.error2||s.weakPassword,"input-editing":s.inputEditing,"input-id":"meetingPMIPassword"},on:{inputPassword:s.validator}}),r("zm-button",{staticClass:"mgl-sm",attrs:{type:"primary",loading:s.loading,disabled:s.passwordError||!s.password.length},on:{click:s.onSave}},[s._v("\n      "+s._s(s.$t("common.save"))+"\n    ")]),r("zm-button",{attrs:{plain:""},on:{click:s.onCancel}},[s._v(s._s(s.$t("common.cancel")))]),s.weakPassword?r("p",{staticClass:"error-content error-color"},[s._v(s._s(s.weakPassword))]):s._e()]:[s.showMask?r("span",{domProps:{textContent:s._s(s.password)}}):r("span",[s._v("******")]),r("zm-button",{staticClass:"mgl-sm",attrs:{type:"link"},on:{click:function(t){s.showMask=!s.showMask}}},[s._v(s._s(s.showMask?"Hide":"Show"))]),r("zm-button",{attrs:{type:"link","aria-label":"Edit passcode"},on:{click:s.onEdit}},[s._v(s._s(s.$t("common.edit")))])]],2):s._e()},e=[],o=r("b06d"),a=r("cf99"),n=r("9f1b"),d=/^[0-9a-zA-Z]{1,10}$/,u={name:"passcodeForPMI",props:["item","level","readonly"],mixins:[o["a"],n["a"]],components:{passwordInput:a["a"]},data:function(){return{showMask:!1,password:this.item.child[0].value,isEditing:!1,loading:!1,weakPassword:"",inputEditing:!0,error:!1,errorText:"",error2:!1,errorText2:"",passwordMust:[],passwordMustNot:[],activeEl:null}},computed:{ruleChanged:function(){return"zr_require_password_for_pmi"===this.item.featureId&&(this.root.getFeatureById("meetingPasswordRule")&&this.root.getFeatureById("meetingPasswordRule").child[0]&&this.root.getFeatureById("meetingPasswordRule").child[0].value)},passwordError:function(){var s=!1;return s=this.passwordMust.some((function(s){return 1===s.error})),s=s||this.passwordMustNot.some((function(s){return 1===s.error})),s}},watch:{ruleChanged:function(){"zr_require_password_for_pmi"===this.item.featureId&&(this.initPasswordRule(),this.isEditing&&this.validator(this.password))},isEditing:function(s){var t=this;s&&(this.activeEl=document.activeElement,this.$nextTick((function(){t.$refs.passwordInput&&t.$refs.passwordInput.$refs.password&&t.$refs.passwordInput.$refs.password.focus()})))}},methods:{validator:function(s){this.weakPassword="",this.password=s,this.passwordMust.length||this.passwordMustNot.length?this.passwordValidator(this.password):d.test(this.password)&&(this.error2=!1),""!==this.password&&(this.error=!1)},onEdit:function(){var s=this;this.isEditing=!0,this.$nextTick((function(){s.password.length&&s.validator(s.password)}))},onSave:function(){this.loading=!0;var s=[{featureId:this.item.child[0].featureId,featureLevel:this.item.child[0].featureLevel,value:this.password}];this.$emit("custom-submit",s)},onCancel:function(){this.password=this.item.child[0].value,this.isEditing=!1,this.weakPassword="",this.error=!1,this.error2=!1,this.activeEl&&this.activeEl.focus()},updateStatusHandler:function(s){var t=this,r=(s.type,s.status),i=s.response;!r&&i.message&&0===i.message.indexOf("WeakPassword")?(this.weakPassword=i.message.slice(12)?i.message.slice(12):this.$t("meetingPasswordRule.weakError"),this.$nextTick((function(){t.$refs.passwordInput.$refs.password&&t.$refs.passwordInput.$refs.password.focus()}))):(this.error=!1,this.error2=!1,this.isEditing=!1,this.password=this.item.child[0].value,this.initPasswordRule(),this.activeEl&&this.activeEl.focus()),this.loading=!1}},mounted:function(){this.initPasswordRule(),this.password.length&&this.validator(this.password)}},l=u,p=r("2877"),h=Object(p["a"])(l,i,e,!1,null,"89d8666e",null);t["default"]=h.exports}}]);