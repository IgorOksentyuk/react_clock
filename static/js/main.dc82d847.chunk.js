(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),k=(n(12),n(0)),h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:new Date,clockSuffix:""},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){var e=t.state.today.getUTCHours();t.state.clockSuffix=e>=12?"PM":"AM",t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4),t.state.clockSuffix)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.clockName,n=this.props.clockName;e!==n&&console.debug("Renamed from ".concat(e," to ").concat(n))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"Clock",children:[Object(k.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(k.jsxs)("span",{className:"Clock__time",children:[this.state.today.toUTCString().slice(-12,-4)," ",this.state.clockSuffix]})]})}}]),n}(u.a.Component);function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.setInterval((function(){t.setState({clockName:d()})}),3300),this.hideClock(),this.showClock()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("contextmenu",this.hideClock),window.removeEventListener("click",this.showClock)}},{key:"hideClock",value:function(){var t=this;window.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})}))}},{key:"showClock",value:function(){var t=this;window.addEventListener("click",(function(e){e.preventDefault(),t.setState({hasClock:!0})}))}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(k.jsx)(h,{clockName:this.state.clockName})]})}}]),n}(u.a.Component);o.a.render(Object(k.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dc82d847.chunk.js.map