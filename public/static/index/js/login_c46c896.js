var Dialog=require("common:widget/ui/dialog/dialog.js"),passBindPhone=require("common:widget/ui/passport_bind_phone/passport_bind_phone.js");$(function(){function n(){a()}function a(){passport.use("login",{tangram:!0},function(n){var a={product:"nuomi",staticPage:s,u:t,memberPass:!0,authsiteLogin:["qzone","tsina","renren","tqq"],sms:1,charset:"utf-8",defaultCss:!0,loginMerge:!0,hasRegUrl:!1,autosuggest:!0,hasPlaceholder:!0,connect:!0,idc:F.context("login_idc"),color:"pink"};l=new n.passport.login(a),l.on("connectError",function(n){var a=n.rsp?n.rsp:n,s=a.errInfo.no,i=a.data,t=u["handlerno"+s];t&&(n.returnValue=t(i))}),l.on("submitedError",function(n){if(r){var a=n.rsp||n,s=a.errInfo,i=s.msg;Dialog.alert({content:'<p class="smsloginsubmit-errmsg">'+i+"</p>"}),n.returnValue=!1}}),l.on("beforeSubmit",function(){r=!1}),l.on("loginSuccess",function(n){var a=n.rsp?n.rsp:n,s=a.data||{},i={ecom_login:{email:s.mail||"",phone:s.phoneNumber||""}};F.context("tongji_hm").init({data:i});var o=a.connect,l=s.connecttype;if(1==l){var r={token:s.info,bduss:s.bduss};o&&"function"==typeof o.hide&&o.hide(),$.post(e,r,function(n){var a=n.errno,s=n.data,i="function"==typeof p["handlerno"+a]?p["handlerno"+a]:p.handlerDefault;i(s)},"json"),n.returnValue=!1}else $.getJSON(c,function(n){0==n.errno?passBindPhone.bind({bindWhenStatusEq:[2,5],u:t,needRedirectWhenFailOrCancel:!0}):window.location=t});n.returnValue=!1}),l.on("render",function(){o.find(".pass-label-userName").html("手机/邮箱/用户名/糯米帐号"),o.find(".pass-text-input-userName").attr("placeholder","手机/邮箱/用户名/糯米帐号")}),l.render("j-login")})}var s=window.location.protocol+"//"+window.location.host+"/static/common/html/v3Jump.html",i=window.location.protocol+"//"+window.location.host,t=F.context("u")||i;t=t.replace(/#.*$/,"");var e=(F.context("nuomi_old_base"),"/pclogin/main/accountbind"),o=$("#j-loginArea"),l=null,r=!1,c="/pclogin/main/userinfo",d={accBaiduTitleHtml:['<div class="pass-custom-title">',"百度第三方登录","</div>"].join(""),smsConflictNo2Html:['<div class="ui-passport-sms-conflict-content">','<div class="title">{%$msg%}</div>','<div class="text {%$clsUsername%}">用户名：{%$username%}</div>','<div class="text {%$clsEmail%}">邮箱：{%$email%}</div>',"</div>",'<div class="ui-passport-sms-conflict-btns">','<a href="javascript:;" class="dialog-btn-cancel j-dialog-btn" data-event="cancel">取消</a>','<a href="javascript:;" class="dialog-btn-ok j-dialog-btn" data-event="ok">去登录</a>',"</div>"].join(""),smsConflictNo4Step1Html:['<div class="ui-passport-sms-no4">','<div class="title">{%$msg%}</div>','<div class="content clearfix">','<div class="img-wrap"><img src="{%$imgSrc%}" width="55" height="55" /></div>','<div class="userinfo-area">','<div class="info {%$clsUsername%}">用户名：{%$username%}</div>','<div class="info {%$clsEmail%}">邮箱：{%$email%}</div>',"</div>","</div>",'<div class="btns">','<a href="javascript:;" class="dialog-btn-cancel j-dialog-btn" data-event="cancel">取消</a>','<a href="javascript:;" class="dialog-btn-ok j-dialog-btn" data-event="ok">下一步</a>',"</div>",'<div class="tips">','<span class="tip-icon"></span>','<span class="tip">确定后，需要修改您冲突的百度账号用户名</span>','<a href="javascript:;" class="link j-dialog-btn" data-event="normallogin">用账号密码登录</a>',"</div>","</div>"].join(""),smsConflictNo4Step2Html:['<div class="ui-passport-sms-no4">','<div class="title">{%$msg%}</div>','<div class="content clearfix">','<div class="input-wrap">','<input type="text" class="input-text" id="j-usernameInput"/>','<span class="clear-btn j-dialog-btn" id="j-clearBtn" data-event="clearinput" style="display:none"></span>',"</div>",'<div class="err-area" id="j-errArea" style="display:none">','<span class="err-icon"></span>','<div class="err-wrap" id="j-errWrap"></div>',"</div>","</div>",'<div class="btns">','<a href="javascript:;" class="dialog-btn-cancel j-dialog-btn" data-event="cancel">取消</a>','<a href="javascript:;" class="dialog-btn-ok j-dialog-btn" data-event="ok">确定</a>',"</div>",'<div class="tips">','<span class="tip-icon"></span>','<span class="tip">今后可使用修改后的用户名登录相应账号</span>',"</div>","</div>"].join(""),smsConflictNo5Html:['<div class="ui-passport-sms-no5">','<div class="title">{%$msg%}</div>','<div class="content clearfix">','<div class="img-wrap"><img src="{%$imgSrc%}" width="55" height="55" /></div>','<div class="userinfo-area">','<div class="info {%$clsUsername%}">用户名：{%$username%}</div>','<div class="info {%$clsEmail%}">邮箱：{%$email%}</div>',"</div>","</div>",'<div class="btns">','<a href="javascript:;" class="dialog-btn-cancel j-dialog-btn" data-event="cancel">取消</a>','<a href="javascript:;" class="dialog-btn-ok j-dialog-btn" data-event="ok">确定</a>',"</div>",'<div class="tips">','<a href="javascript:;" class="link j-dialog-btn" data-event="normallogin">用账号密码登录</a>',"</div>","</div>"].join("")},m={getBaiduName:function(n){var a="";return n&&(a=n.passUname?n.passUname:n.passEmail?n.passEmail:n.passPhone?n.passPhone:""),a},getNuomiName:function(n){var a="";return n&&(a=n.email?n.email:n.phone?n.phone:""),a},refresh:function(){window.location=t},smsLoginSubmit:function(){l&&(r=!0,l.smsLoginSubmit())}},p={handlerDefault:function(){m.refresh()},handlerno0:function(n){var a=n.sendVoucher,s=m.getBaiduName(n.baiduUserInfo),i=1==a?"升级成功！10元代金券已发放到您的帐户！":"恭喜您！账号升级成功！",e=['<div class="img"></div>'];e.push('<div class="title">'+i+"</div>"),s&&(e.push('<div class="text">以后请使用以下百度账号登录</div>'),e.push('<div class="text">'+s+"</div>")),e.push('<a href="javascript:;" class="dialog-btn-close j-dialog-btn" data-event="cancel">×</a>'),new Dialog({content:e.join(""),width:410,customClassName:"ui-dialog-pass-update-success",oncancel:function(){passBindPhone.bind({bindWhenStatusEq:[2,5],u:t,needRedirectWhenFailOrCancel:!0})}}).center()},handlerno9600208:function(n){var a=n.otherBaiduUserInfo,s=m.getBaiduName(n.otherBaiduUserInfo),i=s?"您的糯米账号已与下面的百度账号绑定,请使用该帐号登录！":"您的糯米账号已与其它的百度账号绑定,请使用该帐号登录！",t=['<div class="ui-passport-tip9600210">','<div class="title">'+i+"</div>"];a.passPhone&&t.push('<div class="text">手机号：'+a.passPhone+"</div>"),a.passEmail&&t.push('<div class="text">邮箱：'+a.passEmail+"</div>"),a.passUname&&t.push('<div class="text">用户名：'+a.passUname+"</div>"),t.push("</div>");var e=500;Dialog.confirm({title:"提示",content:t.join(""),width:e,onok:function(){}})},handlerno9600210:function(n){var a=m.getNuomiName(n.nuomiUserInfo),s="您的百度帐号已经与其他的糯米账号绑定，下面的糯米账号无法登录。",i=['<div class="ui-passport-tip9600210">','<div class="title">'+s+"</div>",'<div class="text">'+a+"</div>","</div>"],t=600;Dialog.alert({title:"提示",content:i.join(""),width:t})}},u={handlerno2:function(n){var a=n.conflictUser,s=a.passUname,i=a.passEmail,t="您输入的手机号已经有对应的帐号，请使用该账号登录",e=$.formatTpl(d.smsConflictNo2Html,{msg:t,username:s,email:i,clsUsername:s?"":"hide",clsEmail:i?"":"hide"}),o=600;return new Dialog({title:"提示",content:e,width:o,customClassName:"ui-dialog-pass-sms-conflict-no2",onok:function(){m.changeToNormalLogin()}}).center(),!1},handlerno4:function(n){return u.handlerno4step1(n),!1},handlerno5:function(n){return u.handlerno5step1(n),!1},handlerno4step1:function(n){var a=n.conflictUser,s=a.pic_url,i=a.passUname,t=a.passEmail,e="检测到该手机号对应以下账号，确认登录吗？",o=$.formatTpl(d.smsConflictNo4Step1Html,{msg:e,imgSrc:s,username:i,email:t,clsUsername:i?"":"hide",clsEmail:t?"":"hide"}),l=514;new Dialog({title:"提示",content:o,width:l,customClassName:"ui-dialog-pass-sms-conflict-no4",onok:function(){u.handlerno4step2()}}).center().on("normallogin",function(){m.changeToNormalLogin()})},handlerno4step2:function(){var n=$.trim(o.find(".pass-text-input-smsPhone").val()),a=$.trim(o.find(".pass-text-input-smsVerifyCode").val()),s=!1,i=$.formatTpl(d.smsConflictNo4Step2Html,{msg:"检测到一个与输入手机号同名的百度账号，为避免冲突，将其用户名改为："}),t=514;new Dialog({title:"提示",content:i,width:t,customClassName:"ui-dialog-pass-sms-conflict-no4-step2",onok:function(){var i=this;if(s)return!1;var t={username:$.trim(this.getDom().find("#j-usernameInput").val()),phone:n,password:a},e=this.getDom().find("#j-errArea"),o=this.getDom().find("#j-errWrap");return s=!0,$.post("/pclogin/main/writepass",t,function(n){s=!1;var a=n.errno,t=(n.data,n.msg);0==a?(i.hide(),m.smsLoginSubmit()):(o.html(t),e.show())},"json"),!1},onrender:function(){var n=this.getDom().find("#j-usernameInput"),a=this.getDom().find("#j-clearBtn");return $.getJSON("/pclogin/main/recpsname",function(s){var i=s.errno,t=s.data;0==i&&t.suggName&&(n.val(t.suggName),a.show())}),n.on("keyup",function(){""==$.trim(n.val())?a.hide():a.show()}),!1}}).center().on("clearinput",function(){return this.getDom().find("#j-usernameInput").val(""),this.getDom().find("#j-clearBtn").hide(),!1})},handlerno5step1:function(n){var a=n.conflictUser,s=a.pic_url,i=a.passUname,t=a.passEmail,e=$.trim(o.find(".pass-text-input-smsPhone").val()),l=$.trim(o.find(".pass-text-input-smsVerifyCode").val()),r="检测到该手机号对应以下账号，确认登录吗？",c=$.formatTpl(d.smsConflictNo5Html,{msg:r,imgSrc:s,username:i,email:t,clsUsername:i?"":"hide",clsEmail:t?"":"hide"}),p=514,u=!1;new Dialog({title:"提示",content:c,width:p,customClassName:"ui-dialog-pass-sms-conflict-no5",onok:function(){var n=this;if(u)return!1;u=!0;var a={phone:e,password:l};return $.post("/pclogin/main/writepass",a,function(a){u=!1;var s=a.errno,i=(a.data,a.msg);n.hide(),0==s?m.smsLoginSubmit():Dialog.alert({content:'<p class="writepass-errmsg">'+i+"</p>"})},"json"),!1}}).center().on("normallogin",function(){m.changeToNormalLogin()})}};n()});