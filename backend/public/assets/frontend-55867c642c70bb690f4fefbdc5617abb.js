define("frontend/adapters/application",["ember-data","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.RESTAdapter.extend({namespace:"api/v1"})}),define("frontend/app",["ember","ember/resolver","ember/load-initializers","frontend/config/environment","exports"],function(e,t,s,n,a){"use strict";var r=e["default"],o=t["default"],i=s["default"],u=n["default"];r.MODEL_FACTORY_INJECTIONS=!0;var f=r.Application.extend({modulePrefix:u.modulePrefix,podModulePrefix:u.podModulePrefix,Resolver:o});i(f,u.modulePrefix),a["default"]=f}),define("frontend/components/f-accordion-panel",["ember-foundation/components/f-accordion-panel","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-accordion",["ember-foundation/components/f-accordion","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-alert",["ember-foundation/components/f-alert","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-arrival",["ember-foundation/components/f-arrival","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-breadcrumbs",["ember-foundation/components/f-breadcrumbs","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-button",["ember-foundation/components/f-button","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-clearing-image",["ember-foundation/components/f-clearing-image","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-clearing",["ember-foundation/components/f-clearing","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-dropdown",["ember-foundation/components/f-dropdown","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-joyride",["ember-foundation/components/f-joyride","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-magellan",["ember-foundation/components/f-magellan","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-orbit",["ember-foundation/components/f-orbit","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-pagination",["ember-foundation/components/f-pagination","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-progress-bar",["ember-foundation/components/f-progress-bar","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-reveal-modal",["ember-foundation/components/f-reveal-modal","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-slider",["ember-foundation/components/f-slider","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-stop",["ember-foundation/components/f-stop","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-switch",["ember-foundation/components/f-switch","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-switches",["ember-foundation/components/f-switches","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-tab-pane",["ember-foundation/components/f-tab-pane","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-tab-panel",["ember-foundation/components/f-tab-panel","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/components/f-tooltip",["ember-foundation/components/f-tooltip","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s}),define("frontend/controllers/login",["ember","simple-auth/mixins/login-controller-mixin","exports"],function(e,t,s){"use strict";var n=e["default"],a=t["default"];s["default"]=n.Controller.extend(a,{authenticator:"authenticator:custom",actions:{authenticate:function(){var e=this;this._super().then(null,function(t){e.set("errorMessage",t)})}}})}),define("frontend/controllers/register",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.ObjectController.extend({actions:{doRegister:function(){var e=this;this.get("content").save().then(function(){e.transitionToRoute("login")},function(){console.log("cannot register, try again!")})}}})}),define("frontend/initializers/authentication",["frontend/objects/custom-authenticator","frontend/objects/custom-authorizer","exports"],function(e,t,s){"use strict";function n(e){window.ENV=window.MyAppNameENV,e.register("authenticator:custom",a),e.register("authorizer:custom",r)}var a=e["default"],r=t["default"];s.initialize=n,s["default"]={name:"authentication",before:"simple-auth",initialize:n}}),define("frontend/objects/custom-authenticator",["simple-auth/authenticators/base","ember","exports"],function(e,t,s){"use strict";var n=e["default"],a=t["default"];s["default"]=n.extend({tokenEndpoint:"http://localhost:8080/api/v1/auth",restore:function(e){return new a.RSVP.Promise(function(t,s){a.isEmpty(e.token)?s():t(e)})},authenticate:function(e){var t=this;return new a.RSVP.Promise(function(s,n){a.$.ajax({url:t.tokenEndpoint,type:"POST",data:JSON.stringify({email:e.identification,password:e.password}),contentType:"application/json"}).then(function(e){a.run(function(){s({token:e.user.remember_token,userId:e.user.id})})},function(e){a.run(function(){n(e.responseText)})})})},invalidate:function(){var e=this;return new a.RSVP.Promise(function(t){a.$.ajax({url:e.tokenEndpoint,type:"DELETE"}).always(function(){t()})})}})}),define("frontend/objects/custom-authorizer",["simple-auth/authorizers/base","ember","exports"],function(e,t,s){"use strict";var n=e["default"],a=t["default"];s["default"]=n.extend({authorize:function(e){this.get("session.isAuthenticated")&&!a.isEmpty(this.get("session.token"))&&(e.setRequestHeader("X-Auth-Token",this.get("session.token")),e.setRequestHeader("X-User-Id",this.get("session.userId")))}})}),define("frontend/initializers/ember-foundation",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]={name:"ember-foundation",initialize:function(e,t){t.inject("component:f-breadcrumbs","router","router:main"),s.View.reopen({initFoundation:function(){s.$(document).foundation()}.on("didInsertElement")})}}}),define("frontend/initializers/export-application-global",["ember","frontend/config/environment","exports"],function(e,t,s){"use strict";function n(e,t){var s=a.String.classify(r.modulePrefix);r.exportApplicationGlobal&&(window[s]=t)}var a=e["default"],r=t["default"];s.initialize=n,s["default"]={name:"export-application-global",initialize:n}}),define("frontend/initializers/simple-auth",["simple-auth/configuration","simple-auth/setup","frontend/config/environment","exports"],function(e,t,s,n){"use strict";var a=e["default"],r=t["default"],o=s["default"];n["default"]={name:"simple-auth",initialize:function(e,t){a.load(e,o["simple-auth"]||{}),r(e,t)}}}),define("frontend/models/user",["ember-data","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Model.extend({username:s.attr(),email:s.attr(),password:s.attr(),created_at:s.attr(),updated_at:s.attr()})}),define("frontend/router",["ember","frontend/config/environment","exports"],function(e,t,s){"use strict";var n=e["default"],a=t["default"],r=n.Router.extend({location:a.locationType});r.map(function(){this.route("about"),this.resource("users",function(){this.resource("users-index",{path:"/"})}),this.route("login"),this.route("register")}),s["default"]=r}),define("frontend/routes/application",["ember","simple-auth/mixins/application-route-mixin","exports"],function(e,t,s){"use strict";var n=e["default"],a=t["default"];s["default"]=n.Route.extend(a)}),define("frontend/routes/index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Route.extend({activate:function(){}})}),define("frontend/routes/login",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Route.extend({setupController:function(e){e.set("errorMessage",null)}})}),define("frontend/routes/register",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Route.extend({model:function(){return this.store.createRecord("user")},deactivate:function(){var e=this.controllerFor("register").get("content");e.get("isDirty")&&e.rollback()}})}),define("frontend/routes/users",["ember","simple-auth/mixins/authenticated-route-mixin","exports"],function(e,t,s){"use strict";var n=e["default"],a=t["default"];s["default"]=n.Route.extend(a,{model:function(){return this.store.find("user")}})}),define("frontend/templates/about",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{},r.buffer.push("Ember and Laravel app")})}),define("frontend/templates/application",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s="";return t.buffer.push("\n					<li><a "),t.buffer.push(p(n.action.call(e,"invalidateSession",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["STRING"],data:t}))),t.buffer.push(">Logout</a></li>\n				"),s}function i(e,t){var s,a,r="";return t.buffer.push("\n					<li>"),t.buffer.push(p((s=n["link-to"]||e&&e["link-to"],a={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","STRING"],data:t},s?s.call(e,"Login","login",a):c.call(e,"link-to","Login","login",a)))),t.buffer.push("</li>\n					<li>"),t.buffer.push(p((s=n["link-to"]||e&&e["link-to"],a={hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","STRING"],data:t},s?s.call(e,"Register","register",a):c.call(e,"link-to","Register","register",a)))),t.buffer.push("</li>\n				"),r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var u,f,l,h="",p=this.escapeExpression,c=n.helperMissing,d=this;return r.buffer.push('<div class="off-canvas-wrap" data-offcanvas>\n	<div class="inner-wrap">\n		<nav id="tabBarId" class="tab-bar">\n			<section class="left-small">\n				<a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>\n			</section>\n			<section class="middle tab-bar-section">\n				<h1 class="title">Piav App</h1>\n			</section>\n			<section class="right-small">\n				<a class="right-off-canvas-toggle menu-icon" href="#"><span></span></a>\n			</section>\n		</nav>\n		<aside class="left-off-canvas-menu">\n			<ul class="off-canvas-list">\n				<li><label>Foundation</label></li>\n				<li>'),r.buffer.push(p((f=n["link-to"]||t&&t["link-to"],l={hash:{},hashTypes:{},hashContexts:{},contexts:[t,t],types:["STRING","STRING"],data:r},f?f.call(t,"Home","index",l):c.call(t,"link-to","Home","index",l)))),r.buffer.push("</li>\n				<li>"),r.buffer.push(p((f=n["link-to"]||t&&t["link-to"],l={hash:{},hashTypes:{},hashContexts:{},contexts:[t,t],types:["STRING","STRING"],data:r},f?f.call(t,"About","about",l):c.call(t,"link-to","About","about",l)))),r.buffer.push("</li>\n				<li>"),r.buffer.push(p((f=n["link-to"]||t&&t["link-to"],l={hash:{},hashTypes:{},hashContexts:{},contexts:[t,t],types:["STRING","STRING"],data:r},f?f.call(t,"Users","users-index",l):c.call(t,"link-to","Users","users-index",l)))),r.buffer.push("</li>\n				<li><label>Profile</label></li>\n				"),u=n["if"].call(t,"session.isAuthenticated",{hash:{},hashTypes:{},hashContexts:{},inverse:d.program(3,i,r),fn:d.program(1,o,r),contexts:[t],types:["ID"],data:r}),(u||0===u)&&r.buffer.push(u),r.buffer.push('\n			</ul>\n    	</aside>\n		<aside class="right-off-canvas-menu">\n			<ul class="off-canvas-list">\n				<li><label>Users</label></li>\n				<li><a href="#">...</a></li>\n			</ul>\n		</aside>\n		<section id="mainSectionId" class="main-section">\n			'),u=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(u||0===u)&&r.buffer.push(u),r.buffer.push('\n		</section>\n		<a class="exit-off-canvas"></a>\n	</div>\n</div>'),h})}),define("frontend/templates/components/f-accordion-panel",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="",u=this.escapeExpression;return r.buffer.push("<a "),r.buffer.push(u(n["bind-attr"].call(t,{hash:{href:"href"},hashTypes:{href:"ID"},hashContexts:{href:t},contexts:[],types:[],data:r}))),r.buffer.push(">"),o=n._triageMustache.call(t,"title",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("</a>\n<div "),r.buffer.push(u(n["bind-attr"].call(t,{hash:{id:"panelId"},hashTypes:{id:"ID"},hashContexts:{id:t},contexts:[],types:[],data:r}))),r.buffer.push(' class="content">\n  '),o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n</div>\n"),i})}),define("frontend/templates/components/f-accordion",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),i})}),define("frontend/templates/components/f-alert",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push('\n<a href="#" class="close">&times;</a>\n'),i})}),define("frontend/templates/components/f-arrival",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="",u=this.escapeExpression;return r.buffer.push("<a "),r.buffer.push(u(n["bind-attr"].call(t,{hash:{href:"href"},hashTypes:{href:"ID"},hashContexts:{href:t},contexts:[],types:[],data:r}))),r.buffer.push(">"),o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("</a>\n"),i})}),define("frontend/templates/components/f-breadcrumbs",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s,a,r,o="";return t.buffer.push("\n  <li "),t.buffer.push(l(n["bind-attr"].call(e,{hash:{"class":"crumb.isCurrent:current:"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:t}))),t.buffer.push(">\n    "),a=n["link-to"]||e&&e["link-to"],r={hash:{},hashTypes:{},hashContexts:{},inverse:h.noop,fn:h.program(2,i,t),contexts:[e],types:["ID"],data:t},s=a?a.call(e,"crumb.path",r):p.call(e,"link-to","crumb.path",r),(s||0===s)&&t.buffer.push(s),t.buffer.push("\n  </li>\n"),o}function i(e,t){var s,a="";return t.buffer.push("\n      "),s=n._triageMustache.call(e,"crumb.name",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("\n    "),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var u,f="",l=this.escapeExpression,h=this,p=n.helperMissing;return u=n.each.call(t,"crumb","in","breadCrumbs",{hash:{},hashTypes:{},hashContexts:{},inverse:h.noop,fn:h.program(1,o,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(u||0===u)&&r.buffer.push(u),r.buffer.push("\n"),f})}),define("frontend/templates/components/f-button",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s="";return t.buffer.push("\n  <span "),t.buffer.push(f(n["bind-attr"].call(e,{hash:{"data-dropdown":"dropdown"},hashTypes:{"data-dropdown":"ID"},hashContexts:{"data-dropdown":e},contexts:[],types:[],data:t}))),t.buffer.push("></span>\n"),s}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var i,u="",f=this.escapeExpression,l=this;return i=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\n\n"),i=n["if"].call(t,"isSplit",{hash:{},hashTypes:{},hashContexts:{},inverse:l.noop,fn:l.program(1,o,r),contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\n"),u})}),define("frontend/templates/components/f-clearing-image",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o="",i=this.escapeExpression;return r.buffer.push('<a class="th" '),r.buffer.push(i(n["bind-attr"].call(t,{hash:{href:"url"},hashTypes:{href:"ID"},hashContexts:{href:t},contexts:[],types:[],data:r}))),r.buffer.push(">\n  <img "),r.buffer.push(i(n["bind-attr"].call(t,{hash:{alt:"alt","data-caption":"caption",src:"thumbnail"},hashTypes:{alt:"ID","data-caption":"ID",src:"ID"},hashContexts:{alt:t,"data-caption":t,src:t},contexts:[],types:[],data:r}))),r.buffer.push(">\n</a>\n"),o})}),define("frontend/templates/components/f-clearing",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),i})}),define("frontend/templates/components/f-dropdown",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),i})}),define("frontend/templates/components/f-joyride",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),i})}),define("frontend/templates/components/f-magellan",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return r.buffer.push('<dl class="sub-nav">\n  '),o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n</dl>\n"),i})}),define("frontend/templates/components/f-orbit",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s,a="";return t.buffer.push("\n  <li>\n    <img "),t.buffer.push(f(n["bind-attr"].call(e,{hash:{alt:"slide.imageAlt",src:"slide.imageUrl"},hashTypes:{alt:"ID",src:"ID"},hashContexts:{alt:e,src:e},contexts:[],types:[],data:t}))),t.buffer.push('>\n    <div class="orbit-caption">'),s=n._triageMustache.call(e,"slide.caption",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</div>\n  </li>\n"),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var i,u="",f=this.escapeExpression,l=this;return i=n.each.call(t,"slide","in","slides",{hash:{},hashTypes:{},hashContexts:{},inverse:l.noop,fn:l.program(1,o,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\n"),u})}),define("frontend/templates/components/f-pagination",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s,a="";return t.buffer.push("\n  <li "),t.buffer.push(f(n["bind-attr"].call(e,{hash:{"class":"page.current:current"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:t}))),t.buffer.push(">\n    <a "),t.buffer.push(f(n.action.call(e,"changePage","page.number",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:t}))),t.buffer.push(">"),s=n._triageMustache.call(e,"page.number",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</a>\n  </li>\n"),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var i,u="",f=this.escapeExpression,l=this;return r.buffer.push("<li "),r.buffer.push(f(n["bind-attr"].call(t,{hash:{"aria-disabled":"onFirstPage","class":"arrow onFirstPage:unavailable"},hashTypes:{"aria-disabled":"ID","class":"STRING"},hashContexts:{"aria-disabled":t,"class":t},contexts:[],types:[],data:r}))),r.buffer.push(">\n  <a "),r.buffer.push(f(n.action.call(t,"previousPage",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:r}))),r.buffer.push(">&laquo;</a>\n</li>\n\n"),i=n.each.call(t,"page","in","pages",{hash:{},hashTypes:{},hashContexts:{},inverse:l.noop,fn:l.program(1,o,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\n\n<li "),r.buffer.push(f(n["bind-attr"].call(t,{hash:{"aria-disabled":"onLastPage","class":"arrow onLastPage:unavailable"},hashTypes:{"aria-disabled":"ID","class":"STRING"},hashContexts:{"aria-disabled":t,"class":t},contexts:[],types:[],data:r}))),r.buffer.push(">\n  <a "),r.buffer.push(f(n.action.call(t,"nextPage",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:r}))),r.buffer.push(">&raquo;</a>\n</li>\n"),u})}),define("frontend/templates/components/f-progress-bar",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o="",i=this.escapeExpression;return r.buffer.push("<span "),r.buffer.push(i(n["bind-attr"].call(t,{hash:{style:"meterStyle"},hashTypes:{style:"ID"},hashContexts:{style:t},contexts:[],types:[],data:r}))),r.buffer.push(' class="meter"></span>\n'),o})}),define("frontend/templates/components/f-reveal-modal",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push('\n\n<a class="close-reveal-modal">&#215;</a>\n'),i})}),define("frontend/templates/components/f-slider",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{},r.buffer.push('<span class="range-slider-handle"></span>\n<span class="range-slider-active-segment"></span>\n<input type="hidden">\n')})}),define("frontend/templates/components/f-stop",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),i})}),define("frontend/templates/components/f-switch",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i,u,f="",l=n.helperMissing,h=this.escapeExpression;return r.buffer.push(h((i=n.input||t&&t.input,u={hash:{checked:"checked",id:"inputId",name:"name",type:"type"},hashTypes:{checked:"ID",id:"ID",name:"ID",type:"ID"},hashContexts:{checked:t,id:t,name:t,type:t},contexts:[],types:[],data:r},i?i.call(t,u):l.call(t,"input",u)))),r.buffer.push("\n<label "),r.buffer.push(h(n["bind-attr"].call(t,{hash:{"for":"inputId"},hashTypes:{"for":"ID"},hashContexts:{"for":t},contexts:[],types:[],data:r}))),r.buffer.push(">"),o=n._triageMustache.call(t,"label",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("</label>\n\n<span></span>\n"),f})}),define("frontend/templates/components/f-switches",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s,a="";return t.buffer.push("\n  <input "),t.buffer.push(f(n["bind-attr"].call(e,{hash:{disabled:"option.disabled",id:"option.id",name:"view.name",readonly:"option.readonly",type:"view.type",value:"option.value"},hashTypes:{disabled:"ID",id:"ID",name:"ID",readonly:"ID",type:"ID",value:"ID"},hashContexts:{disabled:e,id:e,name:e,readonly:e,type:e,value:e},contexts:[],types:[],data:t}))),t.buffer.push(" />\n  <label "),t.buffer.push(f(n["bind-attr"].call(e,{hash:{"for":"option.id"},hashTypes:{"for":"ID"},hashContexts:{"for":e},contexts:[],types:[],data:t}))),t.buffer.push(">"),s=n._triageMustache.call(e,"option.label",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</label>\n"),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var i,u="",f=this.escapeExpression,l=this;return i=n.each.call(t,"option","in","options",{hash:{},hashTypes:{},hashContexts:{},inverse:l.noop,fn:l.program(1,o,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\n\n<span></span>\n"),u})}),define("frontend/templates/components/f-tab-pane",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),i})}),define("frontend/templates/components/f-tab-panel",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s,a="";return t.buffer.push("\n    <dd><a "),t.buffer.push(f(n["bind-attr"].call(e,{hash:{href:"tab.href"},hashTypes:{href:"ID"},hashContexts:{href:e},contexts:[],types:[],data:t}))),t.buffer.push(">"),s=n._triageMustache.call(e,"tab.title",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push("</a></dd>\n  "),a}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var i,u="",f=this.escapeExpression,l=this;return r.buffer.push('<dl class="tabs" data-tab>\n  '),i=n.each.call(t,"tab","in","tabs",{hash:{},hashTypes:{},hashContexts:{},inverse:l.noop,fn:l.program(1,o,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push('\n</dl>\n\n<div class="tabs-content">\n  '),i=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\n</div>\n"),u})}),define("frontend/templates/components/f-tooltip",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i="";return o=n._triageMustache.call(t,"yield",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\n"),i})}),define("frontend/templates/index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{},r.buffer.push("Hello World")})}),define("frontend/templates/login",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i,u="",f=n.helperMissing,l=this.escapeExpression;return r.buffer.push('<div class="panel">\r\n	<h3>Login</h3>\r\n	'),r.buffer.push(l((o=n.input||t&&t.input,i={hash:{type:"text",value:"identification",placeholder:"email..."},hashTypes:{type:"STRING",value:"ID",placeholder:"STRING"},hashContexts:{type:t,value:t,placeholder:t},contexts:[],types:[],data:r},o?o.call(t,i):f.call(t,"input",i)))),r.buffer.push(" <br>\r\n	"),r.buffer.push(l((o=n.input||t&&t.input,i={hash:{type:"password",value:"password",placeholder:"password..."},hashTypes:{type:"STRING",value:"ID",placeholder:"STRING"},hashContexts:{type:t,value:t,placeholder:t},contexts:[],types:[],data:r},o?o.call(t,i):f.call(t,"input",i)))),r.buffer.push(" <br>\r\n	<button "),r.buffer.push(l(n.action.call(t,"authenticate",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:r}))),r.buffer.push(">login</button>\r\n</div>"),u})}),define("frontend/templates/register",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o,i,u="",f=n.helperMissing,l=this.escapeExpression;return r.buffer.push('<div class="panel">\r\n	<h3>Register new user</h3>\r\n	'),r.buffer.push(l((o=n.input||t&&t.input,i={hash:{type:"text",value:"username",placeholder:"login name..."},hashTypes:{type:"STRING",value:"ID",placeholder:"STRING"},hashContexts:{type:t,value:t,placeholder:t},contexts:[],types:[],data:r},o?o.call(t,i):f.call(t,"input",i)))),r.buffer.push("<br>\r\n	"),r.buffer.push(l((o=n.input||t&&t.input,i={hash:{type:"email",value:"email",placeholder:"email..."},hashTypes:{type:"STRING",value:"ID",placeholder:"STRING"},hashContexts:{type:t,value:t,placeholder:t},contexts:[],types:[],data:r},o?o.call(t,i):f.call(t,"input",i)))),r.buffer.push("<br>\r\n	"),r.buffer.push(l((o=n.input||t&&t.input,i={hash:{type:"password",value:"password",placeholder:"password..."},hashTypes:{type:"STRING",value:"ID",placeholder:"STRING"},hashContexts:{type:t,value:t,placeholder:t},contexts:[],types:[],data:r},o?o.call(t,i):f.call(t,"input",i)))),r.buffer.push("<br>\r\n	<button "),r.buffer.push(l(n.action.call(t,"doRegister",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:r}))),r.buffer.push(">Register</button>\r\n</div>"),u})}),define("frontend/templates/users-index",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var o="";return o})}),define("frontend/templates/users",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.Handlebars.template(function(e,t,n,a,r){function o(e,t){var s,a="";return t.buffer.push("\r\n	"),s=n._triageMustache.call(e,"username",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push(" - "),s=n._triageMustache.call(e,"email",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:t}),(s||0===s)&&t.buffer.push(s),t.buffer.push(" <br>\r\n"),a
}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,s.Handlebars.helpers),r=r||{};var i,u="",f=this;return r.buffer.push("users\r\n<br>\r\n"),i=n.each.call(t,"content",{hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(1,o,r),contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\r\n<br>\r\n"),i=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),u})}),define("frontend/views/application",["ember","exports"],function(e,t){"use strict";var s=e["default"];t["default"]=s.View.extend({didInsertElement:function(){$(window).resize(function(){var e=$(window).height(),t=$("#tabBarId").height();$("#mainSectionId").height(e-t)}),$(window).trigger("resize")}})}),define("frontend/config/environment",["ember"],function(e){var t="frontend";try{var s=t+"/config/environment",n=e["default"].$('meta[name="'+s+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}catch(r){throw new Error('Could not read config from meta tag with name "'+s+'".')}}),runningTests?require("frontend/tests/test-helper"):require("frontend/app")["default"].create({});