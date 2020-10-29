(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["remoteControl"],{"0a27":function(t,e,i){},"1bd0":function(t,e,i){"use strict";var n=i("0a27"),r=i.n(n);r.a},de1b:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isAdmin?i("div",{staticClass:"mgt-md"},[i("zm-button",{attrs:{type:"link","aria-label":"Customize request for remote control"},on:{click:function(e){t.showDialog=!0}}},[t._v(t._s(t.disabled?t.$t("common.view"):"Customize Request"))]),i("disclaimer",{ref:"disclaimer",attrs:{item:t.item,level:t.level,readonly:t.readonly,visible:t.showDialog,params:t.params,type:"remoteControl"},on:{close:t.onClose,submit:t.onSubmit}})],1):t._e()},r=[],o=i("eaed"),s=i("b06d"),a={name:"remoteControl",mixins:[s["a"]],props:["item","level","readonly"],data:function(){return{showDialog:!1}},computed:{isAdmin:function(){return"user"!==this.level},disabled:function(){return this.readonly||this.item.locked.value&&this.item.locked.level!==this.level},disclaimerValue:function(){return{contentObjectId:this.dataModel.objectId,contentObjectType:this.dataModel.featureLevel}},params:function(){return{contentObjectId:this.disclaimerValue.contentObjectId,contentObjectType:this.disclaimerValue.contentObjectType,featureId:"remoteControl_disclaimer"}}},methods:{onSubmit:function(){this.showDialog=!1,this.$message({message:this.$t("common.saveSuccess"),type:"success",duration:3e3}),"group"===this.level&&setTimeout((function(){location.reload()}),2800)},onClose:function(){this.showDialog=!1}},components:{disclaimer:o["a"]}},l=a,c=i("2877"),d=Object(c["a"])(l,n,r,!1,null,"03c23ada",null);e["default"]=d.exports},eaed:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("zm-dialog",{attrs:{visible:t.dialogVisible,width:"660px","append-to-body":!1,"before-close":t.onDone,"custom-class":"disclaimer-dialog","aria-labelledby":"customTitle"},on:{"update:visible":function(e){t.dialogVisible=e},opened:t.onOpen}},[i("span",{staticClass:"zm-dialog__title",attrs:{slot:"title"},slot:"title"},[i("span",{attrs:{id:"customTitle"}},[t._v(t._s(t.$t("recordingReminder.dialogTitle")))]),t.supportVersion?i("zm-tooltip",{staticClass:"item",attrs:{content:t.supportVersion,placement:"top"}},[i("zm-button",{staticClass:"mgl-sm",staticStyle:{"font-size":"20px"},attrs:{type:"icon",icon:"zm-icon-version","aria-label":"Support version"}})],1):t._e(),i("zm-select",{staticClass:"mgl-xs short-width zm-pull-right",staticStyle:{"font-size":"14px"},attrs:{size:"small",id:"lang-select",label:"Select Language","popper-append-to-body":!1},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}},t._l(t.languageList,(function(t){return i("zm-option",{key:"language-"+t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("div",{staticClass:"content-wrap mgt-sm"},[i("zm-scrollbar",{ref:"scrollbar",staticClass:"detail-scroll",staticStyle:{height:"500px"},attrs:{"wrap-class":"scroll-wrap-class","view-class":"scroll-view-class"}},[i("div",{staticClass:"scroll-view-inner"},[i("div",{staticClass:"disclaimer-preview mgb-md"},[i("span",{staticClass:"preview-tag"},[t._v(t._s(t.$t("recordingReminder.preview")))]),i("div",{ref:"previewBox",staticClass:"zm-dialog zm-dialog-preview"},[i("div",{staticClass:"text-col"},[i("header",{staticClass:"zm-dialog__header pdb-xs"},[i("span",{staticClass:"zm-dialog__title"},[t._v(t._s(t.form.title))])]),i("div",{staticClass:"zm-dialog__body"},[i("p",{staticClass:"mgb-0"},[t._v(t._s(t.form.description))])]),i("footer",{staticClass:"zm-dialog__footer"},[t.form.linkText?i("zm-button",{staticClass:"btn-link-text",style:{width:t.linkTextWidth+"px"},attrs:{type:"link",size:"small",tabindex:"-1"}},[t._v(t._s(t.form.linkText)+"\n                ")]):i("div",{staticClass:"button-placeholder"}),i("zm-button",{ref:"btnContinue",attrs:{type:"primary",tabindex:"-1",size:"small"}},[t._v(t._s("remoteControl"===t.type?"Approve":t.$t("common.btnContinue"))+"\n                ")]),i("zm-button",{ref:"btnLeave",attrs:{plain:"",size:"small",tabindex:"-1"}},[t._v(t._s("remoteControl"===t.type?"Decline":t.$t("recordingReminder.btnLeave"))+"\n                ")])],1)])])]),i("zm-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"140px","label-position":"top",disabled:t.disabled,"hide-required-asterisk":!0},on:{validate:t.check}},[i("zm-form-item",{staticClass:"mgb-lg",attrs:{label:t.$t("recordingReminder.title"),prop:"title",for:"form-title"}},[i("zm-input",{attrs:{id:"form-title",focusFirst:"",maxlength:t.maxTitleLength},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),i("zm-form-item",{staticClass:"mgb-lg",attrs:{prop:"description",for:"form-desc"}},[i("p",{staticClass:"mgb-0",attrs:{slot:"label"},slot:"label"},[i("span",[t._v(t._s(t.$t("recordingReminder.desc"))+" ("+t._s(t.$t("recordingReminder.maxLength",[t.maxDescLength]))+")")])]),i("zm-input",{attrs:{type:"textarea",id:"form-desc",resize:"none",rows:"3",placeholder:"remoteControl"===t.type?"Optional":"",maxlength:t.maxDescLength},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),i("span",{staticClass:"count-label color-grey"},[t._v(t._s(t.maxDescLength-t.form.description.length))])],1),t.showLink||t.disabled?t._e():i("zm-button",{ref:"btnAddLink",staticStyle:{"margin-left":"3px","margin-bottom":"5px"},attrs:{type:"link",icon:"zm-icon-add"},on:{click:t.onAddLink}},[t._v("\n            "+t._s(t.$t("recordingReminder.addLink"))+"\n          ")]),t.showLink?i("div",[i("zm-form-item",{staticClass:"form-item-block mgb-lg",attrs:{prop:"linkUrl",for:"form-url"}},[i("p",{staticClass:"mgb-0",attrs:{slot:"label"},slot:"label"},[i("span",[t._v(t._s(t.$t("recordingReminder.linkURL")))]),i("zm-button",{ref:"btnRemoveLink",staticClass:"zm-pull-right",attrs:{type:"icon",icon:"zm-icon-close","aria-label":"Remove Link"},on:{click:t.onDeleteLink}})],1),i("zm-input",{ref:"inputLinkUrl",attrs:{id:"form-url",placeholder:"e.g. https://company.com/policy",maxlength:2048},model:{value:t.form.linkUrl,callback:function(e){t.$set(t.form,"linkUrl","string"===typeof e?e.trim():e)},expression:"form.linkUrl"}})],1),i("zm-form-item",{attrs:{label:t.$t("recordingReminder.linkText"),prop:"linkText",for:"form-linkText"}},[i("zm-input",{attrs:{id:"form-linkText",placeholder:"Policy",maxlength:t.maxLinkTextLength},model:{value:t.form.linkText,callback:function(e){t.$set(t.form,"linkText",e)},expression:"form.linkText"}})],1)],1):t._e()],1)],1)])],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("zm-button",{staticClass:"zm-pull-left",attrs:{loading:t.restoreLoading,disabled:t.disabled,plain:""},on:{click:t.onRestore}},[t._v("\n      "+t._s(t.$t("recordingReminder.restore"))+"\n    ")]),i("zm-button",{attrs:{type:"primary",loading:t.applyLoading,disabled:!t.modified||t.validationError||t.disabled},on:{click:t.onSave}},[t._v("\n      "+t._s(t.$t("common.save"))+"\n    ")]),i("zm-button",{attrs:{plain:""},on:{click:t.onDone}},[t._v("\n      "+t._s(t.$t("common.cancel"))+"\n    ")])],1)])},r=[],o=(i("3b2b"),i("a78e")),s=i.n(o),a={"en-US":{title:"This meeting is being recorded",description:"By continuing to be in the meeting, you are consenting to be recorded."},"es-ES":{title:"La reunión se está grabando",description:"Al seguir adelante con esta reunión está dando su consentimiento a ser grabado."},"de-DE":{title:"Dieses Meeting wird aufgezeichnet",description:"Durch die fortgesetzte Teilnahme an diesem Meeting stimmen Sie der Aufzeichnung dieses Meetings zu."},"zh-CN":{title:"此会议正在录制中",description:"继续参加本次会议，即表示你同意进行录制。"},"zh-TW":{title:"正在錄製本會議",description:"一旦繼續參與會議，即為同意錄影。"},"fr-FR":{title:"Cette réunion est enregistrée",description:"En participant à cette réunion, vous consentez à être enregistré."},"pt-PT":{title:"Esta reunião está sendo gravada",description:"Ao continuar participando da reunião, você dá permissão para ser gravado."},"jp-JP":{title:"このミーティングはレコーディングされています",description:"このミーティングに参加し続けることにより、レコーディングに同意したことになります。"},"ru-RU":{title:"Идет запись этой конференции",description:"Оставаясь в этой конференции, вы даете свое согласие на ведение записи."},"ko-KO":{title:"이 회의는 기록되고 있습니다",description:"계속 회의에 있으면 기록 허용에 동의하는 것입니다."}},l={"en-US":{title:"Record this meeting?",description:""},"es-ES":{title:"Record this meeting?",description:""},"de-DE":{title:"Record this meeting?",description:""},"zh-CN":{title:"Record this meeting?",description:""},"zh-TW":{title:"Record this meeting?",description:""},"fr-FR":{title:"Record this meeting?",description:""},"pt-PT":{title:"Record this meeting?",description:""},"jp-JP":{title:"Record this meeting?",description:""},"ru-RU":{title:"Record this meeting?",description:""},"ko-KO":{title:"Record this meeting?",description:""}},c={"en-US":{title:"{username} is requesting remote control of your screen",description:"You can regain control at any time by clicking on your screen."},"es-ES":{title:"{username} solicita control remoto de su pantalla",description:"You can regain control at any time by clicking on your screen."},"de-DE":{title:"{username} fordert die Fernsteuerung Ihres Bildschirms an",description:"You can regain control at any time by clicking on your screen."},"zh-CN":{title:"{username}请求远程控制你的屏幕",description:"You can regain control at any time by clicking on your screen."},"zh-TW":{title:"{username}現正請求遠端控制您的畫面",description:"You can regain control at any time by clicking on your screen."},"fr-FR":{title:"{username} demande le contrôle à distance de votre écran",description:"You can regain control at any time by clicking on your screen."},"pt-PT":{title:"{username} está solicitando o controle remoto da sua tela",description:"You can regain control at any time by clicking on your screen."},"jp-JP":{title:"{username}が画面のリモート制御をリクエストしています",description:"You can regain control at any time by clicking on your screen."},"ru-RU":{title:"Пользователь {username} запрашивает дистанционное управление вашим экраном",description:"You can regain control at any time by clicking on your screen."},"ko-KO":{title:"{username}님이 귀하의 화면 제어를 요청하고 있습니다",description:"You can regain control at any time by clicking on your screen."}},d=i("365c");function m(t){var e=/^https:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/,i=new RegExp(e);return!0===i.test(t)}var u={name:"disclaimer",props:["item","level","readonly","visible","params","type"],inject:["dataModel"],data:function(){var t=this,e=function(e,i,n){if(t.form.linkUrl.length&&!i.trim().length)return n(new Error(t.$t("recordingReminder.emptyLinkText")));n()},i=function(e,i,n){var r=i.trim();return t.form.linkText.trim().length&&!r.length?n(new Error(t.$t("recordingReminder.emptyLink"))):r.length&&!m(r)?n(new Error(t.$t("recordingReminder.errorLink"))):void n()},n=function(e,i,n){if("remoteControl"!==t.type&&"recordingForHost"!==t.type)return i.trim().length?void n():n(new Error(t.$t("recordingReminder.emptyDesc")));n()};return{dialogVisible:!1,language:"",showLink:!1,applyLoading:!1,restoreLoading:!1,titleError:!1,descError:!1,linkUrlError:!1,linkTextError:!1,linkTextWidth:"auto",form:{title:"",description:"",linkUrl:"",linkText:""},originData:{title:"",description:"",linkUrl:"",linkText:""},rules:{title:[{required:!0,message:this.$t("recordingReminder.emptyTitle"),trigger:"blur"}],description:[{validator:n,trigger:"blur"}],linkUrl:[{validator:i,trigger:"blur"}],linkText:[{validator:e,trigger:"blur"}]},closeDialogIfDone:!1}},computed:{disabled:function(){return this.readonly||this.item.locked.value&&this.item.locked.level!==this.level},supportVersion:function(){return this.item.uiParams&&this.item.uiParams.customizeSupportVersion},chartType:function(){return 1},maxTitleLength:function(){return Math.floor(100/this.chartType)},maxDescLength:function(){return Math.floor(1e3/this.chartType)},maxLinkTextLength:function(){return Math.floor(50/this.chartType)},modified:function(){var t=this.form,e=this.originData;return t.title!==e.title||t.description!==e.description||t.linkUrl!==e.linkUrl||e.linkText!==t.linkText},validationError:function(){return this.titleError||this.descError||this.linkUrlError||this.linkTextError},languageList:function(){var t=[];for(var e in this.dataModel.supportLanguages)t.push({value:e,label:this.dataModel.supportLanguages[e]});return t}},watch:{visible:function(t){this.dialogVisible=t},language:function(t,e){e&&this.onChange(t,e)}},created:function(){var t=s.a.get("_zm_lang"),e=this.languageList.some((function(e){return e.value===t}));this.cookieLang=t&&e?t:"en-US",this.language=this.cookieLang},methods:{onOpen:function(){var t=this;this.$nextTick((function(){t.$refs.form.clearValidate(),t.setButtonWidth()})),this.params.contentObjectId&&this.params.contentObjectType&&this.getInfo(this.cookieLang)},setButtonWidth:function(){var t=this.$refs.previewBox&&this.$refs.previewBox.getBoundingClientRect().width,e=this.$refs.btnLeave&&this.$refs.btnLeave.$el.getBoundingClientRect().width,i=this.$refs.btnContinue&&this.$refs.btnContinue.$el.getBoundingClientRect().width,n=t-56-60-e-i-10-10-24;this.linkTextWidth=Math.floor(n)},check:function(t,e,i){switch(t){case"title":this.titleError=!e;break;case"description":this.descError=!e;break;case"linkUrl":this.linkUrlError=!e;break;case"linkText":this.linkTextError=!e;break;default:break}},onChange:function(t,e){var i=this;this.modified?this.$confirm(this.$t("recordingReminder.unsavedMessage"),"",{confirmButtonText:this.$t("common.yes"),cancelButtonText:this.$t("common.no")}).then((function(){i.onApply(e)})).catch((function(){i.getInfo(t)})):this.getInfo(t)},getDefaultConfig:function(t){if("remoteControl"===this.type){var e=c[t];return e||c["en-US"]}return"recordingForHost"===this.type?l[t]:a[t]},getInfo:function(t){var e=this;this.params.contentObjectId&&this.params.contentObjectType?Object(d["C"])({contentObjectId:this.params.contentObjectId,contentObjectType:this.params.contentObjectType,featureId:this.params.featureId,language:t}).then((function(i){if(i)e.setFormValue(i);else{var n=e.getDefaultConfig(t);e.setFormValue(n)}})).catch((function(t){})):this.setFormValue({})},setFormValue:function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(i){console.error("no datda")}var e=t.title;this.form.title=this.originData.title=e||"",this.form.description=this.originData.description=t.description||"",this.form.linkUrl=this.originData.linkUrl=t.linkUrl||"",this.form.linkText=this.originData.linkText=t.linkText||"",t.linkText&&(this.showLink=!0)},onAddLink:function(){var t=this;this.showLink=!0,this.$nextTick((function(){t.$refs.scrollbar.scrollToEndY(),t.$refs.inputLinkUrl.focus()}))},onDeleteLink:function(){var t=this;this.form.linkUrl="",this.form.linkText="",this.showLink=!1,this.linkUrlError=!1,this.linkTextError=!1,this.$nextTick((function(){t.$refs.btnAddLink.$el.focus()}))},onApply:function(t){var e=this;this.applyLoading=!0;var i={language:t,title:this.form.title,description:this.form.description};this.form.linkUrl&&this.form.linkText&&(i.linkUrl=this.form.linkUrl,i.linkText=this.form.linkText),"undefined"===typeof this.item.overrides||this.item.overrides||(this.params.contentObjectId=this.dataModel.objectId,this.params.contentObjectType=this.dataModel.featureLevel),Object(d["nb"])({contentObjectId:this.params.contentObjectId,contentObjectType:this.params.contentObjectType,featureId:this.params.featureId,contentItem:JSON.stringify(i)}).then((function(t){e.revertStatus(),e.$emit("submit")})).catch((function(t){console.error(t)}))},onSave:function(){var t=this;this.$refs.form.validate((function(e){e&&t.onApply(t.language)}))},onRestore:function(){var t=this;this.restoreLoading=!0,"undefined"===typeof this.item.overrides||this.item.overrides||(this.params.contentObjectId=this.dataModel.objectId,this.params.contentObjectType=this.dataModel.featureLevel),Object(d["nb"])({contentObjectId:this.params.contentObjectId,contentObjectType:this.params.contentObjectType,featureId:this.params.featureId,contentItem:JSON.stringify({language:this.language})}).then((function(e){t.revertStatus(),t.$emit("submit")})).catch((function(t){console.error(t)}))},revertStatus:function(){this.form.title=this.originData.title="",this.form.description=this.originData.description="",this.form.linkUrl=this.originData.linkUrl="",this.form.linkText=this.originData.linkText="",this.dialogVisible=!1,this.language=this.cookieLang,this.applyLoading=!1,this.restoreLoading=!1},onDone:function(){var t=this;this.modified?this.$confirm(this.$t("recordingReminder.unsavedMessage"),"",{confirmButtonText:this.$t("common.yes"),cancelButtonText:this.$t("common.no")}).then((function(){t.$refs.form.validate((function(e){e&&(t.closeDialogIfDone=!0,t.onApply(t.language))}))})).catch((function(){t.revertStatus(),t.$emit("close")})):(this.revertStatus(),this.$emit("close"))},close:function(){this.revertStatus()}},mounted:function(){}},p=u,h=(i("1bd0"),i("2877")),g=Object(h["a"])(p,n,r,!1,null,null,null);e["a"]=g.exports}}]);