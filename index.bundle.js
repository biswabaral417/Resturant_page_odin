(()=>{"use strict";var e={122:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(537),i=a.n(n),o=a(645),s=a.n(o),r=a(667),m=a.n(r),d=new URL(a(928),a.b),c=s()(i()),p=m()(d);c.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border:1px solid red; */\n    /* height: 20px; */\n    /* width:100%; */\n}\n\n\n.dflex {\n    display: flex;\n    flex-wrap: wrap;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n.linkbutton {\n    /* border: red; */\n    all: unset;\n    background-color: #d1d1d1;\n    padding: 10px 15px;\n    cursor: pointer;\n    width: 80px;\n    text-align: center;\n    border-bottom: 1px solid white;\n    border-right: 1px solid white;\n}\n\n.dnone {\n    display: none;\n}\n\n.linkbutton:hover {\n    background-color: #f1f1f1 !important;\n}\n\n#ddbtn {\n    all: unset;\n    background-color: #d1d1d1;\n    background-repeat: no-repeat !important;\n    background-size: contain !important;\n    position: absolute;\n    top: 0px;\n    left: 10px;\n    height: 40px;\n    width: 40px !important;\n    cursor: pointer;\n}\n\n#navbar {\n    position: fixed;\n    width: 100%;\n    height: 40px;\n    background-color: #d1d1d1;\n\n}\n\n.component {\n    padding: 40px 10%;\n}\n\n#homecomp {\n    background-image: url(${p});\n    /* height: 600px; */\n}\n\n#titlediv {\n    margin-top: 50px;\n    text-align: center;\n    color: white;\n    border-radius: 10px;\n    border: 50px solid rgba(247, 243, 243, 0.388);\n    background: #000;\n}\n\n#title {\n    padding: 50px 50px;\n}\n.services{\n    padding:50px 10%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: center;\n}\n.itemimg{\n    height: 300px;\n    width: 250px;\n}`,"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,0BAA0B;IAC1B,kBAAkB;IAClB,gBAAgB;AACpB;;;AAGA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,yBAAyB;IACzB,uCAAuC;IACvC,mCAAmC;IACnC,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,yBAAyB;;AAE7B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yDAA4C;IAC5C,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,6CAA6C;IAC7C,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,YAAY;AAChB",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border:1px solid red; */\n    /* height: 20px; */\n    /* width:100%; */\n}\n\n\n.dflex {\n    display: flex;\n    flex-wrap: wrap;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n.linkbutton {\n    /* border: red; */\n    all: unset;\n    background-color: #d1d1d1;\n    padding: 10px 15px;\n    cursor: pointer;\n    width: 80px;\n    text-align: center;\n    border-bottom: 1px solid white;\n    border-right: 1px solid white;\n}\n\n.dnone {\n    display: none;\n}\n\n.linkbutton:hover {\n    background-color: #f1f1f1 !important;\n}\n\n#ddbtn {\n    all: unset;\n    background-color: #d1d1d1;\n    background-repeat: no-repeat !important;\n    background-size: contain !important;\n    position: absolute;\n    top: 0px;\n    left: 10px;\n    height: 40px;\n    width: 40px !important;\n    cursor: pointer;\n}\n\n#navbar {\n    position: fixed;\n    width: 100%;\n    height: 40px;\n    background-color: #d1d1d1;\n\n}\n\n.component {\n    padding: 40px 10%;\n}\n\n#homecomp {\n    background-image: url(../images/foodsbg.jpg);\n    /* height: 600px; */\n}\n\n#titlediv {\n    margin-top: 50px;\n    text-align: center;\n    color: white;\n    border-radius: 10px;\n    border: 50px solid rgba(247, 243, 243, 0.388);\n    background: #000;\n}\n\n#title {\n    padding: 50px 50px;\n}\n.services{\n    padding:50px 10%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: center;\n}\n.itemimg{\n    height: 300px;\n    width: 250px;\n}"],sourceRoot:""}]);const l=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var r=0;r<this.length;r++){var m=this[r][0];null!=m&&(s[m]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),a&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=a):c[2]=a),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),o="/*# ".concat(i," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var o={},s=[],r=0;r<e.length;r++){var m=e[r],d=n.base?m[0]+n.base:m[0],c=o[d]||0,p="".concat(d," ").concat(c);o[d]=c+1;var l=a(p),u={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(-1!==l)t[l].references++,t[l].updater(u);else{var g=i(u,n);n.byIndex=r,t.splice(r,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function i(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var r=a(o[s]);t[r].references--}for(var m=n(e,i),d=0;d<o.length;d++){var c=a(o[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=m}}},569:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,i&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},928:(e,t,a)=>{e.exports=a.p+"638404df5bf9f07a6228.jpg"}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&!e;)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),a.b=document.baseURI||self.location.href,a.nc=void 0,(()=>{const e=e=>{const t=document.getElementById("content");for(;t.children[1];)t.removeChild(t.children[1]);e()},t=({prop:e,parentId:t,text:a,func:n})=>{const i=document.createElement(e.trim().match(/^\s*(\w+)?/)[0]);e.match(/\.\w+/g)&&e.match(/\.\w+/g).forEach((e=>{i.classList.add(e.substring(1))})),i.id=e.match(/\#\w+/g)[0].substring(1),e.match(/style=\s*'([^']*)'/)&&(i.style=e.match(/style=\s*'([^']*)'/)[1]),e.match(/src=\s*'([^']*)'/)&&e.match(/src=\s*'([^']*)'/)&&i.setAttribute("src",e.match(/src=\s*'([^']*)'/)[1]),e.match(/href=\s*'([^']*)'/)&&i.setAttribute("href",e.match(/href=\s*'([^']*)'/)[1]),t&&document.getElementById(t).appendChild(i),n&&i.setAttribute("onclick",n),a&&(i.textContent=a)},n=a.p+"1320df01975afb9d39dd.svg",i=()=>{"none"==document.getElementById("rnavul").style.display?document.getElementById("rnavul").style.display="flex":document.getElementById("rnavul").style.display="none"},o=JSON.parse('[{"itemName":"butterScotch","itemPrice":"80RS","itemImgLoc":"/assets/images/foodimages/icecream/buttorScotch.jpg","rSeasons":"Barsa"},{"itemName":"vanilla","itemPrice":"60RS","itemImgLoc":"../assets/images/foodimages/icecream/vanillaIce.jpeg","rSeasons":"Barsa"},{"itemName":"coke","itemPrice":"85RS","itemImgLoc":"../assets/images/foodimages/colddrinks/Coke-500ml.jpg","rSeasons":"Barsa"},{"itemName":"Gorkha-strong Extra-Strong","itemPrice":"300RS","itemImgLoc":"../assets/images/foodimages/colddrinks/Gorkha-Strong.png","rSeasons":"Barsa"},{"itemName":"chickenCaesarSalad","itemPrice":"620RS","itemImgLoc":"../assets/images/foodimages/ortherfoods/chickenCaesarSalad.jpg","rSeasons":"Barsa"},{"itemName":"seaFoodsalad","itemPrice":"550RS","itemImgLoc":"../assets/images/foodimages/ortherfoods/seaFoodsalad.jpeg","rSeasons":"Barsa"},{"itemName":"Strawberry Salad","itemPrice":"450RS","itemImgLoc":"../assets/images/foodimages/salads/StrawberrySalad.jpeg","rSeasons":"Basanta"},{"itemName":"Grilled Asparagus","itemPrice":"500RS","itemImgLoc":"../assets/images/foodimages/vegetables/GrilledAsparagus.jpeg","rSeasons":"Basanta"},{"itemName":"Spinach Quiche","itemPrice":"400RS","itemImgLoc":"../assets/images/foodimages/breakfast/SpinachQuiche.jpeg","rSeasons":"Basanta"},{"itemName":"Lemonade","itemPrice":"200RS","itemImgLoc":"../assets/images/foodimages/drinks/Lemonade.jpeg","rSeasons":"Basanta"},{"itemName":"Grilled Lamb Chops","itemPrice":"800RS","itemImgLoc":"../assets/images/foodimages/meat/GrilledLambChops.jpeg","rSeasons":"Basanta"},{"itemName":"Mixed Berry Smoothie","itemPrice":"350RS","itemImgLoc":"../assets/images/foodimages/drinks/MixedBerrySmoothie.jpeg","rSeasons":"Basanta"},{"itemName":"Chicken Caesar Salad","itemPrice":"550RS","itemImgLoc":"../assets/images/foodimages/salads/ChickenCaesarSalad.jpeg","rSeasons":"Basanta"},{"itemName":"Vegetable Stir-Fry","itemPrice":"400RS","itemImgLoc":"../assets/images/foodimages/vegetables/VegetableStirFry.jpeg","rSeasons":"Basanta"},{"itemName":"Watermelon Salad","itemPrice":"300RS","itemImgLoc":"../assets/images/foodimages/salads/WatermelonSalad.jpeg","rSeasons":"Grishma"},{"itemName":"Iced Coffee","itemPrice":"250RS","itemImgLoc":"../assets/images/foodimages/drinks/IcedCoffee.jpeg","rSeasons":"Grishma"},{"itemName":"Grilled Corn on the Cob","itemPrice":"180RS","itemImgLoc":"../assets/images/foodimages/vegetables/GrilledCornOnTheCob.jpeg","rSeasons":"Grishma"},{"itemName":"Tropical Fruit Smoothie","itemPrice":"350RS","itemImgLoc":"../assets/images/foodimages/drinks/TropicalFruitSmoothie.jpeg","rSeasons":"Grishma"},{"itemName":"Mango Salsa","itemPrice":"280RS","itemImgLoc":"../assets/images/foodimages/sauces/MangoSalsa.jpeg","rSeasons":"Grishma"},{"itemName":"Grilled Chicken Skewers","itemPrice":"600RS","itemImgLoc":"../assets/images/foodimages/meat/GrilledChickenSkewers.jpeg","rSeasons":"Grishma"},{"itemName":"Caprese Salad","itemPrice":"420RS","itemImgLoc":"../assets/images/foodimages/salads/CapreseSalad.jpeg","rSeasons":"Grishma"},{"itemName":"Cucumber Gazpacho","itemPrice":"350RS","itemImgLoc":"../assets/images/foodimages/soups/CucumberGazpacho.jpeg","rSeasons":"Grishma"},{"itemName":"Pakoras","itemPrice":"220RS","itemImgLoc":"../assets/images/foodimages/snacks/Pakoras.jpeg","rSeasons":"Barsa"},{"itemName":"Masala Chai","itemPrice":"150RS","itemImgLoc":"../assets/images/foodimages/drinks/MasalaChai.jpeg","rSeasons":"Barsa"},{"itemName":"Vegetable Samosa","itemPrice":"180RS","itemImgLoc":"../assets/images/foodimages/snacks/VegetableSamosa.jpeg","rSeasons":"Barsa"},{"itemName":"Bhutta (Roasted Corn)","itemPrice":"100RS","itemImgLoc":"../assets/images/foodimages/snacks/Bhutta.jpeg","rSeasons":"Barsa"},{"itemName":"Fried Momos","itemPrice":"280RS","itemImgLoc":"../assets/images/foodimages/snacks/FriedMomos.jpeg","rSeasons":"Barsa"},{"itemName":"Corn Soup","itemPrice":"280RS","itemImgLoc":"../assets/images/foodimages/soups/CornSoup.jpeg","rSeasons":"Barsa"},{"itemName":"Aloo Chop","itemPrice":"220RS","itemImgLoc":"../assets/images/foodimages/snacks/AlooChop.jpeg","rSeasons":"Barsa"},{"itemName":"Veggie Pakoras","itemPrice":"220RS","itemImgLoc":"../assets/images/foodimages/snacks/VeggiePakoras.jpeg","rSeasons":"Barsa"},{"itemName":"Pumpkin Soup","itemPrice":"320RS","itemImgLoc":"../assets/images/foodimages/soups/PumpkinSoup.jpeg","rSeasons":"Sharad"},{"itemName":"Apple Pie","itemPrice":"500RS","itemImgLoc":"../assets/images/foodimages/desserts/ApplePie.jpeg","rSeasons":"Sharad"},{"itemName":"Pomegranate Salad","itemPrice":"350RS","itemImgLoc":"../assets/images/foodimages/salads/PomegranateSalad.jpeg","rSeasons":"Sharad"},{"itemName":"Butternut Squash Risotto","itemPrice":"550RS","itemImgLoc":"../assets/images/foodimages/rice/ButternutSquashRisotto.jpeg","rSeasons":"Sharad"},{"itemName":"Pear Crisp","itemPrice":"450RS","itemImgLoc":"../assets/images/foodimages/desserts/PearCrisp.jpeg","rSeasons":"Sharad"},{"itemName":"Roasted Chicken with Veggies","itemPrice":"650RS","itemImgLoc":"../assets/images/foodimages/meat/RoastedChickenWithVeggies.jpeg","rSeasons":"Sharad"},{"itemName":"Caramelized Onion Tart","itemPrice":"420RS","itemImgLoc":"../assets/images/foodimages/pastries/CaramelizedOnionTart.jpeg","rSeasons":"Sharad"},{"itemName":"Mushroom Risotto","itemPrice":"500RS","itemImgLoc":"../assets/images/foodimages/rice/MushroomRisotto.jpeg","rSeasons":"Sharad"},{"itemName":"Hot Chocolate","itemPrice":"250RS","itemImgLoc":"../assets/images/foodimages/drinks/HotChocolate.jpeg","rSeasons":"Hemanta"},{"itemName":"Gajar ka Halwa","itemPrice":"350RS","itemImgLoc":"../assets/images/foodimages/desserts/GajarKaHalwa.jpeg","rSeasons":"Hemanta"},{"itemName":"Chicken Pot Pie","itemPrice":"550RS","itemImgLoc":"../assets/images/foodimages/pastries/ChickenPotPie.jpeg","rSeasons":"Hemanta"},{"itemName":"Roasted Chestnuts","itemPrice":"180RS","itemImgLoc":"../assets/images/foodimages/snacks/RoastedChestnuts.jpeg","rSeasons":"Hemanta"},{"itemName":"Lamb Stew","itemPrice":"700RS","itemImgLoc":"../assets/images/foodimages/soups/LambStew.jpeg","rSeasons":"Hemanta"},{"itemName":"Eggnog","itemPrice":"300RS","itemImgLoc":"../assets/images/foodimages/drinks/Eggnog.jpeg","rSeasons":"Hemanta"},{"itemName":"Chocolate Fondue","itemPrice":"450RS","itemImgLoc":"../assets/images/foodimages/desserts/ChocolateFondue.jpeg","rSeasons":"Hemanta"},{"itemName":"Cabbage Roll Soup","itemPrice":"380RS","itemImgLoc":"../assets/images/foodimages/soups/CabbageRollSoup.jpeg","rSeasons":"Hemanta"},{"itemName":"Vegetable Hot Pot","itemPrice":"450RS","itemImgLoc":"../assets/images/foodimages/soups/VegetableHotPot.jpeg","rSeasons":"Shishir"},{"itemName":"Winter Salad with Cranberries","itemPrice":"380RS","itemImgLoc":"../assets/images/foodimages/salads/WinterSaladWithCranberries.jpeg","rSeasons":"Shishir"},{"itemName":"Cauliflower Soup","itemPrice":"320RS","itemImgLoc":"../assets/images/foodimages/soups/CauliflowerSoup.jpeg","rSeasons":"Shishir"},{"itemName":"Chocolate Lava Cake","itemPrice":"500RS","itemImgLoc":"../assets/images/foodimages/desserts/ChocolateLavaCake.jpeg","rSeasons":"Shishir"},{"itemName":"Steamed Dumplings (Momo)","itemPrice":"280RS","itemImgLoc":"../assets/images/foodimages/snacks/SteamedDumplingsMomo.jpeg","rSeasons":"Shishir"},{"itemName":"Tomato Basil Bruschetta","itemPrice":"280RS","itemImgLoc":"../assets/images/foodimages/snacks/TomatoBasilBruschetta.jpeg","rSeasons":"Shishir"},{"itemName":"Creamy Potato Leek Soup","itemPrice":"350RS","itemImgLoc":"../assets/images/foodimages/soups/CreamyPotatoLeekSoup.jpeg","rSeasons":"Shishir"},{"itemName":"Roasted Turkey","itemPrice":"900RS","itemImgLoc":"../assets/images/foodimages/meat/RoastedTurkey.jpeg","rSeasons":"Shishir"}]'),s=()=>{t({prop:"div.component#homecomp style:'padding-top:40px'",parentId:"content"}),t({prop:"div.homebanner#titlediv",parentId:"homecomp"}),t({prop:"h1.homebanner#title",parentId:"titlediv",text:"the super resturant"}),t({prop:"p#paragraph style='padding:50px'",parentId:"titlediv",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis et? Soluta cumque illo provident odio nam repellendus autem reprehenderit, quibusdam animi voluptate nihil pariatur corrupti magni rem ullam ducimus, aliquam beatae alias optio, sequi officia? Magni repellendus reiciendis beatae inventore omnis laborum. Aliquam blanditiis ducimus numquam odio saepe, facilis minus officia tempore voluptate, ipsum nesciunt laboriosam expedita mollitia perferendis reprehenderit eaque veniam. Laborum vitae, ipsum et amet dolorem quam ducimus dignissimos ad ullam nostrum blanditiis animi? Ex, ipsum a voluptatum autem odio id mollitia iusto ipsa! Iste, tenetur facere eaque, iusto earum dolorum accusantium laborum libero incidunt magnam repellendus quos ipsum  ve debitis sequi repellendus, repellat doloribus reiciendis porro! Doloremque voluptatem odio animi expedita ducimus repellendus fugit nihil? Sequi, rem non fugit facilis tempore iste temporibus nihil commodi optio odioue vero veniam dolorum minima molestias maiores possimus soluta at commodi cumque et tempora, illum hic pariatur est laboriosam eaque sed. Odio accusamus non, ipsum cumque nihil error magni iste incidunt culpa, inventore unde aliquid blanditiis pariatur autem ex debitis, ea repellat consequuntur ipsa numquam et dicta repellendus id odit. Neque libero dolores recusandae temporibus officiis eos, nihil enim repellat incidunt cum natus quaerat cumque error reiciendis, ullam porro consequuntur rem voluptate sapiente at hic eligendi optio. Quis totam blanditiis dignissimos ad quo asperiores numquam exercitationem magnam possimus vitae nobis vel eum a placeat laborum quas, necessitatibus perferendis itaque. Sequi atque voluptate eum incidunt deleniti iure!"})},r={services:()=>{t({prop:"div.services#services.component",parentId:"content"}),o.forEach((async(e,a)=>{t({prop:`div#food${a}.foodDiv`,parentId:"services"}),t({prop:`img#itemimg${a}.itemimg src='${e.itemImgLoc}'`,parentId:`food${a}`}),document.getElementById(`itemimg${a}`).alt="not fount",t({prop:`p#itemname${a}.foodname`,parentId:`food${a}`,text:e.itemName}),t({prop:`p#itemprice${a}.foodprice`,parentId:`food${a}`,text:e.itemPrice})}))},cart:()=>{t({prop:"div.component#cartcomp",text:"cart page",parentId:"content"})},orders:()=>{t({prop:"div.component#orderscomp",text:"orders page",parentId:"content",parentId:"content"})},about:()=>{t({prop:"div.component#aboutcomp",text:"about page",parentId:"content"})},home:s},m=({event:t,hrf:a,comp:n})=>{console.log(window.location.pathname.substring(21)),t&&t.preventDefault(),history.replaceState(null,null,`/Resturant_page_odin/${n.name}`),e(n)};var d=a(379),c=a.n(d),p=a(795),l=a.n(p),u=a(569),g=a.n(u),A=a(565),h=a.n(A),f=a(216),S=a.n(f),I=a(589),b=a.n(I),v=a(122),C={};C.styleTagTransform=b(),C.setAttributes=h(),C.insert=g().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=S(),c()(v.Z,C),v.Z&&v.Z.locals&&v.Z.locals,e((()=>{t({prop:"div.navcontainer#navbar.dflex",parentId:"content"}),t({prop:"div.rightnav#rightnav",parentId:"navbar"}),t({prop:"div.leftnav#leftnav.dflex",parentId:"navbar"}),t({prop:"ul#rnavul.dflex",parentId:"rightnav"}),window.innerWidth<600&&(document.getElementById("ddbtn")||(t({prop:"button#ddbtn",parentId:"rightnav"}),document.getElementById("rnavul").style.position="fixed",document.getElementById("rnavul").style.left="50px",document.getElementById("rnavul").style.width="100px",document.querySelector("#rnavul").style.display="none",document.getElementById("ddbtn").style.backgroundImage=`url(${n})`,document.getElementById("ddbtn").addEventListener("click",(()=>{i()})),window.onscroll=()=>{"none"!=document.querySelector("#rnavul").style.display&&i()})),window.addEventListener("resize",(()=>{window.innerWidth<600?document.getElementById("ddbtn")||(t({prop:"button#ddbtn",parentId:"rightnav"}),document.getElementById("rnavul").style.position="fixed",document.getElementById("rnavul").style.left="50px",document.getElementById("rnavul").style.width="100px",document.getElementById("ddbtn").style.background=`url(${n})`,document.querySelector("#rnavul").style.display="none",document.getElementById("ddbtn").addEventListener("click",(()=>{i(),window.onscroll=()=>{"none"!=document.querySelector("#rnavul").style.display&&i()}}))):(document.querySelector("#rnavul").style.display="flex",document.getElementById("rnavul").style.width="unset",document.getElementById("ddbtn")&&document.getElementById("ddbtn").remove(),document.getElementById("rnavul").style.left="")})),t({parentId:"rnavul",prop:"li#rnavli1.navli"}),t({parentId:"rnavli1",prop:"a#rnavlink1 href='/'"}),t({parentId:"rnavlink1",prop:"button#rlb1.linkbutton",text:"home"}),t({parentId:"rnavul",prop:"li#rnavli2.navli"}),t({parentId:"rnavli2",prop:"a#rnavlink2 href='/services'"}),t({parentId:"rnavlink2",prop:"button#rlb2.linkbutton",text:"services"}),t({parentId:"rnavul",prop:"li#rnavli3.navli"}),t({parentId:"rnavli3",prop:"a#rnavlink3 href='/about'"}),t({parentId:"rnavlink3",prop:"button#rlb3.linkbutton",text:"about"}),t({parentId:"rnavul",prop:"li#rnavli4.navli"}),t({parentId:"rnavli4",prop:"a#rnavlink4 href='/orders'"}),t({parentId:"rnavlink4",prop:"button#rlb4.linkbutton",text:"orders"}),t({parentId:"rnavul",prop:"li#rnavli5.navli"}),t({parentId:"rnavli5",prop:"a#rnavlink5 href='/cart'"}),t({parentId:"rnavlink5",prop:"button#rlb5.linkbutton",text:"cart"})})),"/Resturant_page_odin/"==window.location.pathname||"/"==window.location.pathname?e(s):(console.log(r[window.location.pathname.substring(21)]),m({hrf:window.location.pathname,comp:r[window.location.pathname.substring(21)]})),document.querySelectorAll(".linkbutton").forEach((e=>{e.addEventListener("click",(e=>{document.querySelectorAll(".linkbutton").forEach((e=>{e.style.backgroundColor="#d1d1d1"})),e.target.style.backgroundColor="#a1a1a1",e.preventDefault(),document.querySelector("#ddbtn")&&i(),m({hrf:e.target.parentElement.href,comp:r[e.target.parentElement.textContent.trim()],event:e})}))}))})()})();
//# sourceMappingURL=index.bundle.js.map