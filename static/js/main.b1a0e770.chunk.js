(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),r=a.n(o),i=(a(15),a(4)),l=a(5),s=a(7),u=a(6),m=a(1),d=a(8),p=(a(16),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target.value;e.setState({size:a});var n,c=e.state.originalData;return n=""===a?e.state.originalData:c.filter(function(e){return e.size.includes(a)}),e.setState({items:n})},e.state={items:[],originalData:[]},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3").then(function(e){return e.json()}).then(function(t){e.setState({items:t,originalData:t})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this.state.items;return c.a.createElement("div",{className:"page"},c.a.createElement("header",{className:"page__header"},c.a.createElement("h1",null,"Women's tops"),c.a.createElement("select",{onChange:this.handleChange},c.a.createElement("option",{value:""},"Filter by size"),c.a.createElement("option",{value:"XS"},"XS"),c.a.createElement("option",{value:"S"},"S"),c.a.createElement("option",{value:"M"},"M"),c.a.createElement("option",{value:"L"},"L"),c.a.createElement("option",{value:"XL"},"XL"))),c.a.createElement("div",{className:"container"},e.map(function(e,t){return c.a.createElement(v,{key:t,product:e})})))}}]),t}(c.a.Component)),v=function(e){return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__image"},c.a.createElement("img",{src:"./images/".concat(e.product.productImage),alt:e.product.productImage})),c.a.createElement("div",{className:"product__type"},e.product.isSale&&c.a.createElement("div",{className:"button button-red",type:"button"},"Sale"),e.product.isExclusive&&c.a.createElement("div",{className:"button button-green",type:"button"},"Exclusive")),c.a.createElement("div",{className:"product__footer"},c.a.createElement("div",{className:"product__name"},e.product.productName),c.a.createElement("div",{className:"product__price"},e.product.price)))},h=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b1a0e770.chunk.js.map