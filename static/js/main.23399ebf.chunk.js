(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i(1),n=i(4),o=i.n(n),c=(i(14),i(15),i(5)),r=i(6),l=i(8),d=i(7);var h=function(e){return Object(a.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var m=function(e){return Object(a.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var g=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(a.jsx)("div",{className:t,children:e.children})};var p=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-inverse",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/",onClick:e.home,children:"Marc Langlois"}),Object(a.jsx)("div",{id:"navbarSupportedContent",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"/",onClick:e.portfolio,children:"Applications"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"/",onClick:e.about,children:"About"})})]})}),Object(a.jsxs)("div",{className:"navbar-right",children:[Object(a.jsx)("a",{href:"https://www.linkedin.com/in/marc-langlois-2b40b61b0/",children:Object(a.jsx)("img",{src:"./img/liImg.png",alt:"linkedIn",className:"linkImg"})}),Object(a.jsx)("a",{href:"https://github.com/mlanglois333",children:Object(a.jsx)("img",{src:"./img/github.png",alt:"gitHub",className:"linkImg"})})]})]})})};var u=function(){return Object(a.jsx)("footer",{className:"footer",children:"Marc Langlois || MLangloisBootcamp@gmail.com || 555-5555 || 2020"})};var b=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("iframe",{title:"resume",src:"https://docs.google.com/document/d/e/2PACX-1vQ0pnRqBQaCZtFW_bBqRDTAB1aQ8BYDMQfP5pxS-UiRX2q036Yspefq547XYa6gbzPur8Y9B4B-LxGM/pub?embedded=true"})})};var j=function(e){return Object(a.jsxs)("div",{className:"card text-center bg-dark text-light",children:[Object(a.jsx)("div",{className:"card-header",children:Object(a.jsx)("h2",{className:"text-light",children:e.header})}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("img",{src:e.image,alt:"screenshot",className:"img-fluid screenshot"})}),Object(a.jsx)("div",{className:"col text-light",children:e.detail})]}),Object(a.jsx)("div",{className:"card-footer w-100 text-muted",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("img",{src:e.left,alt:"left",onClick:e.leftClick,className:"buttonImg"})," || ",e.li," || ",e.gh," || ",Object(a.jsx)("img",{src:e.right,alt:"left",onClick:e.rightClick,className:"buttonImg"})]})})]})]})},f=i(2),x=i.n(f);var v=function(e){var t=e.index;return Object(a.jsx)(j,{header:x.a.projects[t].title,image:x.a.projects[t].imgUrl,detail:Object(a.jsx)("p",{children:x.a.projects[t].description}),gh:Object(a.jsx)("a",{href:x.a.projects[t].github,children:"Repository"}),li:Object(a.jsx)("a",{href:x.a.projects[t].deployed,children:"Deployed"}),left:"./img/left.png",right:"./img/right.png",leftClick:e.leftClick,rightClick:e.rightClick})};var O=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"hero-image",children:Object(a.jsxs)("div",{className:"hero-text",children:[Object(a.jsx)("h1",{className:"homeText",children:"Marc Langlois"}),Object(a.jsx)("p",{children:"Junior Engineer and Creative Problem-Solver"})]})})})},y=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={display:"home",isLoading:!0,index:0},e.projects=function(t){t.preventDefault(),e.setState({display:"portfolio"})},e.about=function(t){t.preventDefault(),e.setState({display:"about"})},e.home=function(t){t.preventDefault(),e.setState({display:"home"})},e.left=function(t){var i=e.state.index;t.preventDefault(),0===i?(i=5,e.setState({index:i})):(i--,e.setState({index:i}))},e.right=function(t){var i=e.state.index;t.preventDefault(),5===i?(i=0,e.setState({index:i})):(i++,e.setState({index:i}),console.log(e.state.index))},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1})}},{key:"render",value:function(){return!0===this.state.isLoading?Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:"Loading..."})}):!1===this.state.isLoading&&"home"===this.state.display?Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{home:this.home,portfolio:this.projects,about:this.about}),Object(a.jsx)("div",{className:"buffer"}),Object(a.jsx)(O,{}),Object(a.jsx)(u,{})]}):"portfolio"===this.state.display&&!1===this.state.isLoading?Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{home:this.home,portfolio:this.projects,about:this.about}),Object(a.jsx)("div",{className:"buffer"}),Object(a.jsx)(h,{children:Object(a.jsx)(m,{children:Object(a.jsx)(g,{size:"sm-12",children:Object(a.jsx)(v,{index:this.state.index,leftClick:this.left,rightClick:this.right})})})}),Object(a.jsx)(u,{})]}):"about"===this.state.display&&!1===this.state.isLoading?Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{home:this.home,portfolio:this.projects,about:this.about}),Object(a.jsx)("div",{className:"buffer"}),Object(a.jsx)(b,{}),Object(a.jsx)(u,{})]}):void 0}}]),i}(s.Component);var k=function(){return Object(a.jsx)(y,{})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;i(e),a(e),s(e),n(e),o(e)}))};i(16);o.a.render(Object(a.jsx)(k,{}),document.getElementById("root")),N()},2:function(e,t){t.projects=[{title:"Ascent Healthy Living",description:'During the recent pandemic and quaranitine, alcohol consumption has risen by 30%. We designed this application to let users track and reduce their alcohol intake in a positive manner.Users set goals and receive badges for their accomplishments and are presented with a sleek visual representation of their work. Users submit a once-daily journal entry upon log-in to record how they are feelling and are able to access all past entries for a broad look at their journey. This application uses NodeJs, HandleBars, Sequelize, Express, and a "Seperation of Concerns" approach. ESLint was used by the team to keep common formatting.',github:"https://github.com/mlanglois333/Ascent-Sobriety-Toolkit",deployed:"https://ascent-sobriety.herokuapp.com/",imgUrl:"./img/ascent.png"},{title:"Vedge-In",description:"This is a tool that guides users towards a more healthy eating decisions through tracking and gamification. Users log the amount of fruits and veggies they consume in a day to gain points. Users can challenge eachother to see who can gain the most points in the course of a week and end up on the leaderboard! This application uses TypeScript, NestJs, and TypeORM. ",github:"https://github.com/tiffany-brand/veg-out",deployed:"https://vedge-in.herokuapp.com/",imgUrl:"./img/vedgeIn.jpg"},{title:"Quar 'N Titles",description:"What was that movie called again? This application allows users to search multiple APIs for movies, TV shows, and books that they enjoyed and would like to reccomend. Upon searching for titles, the user is presented with a cover image and information about the release and are able to save it to their collection.",github:"https://github.com/mlanglois333/Quarantine-Accomplishments",deployed:"https://mlanglois333.github.io/Quarantine-Accomplishments/",imgUrl:"./img/quarntitles.png"},{title:"React Employee Directory",description:"This is a simple application using React that displays, filters, and sorts a table of employee information. ",github:"https://github.com/mlanglois333/React-Employee-Directory",deployed:"https://mlanglois333.github.io/React-Employee-Directory/",imgUrl:"./img/employee.png"},{title:"Offline-Enabled Ledger",description:"This is a PWA that allows users to log transactions when offline. The cached transactions will be sent to the MongoDB Atlas database once an internet connection is established again.",github:"https://github.com/mlanglois333/Offline-Banking",deployed:"https://shrouded-bastion-57978.herokuapp.com/",imgUrl:"./img/budget.png"},{title:"NodeJS Staff Database",description:"This is an ap using NodeJs and Mysql that allows users to create, review, update, and delete employee data held in a database. It works by establishing a connection to the database then using input from inquirer prompts to manipulate data within the tables.",github:"https://github.com/mlanglois333/mysql-staff-generator",deployed:"https://drive.google.com/file/d/1aML90GX1Kmi0IcVd3heisLn4VwZrSXVf/view",imgUrl:"./img/staff.png"}]}},[[17,1,2]]]);
//# sourceMappingURL=main.23399ebf.chunk.js.map