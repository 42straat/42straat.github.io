angular.module("/mr/session",[]).config(["$httpProvider","$provide",function(a,b){"use strict";function c(a){var b=document.createElement("a");return b.href=a,b}function d(a){var b=c(a);return b.href}function e(a,b){"headers"in a==!1&&(a.headers={}),a.headers.Authorization=["Bearer",b].join(" ")}function f(a){Object.keys(a).filter(function(a){return"$"!==a[0]}).forEach(function(b){delete a[b]})}function g(a,b){return angular.extend(a,b),a}function h(a){return 0===a.indexOf(o)}function i(a){return 0===a.indexOf(q)}function j(a){return a===l.validateRequest(p).url}function k(a){return l.authorized&&"GET"===a.method&&j(a.url)}var l,m,n="define token url plz",o="define API_URL",p="define url that returs data about user",q="setApiPlaceholder",r="setPublicApiPlaceholder";b.factory("User",["Session",function(){return m}]),b.factory("Session",["$rootScope","$http","$httpBackend",function(a,b,c){return l=a.Session=a.$new(),m=a.me=a.$new(),l.authorized=localStorage.token&&localStorage.username&&!0,l.updateUserInfo=function(){return console.log("Update use info"),b.get(p).then(function(a){return g(m,a.data)})},l.$watch("authorized",function(a){a||(localStorage.removeItem("token"),localStorage.removeItem("username")),l.User={username:localStorage.username},a?l.updateUserInfo():f(m)}),l.setConfig=function(a){o=d(a.apiUrl),n=o+"/"+a.tokenUrl,p="userDataUrl"in a?d(a.userDataUrl):o,q=d(a.apiPlaceholder),r=d(a.publicApiPlaceholder),c.whenPOST(n).respond({id:"1",access_token:"222"}),c.whenGET(/\.html$/).passThrough()},l.validateRequest=function(a,b){var c,f=b&&b.token||localStorage.token,g=b&&b.username||localStorage.username;return"string"==typeof a&&(a={url:a}),/^Bearer:/.test(a.url)&&(a.url=a.url.replace(/^Bearer:/,""),e(a,f)),a.url=a.url.replace(/\$username\$/,g),c=d(a.url),i(c)?(a.url=c.replace(q,o),e(a,f)):0===c.indexOf(r)&&(a.url=c.replace(r,o)),a},l.logout=function(){console.log("See you soon"),l.authorized=!1},l}]),a.interceptors.push(["$q",function(a){return{request:function(a){return l.validateRequest(a)},responseError:function(b){var c=b.config.url;return 401===b.status&&(l.authorized=!1),b.isApiCall=h(c),a.reject(b)},response:function(a){var b=a.config;return n===b.url&&(localStorage.username=a.data.id,localStorage.token=a.data.access_token,l.authorized=!0),k(b)&&g(m,a.data),a}}}])}]),angular.module("/mr/form",[]).directive("mrForm",["/mr/form/factory","$location",function(a,b){"use strict";var c="mr-form";return{restrict:"A",scope:!0,link:function(d,e,f){var g=d.mrForm=window.mrForm=a.create(),h=f.mrFormRedirect;console.log(d);var i=g.$watch("state",function(a,b){console.log("State",a),e.removeClass("mr-"+b),e.addClass("mr-"+a)});e.addClass(c),e.bind("submit",function(a){a.preventDefault(),g.action=f.action;var c=(d.submit?d:g).submit(d.$eval(f.mrForm),g);h&&c.then(function(){b.path(h)})}),d.$on("$destroy",function(){i(),e.unbind("submit"),g.$destroy()}),e.find("input[ng-model]:not([type=radio]):not([type=checkbox]), select[ng-model], textarea[ng-model]").each(function(a,b){angular.element(b).val()&&angular.element(b).controller("ngModel").$setViewValue(angular.element(b).val())})}}}]),angular.module("/mr/form").factory("/mr/form/factory",["$http","/mr/form/state","$rootScope",function(a,b,c){"use strict";function d(d){var e=c.$new();return e.action=d,e.FormState=b,e.state=b.NEW,e.error={detail:"Something went wrong"},e.beforeSubmit=function(){e.error.severity="",e.error.detail="",e.state=b.SUBMIT},e.submit=function(b){return console.log("Form.submit:",b),e.beforeSubmit(),a.post(e.action,b).then(e.onSuccess,e.onError)},e.onError=function(a){throw e.error.severity=a.data.severity,e.error.detail=a.data.detail,e.state=b.ERROR,a},e.onSuccess=function(a){return e.state=b.DONE,e.success=angular.copy(a.data),a},e}return{create:d}}]),angular.module("/mr/form").value("/mr/form/state",{NEW:"new",DIRTY:"dirty",SUBMIT:"submit",DONE:"done",ERROR:"error"});