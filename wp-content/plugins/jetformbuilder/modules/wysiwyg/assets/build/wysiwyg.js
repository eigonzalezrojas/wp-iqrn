(()=>{"use strict";const{InputData:t}=JetFormBuilderAbstract,{getParsedName:i}=JetFormBuilderFunctions;function e(){t.call(this),this.isSupported=function(t){return t.classList.contains("wysiwyg-field")},this.setNode=function(e){t.prototype.setNode.call(this,e),this.inputType="wysiwyg",this.getSubmit().submitter.promise((t=>{window.tinyMCE.triggerSave(),t()})),this.textArea=e.querySelector(".wp-editor-area");const o=JSON.parse(e.dataset.editor);this.rawName=o.textarea_name,this.name=i(this.rawName);const n=()=>window.tinymce.get(this.textArea.id);n()?.remove?.(),window.wp.editor.initialize(this.textArea.id,o),this.editor=n(),this.getEditor=n,document.addEventListener("jet-form-builder/conditional-block/block-toggle-hidden-dom",(t=>{if(t.detail.block.contains(e)){const i=t.detail.block;i.contains(e)&&(i.__initialized?t.detail.result&&(n()?.remove?.(),window.wp.editor.initialize(this.textArea.id,o),this.editor=n(),this.getEditor=n):(n()?.remove?.(),window.wp.editor.initialize(this.textArea.id,o),this.editor=n(),this.getEditor=n,i.__initialized=!0))}}))},this.addListeners=function(){this.reporting.makeInvalid=()=>{},this.reporting.makeValid=()=>{};const t=()=>{this.value.current=this.editor.getContent()};this.getEditor()?.on?.("input",t)?.on?.("change",t)},this.setValue=function(){this.getEditor()?.on?.("init",(()=>{this.transferStylesToIframe(),this.callable.lock.current=!1,this.silenceSet(this.editor.getContent())}))},this.initNotifyValue=()=>{},this.focusRaw=function(){this.getEditor()?.getBody()?.focus({preventScroll:!0})},this.hasAutoScroll=function(){return!1},this.transferStylesToIframe=function(){const t=this.getWrapperNode(),i=this.editor.iframeElement.contentDocument.body,e=t.style.cssText.split(";").filter(Boolean);for(const t of e){const[e,o]=t.split(":");switch(e.trim()){case"--jfb-wysiwyg-container-bg":i.style.backgroundColor=o;break;case"--jfb-wysiwyg-container-text":i.style.color=o}}}}e.prototype=Object.create(t.prototype);const o=e,{BaseSignal:n}=JetFormBuilderAbstract;function s(){n.call(this),this.lock.current=!0,this.isSupported=function(t,i){return t.classList.contains("wysiwyg-field")},this.runSignal=function(){var t;this.input.value.current!==this.input.editor.getContent()&&this.input.editor.setContent(null!==(t=this.input.value.current)&&void 0!==t?t:"")}}s.prototype=Object.create(n.prototype);const r=s,{addFilter:a}=JetPlugins.hooks;a("jet.fb.inputs","jet-form-builder/wysiwyg-field",(function(t){return[o,...t]})),a("jet.fb.signals","jet-form-builder/wysiwyg-field",(function(t){return[r,...t]}))})();