(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{20640:function(t,e,n){"use strict";var o=n(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,a,i,s,c,u,l=!1;e||(e={}),n=e.debug||!1;try{if(i=o(),s=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=t,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(o){if(o.stopPropagation(),e.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[e.format]||r.default;window.clipboardData.setData(a,t)}else o.clipboardData.clearData(),o.clipboardData.setData(e.format,t);e.onCopy&&(o.preventDefault(),e.onCopy(o.clipboardData))})),document.body.appendChild(u),s.selectNodeContents(u),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),l=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,t)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),u&&document.body.removeChild(u),i()}return l}},98130:function(t,e,n){"use strict";var o=n(67294),r=n(45697);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function m(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",a=o?o[3]:"",i=o?o[2]:n,s=i.length>=e?i:(m(Array(e)).map((function(){return"0"})).join("")+i).slice(-1*e);return"".concat(r).concat(s).concat(a)}var h={daysInHours:!1,zeroPadTime:2};function v(t,e){var n=t.days,o=t.hours,r=t.minutes,a=t.seconds,i=Object.assign(Object.assign({},h),e),s=i.daysInHours,c=i.zeroPadTime,u=i.zeroPadDays,l=void 0===u?c:u,p=Math.min(2,c),f=s?y(o+24*n,c):y(o,p);return{days:s?"":y(n,l),hours:f,minutes:y(r,p),seconds:y(a,p)}}var T=function(t){c(n,t);var e=f(n);function n(){var t;return a(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);T.propTypes={count:r.number,children:r.element,onComplete:r.func};var b=function(t){c(n,t);var e=f(n);function n(t){var r;if(a(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,o.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(t){r.props.onComplete&&r.props.onComplete(t)},t.date){var i=r.calcTimeDelta();r.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return s(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,a=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,a=n.precision,i=void 0===a?0:a,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var p=s?e:e-r(),f=Math.min(20,Math.max(0,i)),m=Math.round(1e3*parseFloat(((l?p:Math.max(0,p))/1e3).toFixed(f))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var r;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=e||n.status;return t.completed&&!o.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(o.state.timeDelta),r&&r(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:v(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return(0,o.createElement)(T,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var a=this.props,i=a.className,s=a.overtime,c=a.children,u=a.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return(0,o.cloneElement)(c,{countdown:l});var p=l.formatted,f=p.days,m=p.hours,d=p.minutes,y=p.seconds;return(0,o.createElement)("span",{className:i},l.total<0?"-":"",f,f?":":"",m,":",d,":",y)}}]),n}(o.Component);b.defaultProps=Object.assign(Object.assign({},h),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),b.propTypes={date:(0,r.oneOfType)([(0,r.instanceOf)(Date),r.string,r.number]),daysInHours:r.bool,zeroPadTime:r.number,zeroPadDays:r.number,controlled:r.bool,intervalDelay:r.number,precision:r.number,autoStart:r.bool,overtime:r.bool,className:r.string,children:r.element,renderer:r.func,now:r.func,onMount:r.func,onStart:r.func,onPause:r.func,onStop:r.func,onTick:r.func,onComplete:r.func},e.ZP=b},29044:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var o=n(20640),r=n.n(o),a=n(67294);var i=function(t){void 0===t&&(t={});var e=(0,a.useState)(t),n=e[0],o=e[1];return[n,(0,a.useCallback)((function(t){o((function(e){return Object.assign({},e,t instanceof Function?t(e):t)}))}),[])]},s=function(){var t=function(){var t=(0,a.useRef)(!1),e=(0,a.useCallback)((function(){return t.current}),[]);return(0,a.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),e}(),e=i({value:void 0,error:void 0,noUserInteraction:!0}),n=e[0],o=e[1];return[n,(0,a.useCallback)((function(e){var n,a;if(t())try{if("string"!==typeof e&&"number"!==typeof e){var i=new Error("Cannot copy typeof "+typeof e+" to clipboard, must be a string");return void o({value:e,error:i,noUserInteraction:!0})}if(""===e){i=new Error("Cannot copy empty string to clipboard.");return void o({value:e,error:i,noUserInteraction:!0})}a=e.toString(),n=r()(a),o({value:a,error:void 0,noUserInteraction:n})}catch(i){o({value:a,error:i,noUserInteraction:n})}}),[])]}},11742:function(t){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],o=0;o<t.rangeCount;o++)n.push(t.getRangeAt(o));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach((function(e){t.addRange(e)})),e&&e.focus()}}}}]);