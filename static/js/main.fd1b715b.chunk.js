(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,t,i){e.exports=i.p+"static/media/cover-image.6a2b7a16.jpg"},function(e,t,i){e.exports=i(31)},,,,,function(e,t,i){},function(e,t,i){var a={"./commercial/0.jpg":12,"./commercial/1.jpg":13,"./commercial/2.jpg":14,"./commercial/3.jpg":15,"./commercial/4.jpg":16,"./food/0.jpg":17,"./food/1.jpg":18,"./food/2.jpg":19,"./food/3.jpg":20,"./food/4.jpg":21,"./landscape/0.jpg":22,"./landscape/1.jpg":23,"./landscape/2.jpg":24,"./landscape/3.jpg":25,"./landscape/4.jpg":26,"./portraits/0.jpg":27,"./portraits/1.jpg":28,"./portraits/2.jpg":29,"./portraits/3.jpg":30};function c(e){var t=n(e);return i(t)}function n(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=n,e.exports=c,c.id=11},function(e,t,i){e.exports=i.p+"static/media/0.a42cd359.jpg"},function(e,t,i){e.exports=i.p+"static/media/1.e05d88b5.jpg"},function(e,t,i){e.exports=i.p+"static/media/2.75df3018.jpg"},function(e,t,i){e.exports=i.p+"static/media/3.0a075f4d.jpg"},function(e,t,i){e.exports=i.p+"static/media/4.74c830fd.jpg"},function(e,t,i){e.exports=i.p+"static/media/0.736e9503.jpg"},function(e,t,i){e.exports=i.p+"static/media/1.6dc96543.jpg"},function(e,t,i){e.exports=i.p+"static/media/2.082ff7d9.jpg"},function(e,t,i){e.exports=i.p+"static/media/3.c7510d3a.jpg"},function(e,t,i){e.exports=i.p+"static/media/4.8c4c93ec.jpg"},function(e,t,i){e.exports=i.p+"static/media/0.c0bc02a0.jpg"},function(e,t,i){e.exports=i.p+"static/media/1.100fef3c.jpg"},function(e,t,i){e.exports=i.p+"static/media/2.0c7dce01.jpg"},function(e,t,i){e.exports=i.p+"static/media/3.ff79cea1.jpg"},function(e,t,i){e.exports=i.p+"static/media/4.9030776b.jpg"},function(e,t,i){e.exports=i.p+"static/media/0.3cb61cf2.jpg"},function(e,t,i){e.exports=i.p+"static/media/1.181f9d5c.jpg"},function(e,t,i){e.exports=i.p+"static/media/2.efb308ab.jpg"},function(e,t,i){e.exports=i.p+"static/media/3.b2912d99.jpg"},function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),n=i(3),r=i.n(n),o=(i(10),i(1));function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var m=function(e){var t=e.categories,i=void 0===t?[]:t,n=e.setCurrentCategory,r=e.currentCategory,o=e.contactSelected,m=e.setContactSelected;return Object(a.useEffect)((function(){document.title=s(r.name)}),[r]),c.a.createElement("header",{className:"flex-row px-1"},c.a.createElement("h2",null,c.a.createElement("a",{"data-testid":"link",href:"/"},c.a.createElement("span",{role:"img","aria-label":"camera"}," ","\ud83d\udcf7")," ","Oh Snap!")),c.a.createElement("nav",null,c.a.createElement("ul",{className:"flex-row"},c.a.createElement("li",{className:"mx-2"},c.a.createElement("a",{"data-testid":"about",href:"#about",onClick:function(){return m(!1)}},"About me")),c.a.createElement("li",{className:"mx-2 ".concat(o&&"navActive")},c.a.createElement("span",{onClick:function(){return m(!0)}},"Contact")),i.map((function(e){return c.a.createElement("li",{className:"mx-1 ".concat(r.name===e.name&&!o&&"navActive"),key:e.name},c.a.createElement("span",{onClick:function(){n(e),m(!1)}},s(e.name)))})))))},l=i(4),u=i.n(l);var p=function(){return c.a.createElement("section",{className:"my-5"},c.a.createElement("h1",{id:"about"},"Who am I?"),c.a.createElement("img",{src:u.a,className:"my-2",style:{width:"100%"},alt:"cover"}),c.a.createElement("div",{className:"my-2"},c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.")))},d=function(e){var t=e.category,n=Object(a.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),r=Object(o.a)(n,1)[0].filter((function(e){return e.category===t}));return c.a.createElement("div",null,c.a.createElement("div",{className:"flex-row"},r.map((function(e,a){return c.a.createElement("img",{src:i(11)("./".concat(t,"/").concat(a,".jpg")).default,alt:e.name,className:"img-thumbnail mx-1",key:e.name})}))))};var g=function(e){var t=e.currentCategory;return c.a.createElement("section",null,c.a.createElement("h1",{"data-testid":"h1tag"},s(t.name)),c.a.createElement("p",null,t.description),c.a.createElement(d,{category:t.name}))};var f=function(){var e=Object(a.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),t=Object(o.a)(e,1)[0],i=Object(a.useState)(t[0]),n=Object(o.a)(i,2),r=n[0],s=n[1];return c.a.createElement("div",null,c.a.createElement(m,{categories:t,setCurrentCategory:s,currentCategory:r}),c.a.createElement("main",null,c.a.createElement(g,{currentCategory:r}),c.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.fd1b715b.chunk.js.map