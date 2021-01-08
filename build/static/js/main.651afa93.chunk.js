(this["webpackJsonpdesafio-react-material-ui"]=this["webpackJsonpdesafio-react-material-ui"]||[]).push([[0],{107:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t(1),c=t.n(r),i=t(36),s=t.n(i),o=t(61),l=t(132),j=t(125),u=t(126),d=t(127),b=t(128),h=t(129),p=t(130),O=t(123),x=t(124),m=t(58),g=t(24);function v(){var e=Object(m.a)(['\n  query GetCountry($countryId: String!) {\n    Country(_id: $countryId) {\n      _id\n      name\n      capital\n      area\n      population\n      topLevelDomains {\n        name\n      }\n      nameTranslations(filter: { languageCode: "br" }) {\n        value\n      }\n      flag {\n        svgFile\n      }\n    }\n  }\n']);return v=function(){return e},e}function f(){var e=Object(m.a)(['\n  query GetAllCountries($first: Int!) {\n    Country(first: $first) {\n      _id\n      name\n      capital\n      nameTranslations(filter: { languageCode: "br" }) {\n        value\n      }\n      flag {\n        svgFile\n      }\n    }\n  }\n']);return f=function(){return e},e}var y=Object(g.gql)(f()),C=Object(g.gql)(v()),I=t(120),k=t(122),w=function(e){var n=e.title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(I.a,{position:"static",children:Object(a.jsx)(k.a,{children:Object(a.jsx)(O.a,{variant:"h4",children:n})})})})},T=Object(x.a)({root:{maxWidth:345},countriesContainer:{paddingTop:"20px",paddingLeft:"40px",paddingRight:"40px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},capital:{fontSize:14}}),F=function(e){var n,t=e.history,r=T(),c=Object(g.useQuery)(y,{variables:{first:15}}),i=c.loading,s=c.error,o=c.data;return i?Object(a.jsx)(j.a,{}):s?"Error! ".concat(s.message):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{title:"Pa\xedses"}),Object(a.jsx)(u.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center",className:r.countriesContainer,children:null===o||void 0===o||null===(n=o.Country)||void 0===n?void 0:n.map((function(e){return Object(a.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(a.jsx)(d.a,{className:r.root,children:Object(a.jsxs)(b.a,{onClick:function(){return t.push("/".concat(e._id))},children:[Object(a.jsx)(h.a,{className:r.cardMedia,component:"img",alt:"Bandeira de ".concat(e.nameTranslations[0].value),height:"140",image:e.flag.svgFile,title:e.name}),Object(a.jsxs)(p.a,{className:r.cardContent,children:[Object(a.jsx)(O.a,{gutterBottom:!1,variant:"h6",component:"h2",children:e.nameTranslations[0].value}),Object(a.jsx)(O.a,{className:r.capital,color:"textSecondary",children:e.capital})]})]})})},e._id)}))})]})},N=t(82),L=t(131),P=Object(x.a)({root:{maxWidth:800}}),_=function(e){var n=e.history,t=e.match.params.countryId,r=P(),c=Object(g.useQuery)(C,{variables:{countryId:t},skip:void 0===t}),i=c.loading,s=c.error,o=c.data;if(i)return Object(a.jsx)(j.a,{});if(s)return"Error! ".concat(s.message);var l=o.Country[0],d=l.name,b=l.capital,h=l.area,p=l.population,x=o.Country[0].topLevelDomains[0].name,m=o.Country[0].nameTranslations[0].value;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{title:"Pa\xeds: ".concat(t)}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(N.a,{children:[Object(a.jsx)(O.a,{className:r.root,variant:"h1",children:"#".concat(t," ").concat(d)}),Object(a.jsxs)(O.a,{variant:"subtitle1",children:["TLD: ",x]}),Object(a.jsx)(O.a,{variant:"subtitle2",children:m}),Object(a.jsxs)("p",{children:["Pa\xeds: ",d]}),Object(a.jsxs)("p",{children:["Capital: ",b||"n\xe3o possui"]}),Object(a.jsxs)("p",{children:["\xc1rea: ",h," km\xb2"]}),Object(a.jsxs)("p",{children:["Popula\xe7\xe3o: ",p/1e3]})]})}),Object(a.jsx)(L.a,{variant:"contained",onClick:function(){return n.push("/")},children:"Voltar"})]})};var q=function(){return Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(a.jsx)(F,Object(o.a)({},e))}}),Object(a.jsx)(l.a,{exact:!0,path:"/:countryId",render:function(e){return Object(a.jsx)(_,Object(o.a)({},e))}})]})},A=t(27),M=new g.InMemoryCache,S=new g.ApolloClient({link:new g.HttpLink({uri:"https://countries-274616.ew.r.appspot.com"}),cache:M}),$=Object(A.a)();s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g.ApolloProvider,{client:S,children:Object(a.jsx)(l.b,{history:$,children:Object(a.jsx)(q,{})})})}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.651afa93.chunk.js.map