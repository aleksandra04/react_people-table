(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,r,a){e.exports=a(16)},15:function(e,r,a){},16:function(e,r,a){"use strict";a.r(r);var n=a(0),t=a.n(n),o=a(7),i=a.n(o),l=a(8),s=a(1),m=a(2),d=a(4),c=a(3),h=a(5),u=a(9),b=(a(15),function(e){var r=e.person,a=e.index,n=e.handler,o=e.selected?"person--selected":"",i="f"===r.sex?"person person--female":"person person--male",l="".concat(o," + ").concat(i),s=r.born<1650?"born_before_1650":"",m=r.age>=65?"age_more_65":"";return t.a.createElement("tr",{className:l,onClick:function(){return n(a)}},t.a.createElement("td",null,r.id),t.a.createElement("td",{className:s},r.name),t.a.createElement("td",null,r.sex),t.a.createElement("td",null,r.born),t.a.createElement("td",null,r.died),t.a.createElement("td",{className:m},r.age),t.a.createElement("td",null,r.century),t.a.createElement("td",null,r.mother),t.a.createElement("td",null,r.father))}),f=function(e){var r=e.toSort,a=e.title;return t.a.createElement("th",{onClick:function(){return r(a)},className:"column-header"},a)},v=["id","name","sex","born","died","age","century","mother","father"],k=function(e){function r(){var e,a;Object(s.a)(this,r);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(c.a)(r)).call.apply(e,[this].concat(t)))).state={selectedRow:""},a.clickhandler=function(e){a.setState({selectedRow:a.props.people[e].id})},a}return Object(h.a)(r,e),Object(m.a)(r,[{key:"render",value:function(){var e=this,r=this.state.selectedRow;return t.a.createElement("table",{className:"table"},t.a.createElement("thead",null,t.a.createElement("tr",null,v.map(function(r){return t.a.createElement(f,{toSort:e.props.toSort,title:r})}))),t.a.createElement("tbody",null,this.props.people.map(function(a,n){return t.a.createElement(b,{person:a,index:n,handler:e.clickhandler,selected:a.id===r})})))}}]),r}(t.a.Component),p=function(e){var r=e.toFilter;return t.a.createElement("label",null,t.a.createElement("span",null,"Search"),t.a.createElement("input",{onChange:function(e){return r(e.target.value)},type:"search"}))},H=[{name:"Carolus Haverbeke",sex:"m",born:1832,died:1905,father:"Carel Haverbeke",mother:"Maria van Brussel"},{name:"Emma de Milliano",sex:"f",born:1876,died:1956,father:"Petrus de Milliano",mother:"Sophia van Damme"},{name:"Maria de Rycke",sex:"f",born:1683,died:1724,father:"Frederik de Rycke",mother:"Laurentia van Vlaenderen"},{name:"Jan van Brussel",sex:"m",born:1714,died:1748,father:"Jacobus van Brussel",mother:"Joanna van Rooten"},{name:"Philibert Haverbeke",sex:"m",born:1907,died:1997,father:"Emile Haverbeke",mother:"Emma de Milliano"},{name:"Jan Frans van Brussel",sex:"m",born:1761,died:1833,father:"Jacobus Bernardus van Brussel",mother:null},{name:"Pauwels van Haverbeke",sex:"m",born:1535,died:1582,father:"N. van Haverbeke",mother:null},{name:"Clara Aernoudts",sex:"f",born:1918,died:2012,father:"Henry Aernoudts",mother:"Sidonie Coene"},{name:"Emile Haverbeke",sex:"m",born:1877,died:1968,father:"Carolus Haverbeke",mother:"Maria Sturm"},{name:"Lieven de Causmaecker",sex:"m",born:1696,died:1724,father:"Carel de Causmaecker",mother:"Joanna Claes"},{name:"Pieter Haverbeke",sex:"m",born:1602,died:1642,father:"Lieven van Haverbeke",mother:null},{name:"Livina Haverbeke",sex:"f",born:1692,died:1743,father:"Daniel Haverbeke",mother:"Joanna de Pape"},{name:"Pieter Bernard Haverbeke",sex:"m",born:1695,died:1762,father:"Willem Haverbeke",mother:"Petronella Wauters"},{name:"Lieven van Haverbeke",sex:"m",born:1570,died:1636,father:"Pauwels van Haverbeke",mother:"Lievijne Jans"},{name:"Joanna de Causmaecker",sex:"f",born:1762,died:1807,father:"Bernardus de Causmaecker",mother:null},{name:"Willem Haverbeke",sex:"m",born:1668,died:1731,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Pieter Antone Haverbeke",sex:"m",born:1753,died:1798,father:"Jan Francies Haverbeke",mother:"Petronella de Decker"},{name:"Maria van Brussel",sex:"f",born:1801,died:1834,father:"Jan Frans van Brussel",mother:"Joanna de Causmaecker"},{name:"Angela Haverbeke",sex:"f",born:1728,died:1734,father:"Pieter Bernard Haverbeke",mother:"Livina de Vrieze"},{name:"Elisabeth Haverbeke",sex:"f",born:1711,died:1754,father:"Jan Haverbeke",mother:"Maria de Rycke"},{name:"Lievijne Jans",sex:"f",born:1542,died:1582,father:null,mother:null},{name:"Bernardus de Causmaecker",sex:"m",born:1721,died:1789,father:"Lieven de Causmaecker",mother:"Livina Haverbeke"},{name:"Jacoba Lammens",sex:"f",born:1699,died:1740,father:"Lieven Lammens",mother:"Livina de Vrieze"},{name:"Pieter de Decker",sex:"m",born:1705,died:1780,father:"Joos de Decker",mother:"Petronella van de Steene"},{name:"Joanna de Pape",sex:"f",born:1654,died:1723,father:"Vincent de Pape",mother:"Petronella Wauters"},{name:"Daniel Haverbeke",sex:"m",born:1652,died:1723,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Lieven Haverbeke",sex:"m",born:1631,died:1676,father:"Pieter Haverbeke",mother:"Anna van Hecke"},{name:"Martina de Pape",sex:"f",born:1666,died:1727,father:"Vincent de Pape",mother:"Petronella Wauters"},{name:"Jan Francies Haverbeke",sex:"m",born:1725,died:1779,father:"Pieter Bernard Haverbeke",mother:"Livina de Vrieze"},{name:"Maria Haverbeke",sex:"m",born:1905,died:1997,father:"Emile Haverbeke",mother:"Emma de Milliano"},{name:"Petronella de Decker",sex:"f",born:1731,died:1781,father:"Pieter de Decker",mother:"Livina Haverbeke"},{name:"Livina Sierens",sex:"f",born:1761,died:1826,father:"Jan Sierens",mother:"Maria van Waes"},{name:"Laurentia Haverbeke",sex:"f",born:1710,died:1786,father:"Jan Haverbeke",mother:"Maria de Rycke"},{name:"Carel Haverbeke",sex:"m",born:1796,died:1837,father:"Pieter Antone Haverbeke",mother:"Livina Sierens"},{name:"Elisabeth Hercke",sex:"f",born:1632,died:1674,father:"Willem Hercke",mother:"Margriet de Brabander"},{name:"Jan Haverbeke",sex:"m",born:1671,died:1731,father:"Lieven Haverbeke",mother:"Elisabeth Hercke"},{name:"Anna van Hecke",sex:"f",born:1607,died:1670,father:"Paschasius van Hecke",mother:"Martijntken Beelaert"},{name:"Maria Sturm",sex:"f",born:1835,died:1917,father:"Charles Sturm",mother:"Seraphina Spelier"},{name:"Jacobus Bernardus van Brussel",sex:"m",born:1736,died:1809,father:"Jan van Brussel",mother:"Elisabeth Haverbeke"}].map(function(e,r){return Object(u.a)({},e,{id:r+1,age:e.died-e.born,century:Math.ceil(e.died/100)})}),x=function(e){function r(){var e,a;Object(s.a)(this,r);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(c.a)(r)).call.apply(e,[this].concat(t)))).state={people:Object(l.a)(H),filtered:[],sortColumn:"id"},a.toFilter=function(e){a.setState(function(r){return{filtered:r.people.filter(function(r){return r.name.toLowerCase().includes(e.toLowerCase())||null!==r.mother&&r.mother.toLowerCase().includes(e.toLowerCase())||null!==r.father&&r.father.toLowerCase().includes(e.toLowerCase())})}})},a.sortingArr=function(e,r){return e.sort(function(e,a){return"string"===typeof e[r]?e[r].localeCompare(a[r]):e[r]-a[r]})},a.toSort=function(e){a.state.filtered.length?a.setState(function(r){return{sortColumn:e,filtered:e!==r.sortColumn?a.sortingArr(r.filtered,e):r.filtered.reverse()}}):a.setState(function(r){return{sortColumn:e,people:e!==r.sortColumn?a.sortingArr(r.people,e):r.people.reverse()}})},a}return Object(h.a)(r,e),Object(m.a)(r,[{key:"render",value:function(){var e=this.state,r=e.people,a=e.filtered;return t.a.createElement("div",{className:"App"},t.a.createElement("h1",null,"People table",r.length),t.a.createElement(p,{toFilter:this.toFilter}),t.a.createElement(k,{people:a.length?a:r,toSort:this.toSort}))}}]),r}(t.a.Component);i.a.render(t.a.createElement(x,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c3eb6794.chunk.js.map