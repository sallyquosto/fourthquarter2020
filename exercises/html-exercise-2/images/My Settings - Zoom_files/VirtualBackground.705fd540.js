(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VirtualBackground"],{8081:function(t,e,i){},c3a9:function(t,e,i){"use strict";var a=i("f4f2"),o=i.n(a);o.a},d12d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mgt-md"},[i("div",{staticClass:"mgb-md"},[i("zm-checkbox",{attrs:{disabled:t.disabled},model:{value:t.isAllowVideo,callback:function(e){t.isAllowVideo=e},expression:"isAllowVideo"}},[t._v("\n      "+t._s(t.$t("VB.allowVideo"))+"\n      "),i("span",{attrs:{slot:"suffix"},slot:"suffix"},[i("zm-tooltip",{attrs:{placement:"top"}},[i("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.$t("VB.allowVideoTips"))},slot:"content"}),i("zm-button",{attrs:{type:"icon",icon:"zm-icon-version","aria-label":"Support Version"}})],1)],1)]),t.allowClientUpload&&"user"!==t.level?i("p",[i("zm-checkbox",{attrs:{disabled:t.disabled},model:{value:t.isAllowClientUpload,callback:function(e){t.isAllowClientUpload=e},expression:"isAllowClientUpload"}},[t._v("\n        "+t._s(t.allowClientUpload.featureName)+"\n        "),t.allowClientUpload.ui&&t.allowClientUpload.ui.supportVersion?i("span",{attrs:{slot:"suffix"},slot:"suffix"},[i("zm-tooltip",{attrs:{placement:"top"}},[i("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.allowClientUpload.ui.supportVersion)},slot:"content"}),i("zm-button",{attrs:{type:"icon",icon:"zm-icon-version","aria-label":"Support Version"}})],1)],1):t._e()])],1):t._e(),t.modified?i("p",{staticClass:"mgt-md"},[i("zm-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onSave}},[t._v("\n        "+t._s(t.$t("common.save"))+"\n      ")]),i("zm-button",{attrs:{disabled:t.loading,plain:""},on:{click:t.onCancel}},[t._v("\n        "+t._s(t.$t("common.cancel"))+"\n      ")])],1):t._e()],1),t.VirtualBackgroundContent&&("user"!==t.level||"user"===t.level&&t.isAllowClientUpload)?i("p",{staticClass:"mgb-md mgt-md"},[i("zm-button",{attrs:{type:"link"},on:{click:function(e){t.showManage=!0}}},[t._v("\n      "+t._s(t.$t("VB.manage"))+"\n    ")]),i("zm-tooltip",{attrs:{content:t.$t("VB.notVideo"),placement:"top"}},[i("zm-button",{attrs:{type:"icon",icon:"zm-icon-help-outline","aria-label":"Help info"}})],1)],1):t._e(),t.VirtualBackgroundContent?i("ul",{staticClass:"preview-list mgb-0 clear-fix"},[t._l(t.list,(function(e){return i("li",{key:e.fileId||e.name,staticClass:"images-list-item"},[1===e.isDefault?[i("zm-tooltip",{attrs:{placement:"top",content:2===e.type?"Default video provided by Zoom":"Default image provided by Zoom"}},[i("div",{staticClass:"thumbnail-box-wrap"},[i("span",{staticClass:"thumbnail-box",class:t.getPreviewClass(e)},[i("img",{ref:e.fileId,refInFor:!0,class:{"placeholder-loading":e.isLoading},attrs:{src:t.getPreviewSrc(e),fileId:e.fileId||e.name,width:e.isLoading?"16":t.ratioMap[e.fileId]&&t.ratioMap[e.fileId].width,height:e.isLoading?"16":t.ratioMap[e.fileId]&&t.ratioMap[e.fileId].height,alt:e.name}})]),2===e.type?i("span",{staticClass:"is-video zm-icon-camera"}):t._e()])])]:[i("zm-tooltip",{attrs:{placement:"top",disabled:t.isOwner(e),content:"Uploaded by your admin"}},[i("span",{staticClass:"thumbnail-box",class:t.getPreviewClass(e)},[i("img",{ref:e.fileId,refInFor:!0,class:{"placeholder-loading":e.isLoading},attrs:{src:e.isLoading?t.placeholderImg:e.blobSrc,fileId:e.fileId||e.name,width:e.isLoading?"16":t.ratioMap[e.fileId]&&t.ratioMap[e.fileId].width,height:e.isLoading?"16":t.ratioMap[e.fileId]&&t.ratioMap[e.fileId].height,alt:e.name}})])]),!t.disabled&&t.isOwner(e)?i("zm-button",{staticClass:"btn-item-delete",attrs:{type:"icon",icon:"zm-icon-error","aria-label":"Delete"},on:{click:function(i){return t.onDelete([e])}}}):t._e()]],2)})),t.showMoreBtn?i("li",{staticClass:"images-list-item",staticStyle:{"text-align":"center","border-color":"transparent"}},[i("zm-button",{staticStyle:{"line-height":"62px"},attrs:{type:"link"},on:{click:function(e){t.showManage=!0}}},[t._v("View More")])],1):t._e()],2):t._e(),t.showManage?i("detail",{attrs:{list:t.list,item:t.item,level:t.level,zak:t.zak,"ratio-map":t.ratioMap,disabled:t.disabled||t.disabledUserUpload},on:{cancel:t.onUploadCancel,delete:t.onDelete,upload:t.onUpload,download:t.onDownload}}):t._e()],1)},o=[],n=i("7618"),s=(i("ac6a"),i("7f7f"),i("96cf"),i("3b8d")),l=i("365c"),r=i("bc3a"),c=i.n(r),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("zm-dialog",{attrs:{visible:t.showManageDialog,width:"880px","aria-labelledby":"customTitle"},on:{"update:visible":function(e){t.showManageDialog=e},opened:t.onOpened}},[i("div",{staticClass:"custom-title-wrap",attrs:{slot:"title"},slot:"title"},[i("h4",{staticClass:"zm-dialog__title",attrs:{id:"customTitle"}},[t._v("\n      "+t._s(t.dialogTitle)+"\n      "),t.countSizesLabel?i("span",{staticClass:"sub-title"},[t._v(t._s(t.countSizesLabel))]):t._e(),t.imagesList.length?i("zm-tooltip",{attrs:{placement:"top",content:t.uploadInFo}},[i("zm-button",{attrs:{type:"icon",icon:"zm-icon-help-outline","aria-label":"Help Info about uploading"}})],1):t._e()],1),t.imagesList.length?i("span",{staticClass:"btn-wrap"},[i("zm-button",{class:{"zm-button-active":"thumbnail"===t.viewType},attrs:{type:"icon",icon:"zm-icon-grid-view-thin","aria-label":"View in Thumbnail"},on:{click:function(e){t.viewType="thumbnail"}}}),i("zm-button",{staticClass:"mgl-0",class:{"zm-button-active":"list"===t.viewType},attrs:{type:"icon",icon:"zm-icon-list-thin","aria-label":"View in List"},on:{click:function(e){t.viewType="list"}}})],1):t._e()]),t.imagesList.length?[t.showStickyBar?i("div",{staticClass:"drag-drop-main sticky-bar"},[i("zm-button",{attrs:{icon:"zm-icon-download-alt",plain:""},on:{click:t.onBatchDownload}},[t._v(t._s(t.$t("VB.download"))+" ("+t._s(t.checkList.length)+")\n      ")]),t.disabled||t.disbleBatchDelete?t._e():i("zm-button",{attrs:{icon:"zm-icon-delete",plain:""},on:{click:t.onBatchDelete}},[t._v(t._s(t.$t("common.delete"))+" ("+t._s(t.checkList.length)+")\n      ")])],1):i("div",{staticClass:"drag-drop-main drag-drop-bar"},[i("zm-upload",{ref:"upload",staticClass:"upload-vb",attrs:{multiple:"",drag:"",name:"files[]",accept:".png,.jpeg,.jpg",headers:t.uploadHeaders,disabled:t.disabled||t.overMaxSize||t.isUserOverMaxLength,"auto-upload":!1,"show-file-list":!1,limit:5,"on-success":t.onUploadSuccess,"on-change":t.onUploadChange,"on-progress":t.onProgress,"on-error":t.onUploadError,"on-exceed":t.onExceed,"before-upload":t.onBeforeUpload,action:t.actionUrl}},[i("p",{},[t._v(t._s(t.$t("VB.dragHere")))]),i("p",{staticClass:"spit-line"},[t._v("- "+t._s(t.$t("VB.orText"))+" -")]),i("zm-button",{ref:"uploadBtn",attrs:{type:"primary",disabled:t.disabled||t.overMaxSize||t.isUserOverMaxLength}},[t._v(t._s(t.$t("VB.chooseFiles")))])],1)],1),"list"!==t.viewType?[i("zm-scrollbar",{ref:"scrollbar",staticClass:"vb-list-scrollbar",staticStyle:{height:"358px"},attrs:{"wrap-class":"vb-list-wrap","view-class":"vb-list-view"}},[i("div",{staticClass:"images-list"},t._l(t.imagesList,(function(e){return i("li",{key:e.fileId,staticClass:"images-list-item",class:{"clip-hide":e.isUploading&&"fail"!==e.status,"images-list-item-failed":"fail"===e.status}},["fail"!==e.status?[i("zm-tooltip",{attrs:{placement:"top",disabled:t.isOwner(e),content:"Uploaded by your admin"}},[i("span",{staticClass:"thumbnail-box",class:t.getPreviewClass(e)},[i("img",{class:{"placeholder-loading":e.isLoading},attrs:{src:e.isLoading?t.placeholderImg:e.blobSrc,width:e.isLoading?"16":t.ratioMap[e.fileId]&&t.ratioMap[e.fileId].width,height:e.isLoading?"16":t.ratioMap[e.fileId]&&t.ratioMap[e.fileId].height,alt:e.name}})])])]:i("span",{staticClass:"upload-fail"},[i("i",{staticClass:"zm-icon-alert-triangle"})]),e.isUploading&&"fail"!==e.status||t.disabled||!t.isOwner(e)?t._e():i("zm-button",{staticClass:"btn-item-delete",attrs:{type:"icon",icon:"zm-icon-error","aria-label":"Delete "+e.name},on:{click:function(i){return t.onDelete(e)}}}),e.isUploading&&"fail"!==e.status?[i("zm-progress",{staticClass:"upload-progress",attrs:{"show-text":!1,"stroke-width":4,percentage:t.percentage[e.uid]}})]:t._e()],2)})),0)])]:[i("zm-table",{ref:"multipleTable",staticClass:"mgt-md",staticStyle:{width:"100%"},attrs:{data:t.imagesList,height:358},on:{"selection-change":t.selectionChange}},[i("zm-table-column",{attrs:{type:"selection",width:"24",selectable:t.selectable}}),i("zm-table-column",{attrs:{label:"Name","class-name":"thumbnail-col"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"thumbnail-box thumbnail-box-inner",class:t.getPreviewClass(e.row)},[i("img",{class:{"placeholder-loading":e.row.isLoading},attrs:{src:e.row.isLoading?t.placeholderImg:e.row.blobSrc,width:e.row.isLoading?"16":t.ratioMap[e.row.fileId]&&t.ratioMap[e.row.fileId].width,height:e.row.isLoading?"16":t.ratioMap[e.row.fileId]&&t.ratioMap[e.row.fileId].height,alt:e.row.name}})]),e.row.isUploading?i("span",{staticClass:"thumbnail-name"},["fail"===e.row.status?i("span",{staticClass:"warning-text"},[t._v("\n                Uploading Failed\n              ")]):i("span",[t._v(t._s(t.$t("VB.uploading")))])]):i("span",{staticClass:"thumbnail-name",domProps:{textContent:t._s(e.row.name)}})]}}])}),i("zm-table-column",{attrs:{prop:"modifyTime",width:"200",label:"Date Added"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t.setTime(e.row.modifyTime))+"\n          ")]}}])}),i("zm-table-column",{attrs:{prop:"size",label:"Size",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t.getSize(e.row.size))+"\n          ")]}}])}),i("zm-table-column",{attrs:{width:"120","class-name":"action-col"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isUploading?t._e():i("zm-button",{attrs:{type:"icon",icon:"zm-icon-download-alt-thin","aria-label":"Download"+e.row.name},on:{click:function(i){return t.onDownload(e.row)}}}),e.row.isUploading&&"fail"!==e.row.status||t.disabled||!t.isOwner(e.row)?t._e():i("zm-button",{attrs:{disabled:e.row.isUploading&&"fail"!==e.row.status,type:"icon",icon:"zm-icon-delete-outline","aria-label":"Delete"+e.row.name},on:{click:function(i){return t.onDelete(e.row)}}})]}}])})],1)]]:i("div",{staticClass:"drag-drop-main"},[i("zm-upload",{ref:"upload",staticClass:"upload-vb",attrs:{multiple:"",drag:"",name:"files[]",accept:".png,.jpeg,.jpg",headers:t.uploadHeaders,disabled:t.disabled,"auto-upload":!1,"show-file-list":!1,limit:5,"on-success":t.onUploadSuccess,"on-change":t.onUploadChange,"on-progress":t.onProgress,"on-error":t.onUploadError,"on-exceed":t.onExceed,"before-upload":t.onBeforeUpload,action:t.actionUrl}},[i("p",{},[t._v(t._s(t.$t("VB.dragHere")))]),i("p",{staticClass:"spit-line"},[t._v("- "+t._s(t.$t("VB.orText"))+" -")]),i("zm-button",{ref:"uploadBtn",attrs:{type:"primary",disabled:t.disabled}},[t._v(t._s(t.$t("VB.chooseFiles")))]),i("p",{staticClass:"zm-upload__tip color-grey"},[t._v("\n        JPG/JPEG or 24-bit PNG and 1920x1080 px recommended. Maximum image size is 15 MB.\n      ")])],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("zm-button",{attrs:{plain:""},on:{click:t.onCancel}},[t._v(" "+t._s(t.imagesList.length?t.$t("common.done"):t.$t("common.cancel"))+" ")])],1)],2)},u=[],h=i("7045"),p=i("5586"),f=i("0a94"),m=i("5c8a"),g=i("495f"),b=i("b166"),w=i("3f5e"),v=i("8923"),k=i("d546"),z=i("d481"),I=i("25f0"),A=i("ab5d"),C=i("a4c2"),U=i("ad53"),L=i("a3b1"),y=i("8dc0"),M=c.a.create({}),x=window.Vue;x.use(h["a"]),x.use(p["a"]);var B=15728640,_=262144e3,S=104857600,V=10,O={name:"virtualBackgroundUpload",props:["item","level","zak","disabled"],data:function(){return{imagesList:[],showManageDialog:!0,viewType:"thumbnail",checkList:[],changeFlag:!1,fileZakMap:{},percentage:{},postFilesLength:0,uploadedPool:[],ratioMap:{},locales:{"de-DE":w["a"],"en-US":v["a"],"es-ES":k["a"],"fr-FR":z["a"],"jp-JP":I["a"],"ko-KO":A["a"],"pt-PT":C["a"],"ru-RU":U["a"],"zh-CN":L["a"],"zh-TW":y["a"]},maxLength:V}},inject:["dataModel"],watch:{"VirtualBackgroundContent.value":function(t){var e=this,i=JSON.parse(t);if(Array.isArray(i)){var a=i.filter((function(t){return!t.isDefault}));if(a.length>this.imagesList.length)a.forEach((function(t){var i=e.imagesList.filter((function(e){return e.fileId===t.fileId}));i.length||(t.blobSrc="",t.isLoading=!0,e.getImgBlob(t.previewSmall,t),e.imagesList.push(t))}));else if(a.length)for(var o=this.imagesList.length,n=0;n<o;n++)for(var s=function(t){var i=a.filter((function(i){return i.fileId===e.imagesList[t].fileId}));if(!i.length)return e.imagesList.splice(t,1),o=e.imagesList.length,"break"},l=0;l<o;l++){var r=s(l);if("break"===r)break}else this.imagesList=[];this.$nextTick((function(){e.$refs.scrollbar&&e.$refs.scrollbar.update()}))}},imagesList:function(t,e){var i=this;this.$nextTick((function(){i.$refs.scrollbar&&i.$refs.scrollbar.update(),t.length>=e.length&&setTimeout((function(){i.$refs.scrollbar&&i.$refs.scrollbar.scrollToEndY()}),100)}))},viewType:function(t){"thumbnail"===t&&(this.checkList=[])}},computed:{placeholderImg:function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAACQkJaPj4+Pj5ePj5WQkJaRkZeQkJWQkJWQkJaQkJWQkJeQkJaPj5ePj5OSkpaQkJbtnsvsAAAAEHRSTlMA3yAgEF9PgO/Pv7+vQEA/IDxD/wAAALBJREFUOMvNz0EOgzAMRFEP2AmB0s79T1uIjIE22TOLbP6TIsszpnlhc8VqH8HuMG4AxEeltbQlFdufzhTMUpiku5WzkNKfkk1gE0zqLkDzazYHIKdfMOI4a9tE4gK8IyW4MEzXL7wPIoML3wGiu/gH0UPcQfQQftMBop8ibqog+inipgqinyJuquDe7zdVoO3uQha+G91nLJIJ7XUFbX+Qml1XEP5Rb46ttPOcVR6xL00pDuZ9PU4eAAAAAElFTkSuQmCC"},VirtualBackgroundContent:function(){return Object(f["a"])(this.item.child,{featureId:"VirtualBackgroundContent"})},uploadHeaders:function(){var t={open:!1,ownerType:"user"===this.level?"user":"account",ownerId:"group"===this.level?this.dataModel.accountId:this.dataModel.objectId},e={"Zoom-File-Meta":JSON.stringify(t)};return e},actionUrl:function(){return""},fsUploadUrl:function(){return this.item.uiParams.fs_upload},fsDownloadUrl:function(){return this.item.uiParams.fs_download},dialogTitle:function(){return this.imagesList.length?"Image Virtual Backgrounds":"Upload Image"},uploadInFo:function(){var t="";return t="user"===this.level?"You can upload up to 10 images.":"account"===this.level?"You can upload up to ".concat(_/1024/1024," MB."):"You can upload up to ".concat(S/1024/1024," MB."),t+" JPG/JPEG or 24-bit PNG and 1920x1080 px recommended. Maximum image size is 15 MB."},countSizes:function(){var t=this,e=0;return this.imagesList.forEach((function(i){!i.isUploading&&"fail"!==i.status&&i.ownerId&&i.ownerId===t.dataModel.objectId&&(e+=i.size)})),e},overMaxSize:function(){return"account"===this.level?this.countSizes>=_:"group"===this.level&&this.countSizes>=S},isUserOverMaxLength:function(){return"user"===this.level&&this.ownerCount>=this.maxLength},countSizesLabel:function(){if(!this.imagesList.length)return"";var t="",e=this.imagesList.filter((function(t){return!t.isUploading&&"fail"!==t.status}));if("user"===this.level)t="".concat(e.length," Images, ").concat(this.ownerCount," / ").concat(this.maxLength," by yourself");else{var i="account"===this.level?_/1024/1024:S/1024/1024;t="".concat(e.length," Images, ").concat((this.countSizes/1024/1024).toFixed(1)," / ").concat(i," MB used")}return t},showStickyBar:function(){return this.checkList.length},ownerCount:function(){var t=this,e=this.imagesList.filter((function(e){return e.ownerId&&e.ownerId===t.dataModel.objectId}));return e.length},disbleBatchDelete:function(){var t=this,e=this.checkList.filter((function(e){return e.ownerId&&e.ownerId!==t.dataModel.objectId}));return e.length>0}},methods:{isOwner:function(t){return t.ownerId&&t.ownerId===this.dataModel.objectId},getImgBlob:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,i){var a,o,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.zak){t.next=17;break}return t.prev=1,t.next=4,M({url:e,method:"GET",headers:{zak:this.zak},responseType:"blob"});case 4:return a=t.sent,o=a.data,n=new Blob([o]),i.blobSrc=window.URL.createObjectURL(n),i.isLoading=!1,t.next=11,createImageBitmap(n);case 11:s=t.sent,this.$set(this.ratioMap,o.fileId,{ratio:s.width/s.height,width:s.width,height:s.height}),t.next=17;break;case 15:t.prev=15,t.t0=t["catch"](1);case 17:case"end":return t.stop()}}),t,this,[[1,15]])})));function e(e,i){return t.apply(this,arguments)}return e}(),getPreviewClass:function(t){var e=this.ratioMap[t.fileId]||{};return{"empty-image":!this.ratioMap[t.fileId],"ratio-width":this.ratioMap[t.fileId]?e.ratio>=1.5||e.ratio<=.85:null,"ratio-height":this.ratioMap[t.fileId]?e.ratio>.85&&e.ratio<1.5:null}},onOpened:function(){var t=this;this.$nextTick((function(){t.$refs.uploadBtn&&t.$refs.uploadBtn.$el.focus()}))},selectable:function(t,e){return!t.isUploading},getPreviewSrc:function(t){return t&&t.isDefault?t.contentUrl:t?t.isUploading?t.contentUrl:t.previewSmall+"?zak="+this.zak:""},setTime:function(t){var e=this.$i18n.locale;return t?Object(b["a"])(t,"Pp",{locale:this.locales[e]}):""},getSize:function(t){return(t/1024/1024).toFixed(1)+" MB"},selectionChange:function(t){this.checkList=t},onBatchDownload:function(){this.$emit("download",this.checkList)},onDownload:function(t){this.$emit("download",t)},onBatchDelete:function(){this.$emit("delete",this.checkList)},onDelete:function(t){if("fail"===t.status){for(var e=0;e<this.imagesList.length;e++)if(this.imagesList[e].uid===t.uid){this.imagesList.splice(e,1);break}}else this.$emit("delete",[t])},onCancel:function(){this.$emit("cancel")},onExceed:function(t,e){var i=Array.prototype.slice.call(t);i=i.slice(0,5);for(var a=0;a<i.length;a++)this.$refs.upload.handleStart(i[a],i);this.$message({message:"Upload up to 5 images at a time.",type:"warning"})},onBeforeUpload:function(t,e){if(t.size>B||!this.fileZakMap[t.uid])return!1;e.zak=this.fileZakMap[t.uid];var i={name:t.name,size:t.size,dup:!0,channel:18,filetype:0,presize:"320x180"};t.action=this.fsUploadUrl+(-1===this.fsUploadUrl.indexOf("?")?"?":"&")+Object(g["d"])(i)+"&presize=112x63&presize=1920x1080"},onUploadChange:function(t,e,i){var a=this;if(i&&Array.isArray(i)&&e.length===i.length){this.postFilesLength=i.length;var o=[],n=0;if(i.forEach((function(t){o.push({name:t.name,size:t.size}),n+=t.size})),"user"!==this.level){var s="";if("account"===this.level?this.countSizes+n>=_&&(s="account"):this.countSizes+n>=S&&(s="group"),s){var r="account"===s?_/1024/1024:S/1024/1024;return this.$message({message:"The maximum storage space is ".concat(r," MB, images beyond this size will can not be uploaded, or you can delete some ones"),type:"warning"}),this.postFilesLength=0,this.$refs.upload&&this.$refs.upload.clearFiles(),!1}}else if(this.ownerCount+i.length>this.maxLength)return this.$message({message:"You can upload up to ".concat(this.maxLength," images, and ").concat(this.ownerCount," images have been uploaded so far, please delete some ones"),type:"warning"}),this.postFilesLength=0,this.$refs.upload&&this.$refs.upload.clearFiles(),!1;var c=null;"account"===this.level?c=Object(l["u"])({contentData:JSON.stringify(o),action:"write"}):"group"===this.level?c=Object(l["I"])({contentData:JSON.stringify(o),id:this.dataModel.objectId,action:"write"}):"user"===this.level&&(c=Object(l["X"])({contentData:JSON.stringify(o),id:this.dataModel.objectId,action:"write"})),c&&c.then((function(t){t.forEach((function(t,e){var o=i[e];a.fileZakMap[o.uid]=t.zak})),a.$refs.upload.submit()})).catch((function(t){console.log(t)}))}"ready"===t.status&&this.imagesList.push({name:t.name,type:0,isDefault:0,contentUrl:t.url,size:t.size,modifyTime:"",fileId:t.uid,ownerId:this.dataModel.objectId,isUploading:!0,blobSrc:t.url,isLoading:!1,uid:t.uid})},onProgress:function(t,e,i){var a=parseInt(t.percent);"undefined"===typeof this.percentage[e.uid]?this.$set(this.percentage,e.uid,a):this.percentage[e.uid]=a},onUploadSuccess:function(t,e,i){t.body;var a=t.xhr,o=a.getResponseHeader("Zoom-File-ID"),n=Object(f["a"])(this.imagesList,{uid:e.uid});if("success"===e.status?(n.contentUrl=this.fsDownloadUrl+"/"+o,n.fileId=o,n.ownerId=this.dataModel.objectId,n.isUploading=!1,n.previewSmall=this.fsDownloadUrl+"/"+o+"/attach/preview/320x180",n.previewBig=this.fsDownloadUrl+"/"+o+"/attach/preview/1920x1080",this.uploadedPool.push(n)):"fail"===e.status&&(this.$set(n,"status","fail"),this.uploadedPool.push(n)),this.uploadedPool.length>=this.postFilesLength){var s=this.uploadedPool.filter((function(t){return"fail"!==t.status}));this.$emit("upload",Object(m["a"])(s)),this.postFilesLength=0,this.fileZakMap={},this.uploadedPool=[],this.percentage={},this.$refs.upload&&this.$refs.upload.clearFiles()}},onUploadError:function(t,e,i){if(t){var a=Object(f["a"])(this.imagesList,{uid:e.uid});this.$set(a,"status","fail")}}},mounted:function(){var t=this,e=JSON.parse(this.VirtualBackgroundContent.value);Array.isArray(e)&&e.forEach((function(e){e.isDefault||(e.blobSrc="",e.isLoading=!0,t.getImgBlob(e.previewSmall,e),t.imagesList.push(e))}))}},$=O,P=(i("c3a9"),i("2877")),D=Object(P["a"])($,d,u,!1,null,"45f00d2c",null),E=D.exports,T=i("b06d"),j=c.a.create({}),J={},F=11,Q={name:"virtualBackground",props:["item","level","readonly"],mixins:[T["a"]],data:function(){return{isAllowVideo:!1,isAllowClientUpload:!1,loading:!1,showManage:!1,list:[],zak:"",triggerSelect:!1,ratioMap:J,showMoreBtn:!1}},computed:{placeholderImg:function(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAACQkJaPj4+Pj5ePj5WQkJaRkZeQkJWQkJWQkJaQkJWQkJeQkJaPj5ePj5OSkpaQkJbtnsvsAAAAEHRSTlMA3yAgEF9PgO/Pv7+vQEA/IDxD/wAAALBJREFUOMvNz0EOgzAMRFEP2AmB0s79T1uIjIE22TOLbP6TIsszpnlhc8VqH8HuMG4AxEeltbQlFdufzhTMUpiku5WzkNKfkk1gE0zqLkDzazYHIKdfMOI4a9tE4gK8IyW4MEzXL7wPIoML3wGiu/gH0UPcQfQQftMBop8ibqog+inipgqinyJuquDe7zdVoO3uQha+G91nLJIJ7XUFbX+Qml1XEP5Rb46ttPOcVR6xL00pDuZ9PU4eAAAAAElFTkSuQmCC"},disabled:function(){return this.readonly||void 0!==this.item.locked&&this.item.locked.value&&this.item.locked.level!==this.level},disabledUserUpload:function(){return"user"===this.level&&!this.isAllowClientUpload},VirtualBackgroundContent:function(){return Object(f["a"])(this.item.child,{featureId:"VirtualBackgroundContent"})},allowVideo:function(){return Object(f["a"])(this.item.child,{featureId:"VideoVirtualBackground"})},allowClientUpload:function(){return Object(f["a"])(this.item.child,{featureId:"ClientUpload"})},modified:function(){var t=!1;return this.allowClientUpload&&(t=this.isAllowClientUpload!==this.allowClientUpload.value),this.isAllowVideo!==this.allowVideo.value||t}},watch:{isAllowVideo:function(){this.updateList()}},methods:{isOwner:function(t){return t.ownerId===this.dataModel.objectId},getPreviewSrc:function(t){var e="";return t&&t.isDefault&&2===t.type?e=t.thumbnailImgUrl:t&&t.isDefault&&(e=t.contentUrl),e},getImgBlob:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,i){var a,o,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.zak){t.next=17;break}return t.prev=1,t.next=4,j({url:e,method:"GET",headers:{zak:this.zak},responseType:"blob"});case 4:return a=t.sent,o=a.data,n=new Blob([o]),i.blobSrc=window.URL.createObjectURL(n),i.isLoading=!1,t.next=11,createImageBitmap(n);case 11:s=t.sent,this.$set(this.ratioMap,o.fileId,{ratio:s.width/s.height,width:s.width,height:s.height}),t.next=17;break;case 15:t.prev=15,t.t0=t["catch"](1);case 17:case"end":return t.stop()}}),t,this,[[1,15]])})));function e(e,i){return t.apply(this,arguments)}return e}(),getPreviewClass:function(t){var e=this.ratioMap[t.fileId]||{};return{"empty-image":!t.isDefault&&!this.ratioMap[t.fileId],"ratio-width":this.ratioMap[t.fileId]?e.ratio>=1.5||e.ratio<=.85:null,"ratio-height":this.ratioMap[t.fileId]?e.ratio>.85&&e.ratio<1.5:null}},onSave:function(){this.loading=!0;var t=[{featureId:this.allowVideo.featureId,featureLevel:this.allowVideo.featureLevel,value:this.isAllowVideo}];this.allowClientUpload&&"user"!==this.level&&t.push({featureId:this.allowClientUpload.featureId,featureLevel:this.allowClientUpload.featureLevel,value:this.isAllowClientUpload}),this.$emit("custom-submit",t)},onCancel:function(){this.isAllowVideo=this.allowVideo.value,this.isAllowClientUpload=this.allowClientUpload&&this.allowClientUpload.value},onUploadCancel:function(){this.showManage=!1,this.triggerSelect=!1},onDelete:function(t){var e=this,i="";Array.isArray(t)&&1===t.length?i="Delete ".concat(t[0].name," ?"):Array.isArray(t)&&(i="Delete these ".concat(t.length," images ?")),this.$confirm("This image will be removed from this user's device",i,{confirmButtonText:this.$t("common.delete"),cancelButtonText:this.$t("common.cancel"),confirmButtonClass:"zm-button--danger",callback:function(i){if("confirm"===i){var a=[];t.forEach((function(t){a.push({delete:!0,fileId:t.fileId})}));var o=[{featureId:e.item.child[0].featureId,featureLevel:e.item.child[0].featureLevel,value:JSON.stringify(a)}];e.$emit("custom-submit",o)}}})},onDownload:function(t){var e=this;Array.isArray(t)?t.forEach((function(t){e.handleDownload(t)})):"object"===Object(n["a"])(t)&&this.handleDownload(t)},onUpload:function(t){var e=[{featureId:this.item.child[0].featureId,featureLevel:this.item.child[0].featureLevel,value:JSON.stringify(t)}];this.$emit("custom-submit",e)},handleDownload:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i,a,o,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.contentUrl,a=e.name,t.prev=1,t.next=4,c()({url:i,method:"GET",headers:{zak:this.zak},responseType:"blob"});case 4:o=t.sent,n=o.data,s=document.createElement("a"),s.href=window.URL.createObjectURL(new Blob([n])),s.download=a,document.body.appendChild(s),s.click(),s.remove(),t.next=16;break;case 14:t.prev=14,t.t0=t["catch"](1);case 16:case"end":return t.stop()}}),t,this,[[1,14]])})));function e(e){return t.apply(this,arguments)}return e}(),updateStatusHandler:function(t){t.status,t.response;this.loading=!1,this.isAllowVideo=this.allowVideo.value,this.isAllowClientUpload=this.allowClientUpload&&this.allowClientUpload.value,this.updateList()},updateList:function(){var t=this;if(this.$set(this,"list",[]),this.item.child&&this.VirtualBackgroundContent&&Array.isArray(this.VirtualBackgroundContent.value))this.item.child[0].value.forEach((function(e){t.list.push(e)}));else if(this.item.child.length&&this.VirtualBackgroundContent){var e=JSON.parse(this.VirtualBackgroundContent.value);Array.isArray(e)&&(e.length>F?this.showMoreBtn=!0:this.showMoreBtn=!1,e.forEach((function(e){(t.isAllowVideo&&2===e.type||2!==e.type)&&t.list.length<F&&(e.isDefault||(e.blobSrc="",e.isLoading=!0,t.getImgBlob(e.previewSmall,e)),t.list.push(e))})))}}},created:function(){var t=this,e=null;e="account"===this.level?l["s"]:"group"===this.level?l["G"]:l["V"],e({id:this.dataModel.objectId}).then((function(e){t.zak=e,t.$nextTick((function(){t.updateList()}))})).catch((function(t){console.log(t)}))},mounted:function(){this.isAllowVideo=this.allowVideo.value,this.isAllowClientUpload=this.allowClientUpload&&this.allowClientUpload.value},components:{detail:E}},R=Q,H=(i("efe1"),Object(P["a"])(R,a,o,!1,null,"7ba8d57e",null));e["default"]=H.exports},efe1:function(t,e,i){"use strict";var a=i("8081"),o=i.n(a);o.a},f4f2:function(t,e,i){}}]);