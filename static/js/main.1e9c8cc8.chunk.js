(this.webpackJsonpecommerceapp=this.webpackJsonpecommerceapp||[]).push([[0],{384:function(e,t,n){},385:function(e,t,n){},403:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(83),r=n.n(c),o=n(32),s=n(33),i=n(36),l=n(35),u=n(1),j=n(4),h=n(8),d=n.n(h),p=n(6),b=n(13),O=n(86);n(211),n(406),n(213);O.a.initializeApp({apiKey:"AIzaSyDdWvz_5PwlselhCHv8W7tawr3-7BR1evM",authDomain:"react-ptoject.firebaseapp.com",projectId:"react-ptoject",storageBucket:"react-ptoject.appspot.com",messagingSenderId:"679292841120",appId:"1:679292841120:web:c4eb11fc3717c68b7a6dc5",measurementId:"G-L3HKQMTF36"}),O.a.firestore().settings({timestampsInSnapshot:!0});var f=O.a,g=f.firestore().collection("projects"),m=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.orderBy("createdAt","desc").get().then((function(e){var n=e.docs.map((function(e){return e.data()}));t({type:"SHOW_PROJECT_DATA",payload:n}),console.log("getdata successfully")})).catch((function(e){t({type:"SHOW_PROJECT_DATA_ERR",payload:e}),console.log({err:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},x=n(7),v=n(85),y=n.n(v),N=Object(x.b)(null,(function(e){return{projectDetail:function(t){return e(function(e){return console.log({item:e},"projectDEtail"),{type:"PROJECT_DETAIL",payload:e}}(t))}}}))((function(e){console.log({props:e});var t=Object(j.e)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"project_summury_container",onClick:function(){t.push("/project/"+e.project.authorId),e.projectDetail(e.project)},children:[Object(u.jsx)("h2",{className:"title",children:e.project.title}),Object(u.jsx)("p",{className:"content",children:e.project.content}),Object(u.jsxs)("h3",{className:"author_name",children:["Posted by ",e.project.authorFirstName,e.project.authorLastName]}),Object(u.jsx)("p",{className:"date",children:y()(e.project.createdAt.toDate()).format("MMM Do YYYY,h:mm:ss a")})]})})})),_=n(203),C=Object(x.b)((function(e){return{isLoaded:e.project.isLoaded}}),(function(e){return{isLoadedAction:function(){return e((function(e,t){e({type:"IS_LOADED_ACTION"})}))}}}))((function(e){return console.log("props",e),console.log("prosLength",e.projects.length),Object(a.useEffect)((function(){e.isLoadedAction(),console.log("loaded")}),[]),Object(u.jsx)("div",{className:"projectlist",children:_.isLoaded?e.projects.length>=1?Object(u.jsx)("div",{children:e.projects.map((function(e,t){return Object(u.jsx)(N,{project:e},e.id)}))}):(console.log(e.projects.length),Object(u.jsx)(j.a,{to:"/createproject"})):Object(u.jsx)("p",{children:"project loading...."})})})),w=f.firestore().collection("users"),D=function(){return function(e,t){f.auth().onAuthStateChanged((function(t){console.log(t),e({type:"CHANGE_STATE",payload:t})}))}},E=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.showProjectData(),this.props.changeState(),console.log("dashchange")}},{key:"render",value:function(){var e=this.props,t=e.showData,n=e.auth;return console.log("dashauth",n),console.log("showData",t),Object(u.jsx)(u.Fragment,{children:n?Object(u.jsx)("div",{className:"dashboard_conrtainer",children:Object(u.jsx)("div",{className:"dashboard_conrtainer_center",children:Object(u.jsx)(C,{projects:t})})}):Object(u.jsx)(j.a,{to:"/signin"})})}}]),n}(a.Component),S=(Object(x.b)((function(e){return{showData:e.project.showData,auth:e.auth.auth}}),(function(e){return{showProjectData:function(){return e(m())},changeState:function(){return e(D())}}}))(E),n(30)),A=Object(x.b)((function(e){return{getUserCollection:e.auth.getUserCollection}}),(function(e){return{signOut:function(){return e((function(e,t){f.auth().signOut().then((function(){e({type:"SIGN_OUT"})}))}))},changeState:function(){return e(D())},getUserData:function(){return e((function(e,t){f.auth().onAuthStateChanged((function(t){var n=t.uid;console.log(n),w.doc(n).get().then((function(t){var n=t.data();e({type:"GET_USER_DATA",payload:n})}))}))}))}}}))((function(e){var t=e.getUserCollection;return console.log(t),Object(a.useEffect)((function(){console.log("useEffect"),e.getUserData()}),[]),Object(u.jsxs)("ul",{children:[Object(u.jsx)("div",{className:"initial",children:t.initials}),Object(u.jsx)("li",{children:Object(u.jsx)(S.a,{to:"/createproject",className:"nav_menu",children:"New Project"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:function(){j.a,e.signOut(),console.log(e),e.changeState()},className:"nav_menu",children:"Log Out"})})]})})),R=function(){return Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(S.a,{to:"/signup",className:"nav_menu",children:"Signup"})}),Object(u.jsx)("li",{children:Object(u.jsx)(S.a,{to:"/signin",className:"nav_menu",children:"Login"})})]})},T=(Object(x.b)((function(e){return{auth:e.auth.auth}}))((function(e){var t=e.auth?Object(u.jsx)(A,{}):Object(u.jsx)(R,{});return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)("div",{className:"logo_container",children:Object(u.jsx)(S.a,{to:"/",className:"nav_logo",children:"Project Plan"})}),Object(u.jsx)("div",{className:"nav_menu_container",children:t})]})})),Object(x.b)((function(e){return console.log(e),{showProjectDetail:e.project.showProjectDetail,auth:e.auth.auth}}))((function(e){var t=Object(j.f)().id;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"project_detail_container",children:e.auth?Object(u.jsxs)("div",{className:"project_detail",children:[Object(u.jsxs)("h2",{className:"title",children:[e.showProjectDetail.title,"-",t]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"content",children:e.showProjectDetail.content}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]}),Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{className:"author_name",children:["Posted by ",e.showProjectDetail.authorFirstName," ",e.showProjectDetail.authorLastName]})}),Object(u.jsx)("p",{className:"date",children:y()(e.showProjectDetail.createdAt.toDate()).format("MMM Do YYYY,h:mm:ss a")})]}):Object(u.jsx)(j.a,{to:"/signin"})})})})),n(34)),P=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(u.jsxs)("div",{className:"input_container",children:[Object(u.jsx)("input",{type:e.type,id:e.id,onChange:e.onChange,ref:t,onClick:function(){0===t.current.value.length&&(n.current.style.transform="translateY(-20px)")},onBlur:function(){0===t.current.value.length&&(n.current.style.transform="none")}}),Object(u.jsx)("label",{htmlFor:e.id,ref:n,children:e.labelName})]})},I=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(T.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=Object(b.a)(d.a.mark((function t(n){var a,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(e.state),t.next=4,e.props.signIn(e.state);case 4:a=e.props,c=a.history,r=a.auth,console.log(r),c.push("/");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.changeState(),console.log("chngecomponent")}},{key:"render",value:function(){var e=this,t=this.props,n=t.authErr,a=t.auth;return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"sign_in_container",children:[Object(u.jsxs)("form",{onSubmit:function(t){e.handleSubmit(t),console.log(a)},children:[Object(u.jsx)("p",{className:"sign_head",children:"Sign In"}),Object(u.jsx)(P,{type:"email",labelName:"email",id:"email",onChange:this.handleChange}),Object(u.jsx)(P,{type:"password",labelName:"password",id:"password",onChange:this.handleChange}),Object(u.jsx)("div",{className:"input_container",children:Object(u.jsx)("button",{className:"btn",children:"Log in"})})]}),Object(u.jsx)("div",{className:"error",children:n?Object(u.jsx)("p",{children:n}):null}),Object(u.jsx)("p",{children:a?a.email:""})]})})}}]),n}(a.Component),L=(Object(x.b)((function(e){return{authErr:e.auth.authError,auth:e.auth.auth}}),(function(e){return{signIn:function(t){return e(function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,f.auth().signInWithEmailAndPassword(e.email,e.password).then((function(){n({type:"LOGIN_SUCCESS"}),console.log("login success")})).catch((function(e){n({type:"LOGIN_ERROR",payload:e}),console.log("login err")}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},changeState:function(){return e(D())}}}))(I),n(408)),k=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstName:"",lastName:"",id:Object(L.a)()},e.handleChange=function(t){e.setState(Object(T.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.signUp(e.state);case 3:e.props.history.push("/"),console.log(e.state);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.changeState(),console.log("singupChangeState")}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)("div",{className:"sign_up_container",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("p",{className:"sign_head",children:"Sign up"}),Object(u.jsx)(P,{type:"email",labelName:"email",id:"email",onChange:this.handleChange}),Object(u.jsx)(P,{type:"password",labelName:"password",id:"password",onChange:this.handleChange}),Object(u.jsx)(P,{type:"text",id:"firstName",onChange:this.handleChange,labelName:"FirstName"}),Object(u.jsx)(P,{type:"text",id:"lastName",onChange:this.handleChange,labelName:"LastName"}),Object(u.jsx)("div",{className:"input_container",children:Object(u.jsx)("button",{className:"btn",children:"Sign up"})})]})})})}}]),n}(a.Component),U=(Object(x.b)((function(e){return console.log("signup",e),{auth:e.auth.auth}}),(function(e){return{signUp:function(t){return e(function(e){return function(){var t=Object(b.a)(d.a.mark((function t(n,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){console.log("response",t.user.uid),w.doc(t.user.uid).set({id:t.user.uid,authorFirstName:e.firstName,authorLastName:e.lastName,initials:e.firstName[0]+e.lastName[0],createdAt:new Date}).then((function(){n({type:"SIGNUP_SUCCESS"});var e=f.firestore().collection("users").doc(f.auth().currentUser.uid);console.log(e,"getuserdata")})).catch((function(e){n({type:"SIGNUP_ERR",payload:e})}))}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},changeState:function(){return e(D())}}}))(k),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(T.a)({},t.target.id,t.target.value))},e.handleSubmit=function(){var t=Object(b.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.props.getUserCollection,t.next=4,e.props.createProject(e.state,a);case 4:return console.log("creategetuser",a),t.next=7,e.props.showProjectData();case 7:e.props.history.push("/");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.textarea=Object(a.createRef)(),e.createProjectLabel=Object(a.createRef)(),e.changeTextareaStyle=function(){console.log(e.textarea),0===e.textarea.current.value.length&&(e.createProjectLabel.current.style.transform="translateY(-20px)")},e.changeLabelstyle=function(){0===e.textarea.current.value.length&&(e.createProjectLabel.current.style.transform="none")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.auth;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"wrapper",children:e?Object(u.jsx)("div",{className:"sign_in_container",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("h5",{className:"sign_head",children:"Create New Project"}),Object(u.jsx)(P,{type:"text",id:"title",onChange:this.handleChange,labelName:"Title"}),Object(u.jsxs)("div",{className:"input_container",children:[Object(u.jsx)("textarea",{cols:"20",rows:"5",id:"content",onChange:this.handleChange,ref:this.textarea,onClick:this.changeTextareaStyle,onBlur:this.changeLabelstyle}),Object(u.jsx)("label",{htmlFor:"content",ref:this.createProjectLabel,children:"Create Project"})]}),Object(u.jsx)("div",{className:"input_container",children:Object(u.jsx)("button",{className:"btn",children:"Create Project"})})]})}):Object(u.jsx)(j.a,{to:"/signin"})})})}}]),n}(a.Component)),G=(Object(x.b)((function(e){return{auth:e.auth.auth,getUserCollection:e.auth.getUserCollection,showData:e.project.showData}}),(function(e){return{createProject:function(t,n){return e(function(e,t){return function(){var n=Object(b.a)(d.a.mark((function n(a,c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.doc(t.id).set(Object(p.a)(Object(p.a)({},e),{},{authorFirstName:t.authorFirstName,authorLastName:t.authorLastName,authorId:t.id,initial:t.initials,createdAt:new Date})).then((function(){a({type:"CREATE_PROJECT",payload:e}),console.log("success")})).catch((function(e){a({type:"CREATE_PROJECT_ERROR",payload:e}),console.log({err:e})}));case 2:g.onSnapshot((function(e){console.log(e)}));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(t,n))},getNotification:function(){return e((function(e,t){var n=f.messaging();n.onMessaging(),n.requestPermission().then((function(){return n.getToken()})).then((function(t){console.log("token",t),e({type:"GET_NOTIFICATION",payload:t})}))}))},showProjectData:function(){return e(m())}}}))(U),n(384),function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card_img_container",children:Object(u.jsx)("img",{src:e.cardData.thumbnailUrl,className:"card_img",alt:"cardImage"})}),Object(u.jsx)("div",{className:"card_circle_icon",children:e.cardData.id}),Object(u.jsx)("div",{className:"card_description",children:Object(u.jsx)("div",{className:"card_title",children:e.cardData.title})})]})}),F=(n(385),Object(x.b)((function(e){return{showError:e.cardReducer.showError}}))((function(e){console.log(e);var t=e.showError;return Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsx)("div",{className:"loader_container",children:t?Object(u.jsx)("button",{children:"retry"}):Object(u.jsxs)("div",{className:"lds-roller",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})]})}))),J=n(204),M=n.n(J),Y=(n(403),Object(x.b)((function(e){return{cardData:e.cardReducer.cardData,loadingState:e.cardReducer.loadingState}}),(function(e){return{getCardData:function(){return e(function(){var e=Object(b.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((function(e){console.log("success",e),t({type:"GET_CARD_DATA",payload:e.data})})).catch((function(e){t({type:"ERR_CARD_DATA",payload:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))((function(e){Object(a.useEffect)((function(){t()}),[]);var t=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCardData();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=e.cardData,c=e.loadingState;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"homescreen_container",children:[Object(u.jsx)("h1",{className:"page_heading",children:"just random cards"}),Object(u.jsx)("p",{style:{width:"100%",backgroundColor:"#000",textAlign:"center",position:"absolute",top:"9%",color:"#fff"},children:"please try again"}),c?Object(u.jsx)(F,{}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"card_container",children:[n.map((function(e){return Object(u.jsx)(G,{cardData:e},e.id)})),Object(u.jsx)("div",{className:"extra_card"})]})})]})})}))),H=function(){return Object(u.jsx)(Y,{})},W=(n(404),{authError:null,auth:null,getUserCollection:[]}),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(p.a)(Object(p.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(p.a)(Object(p.a)({},e),{},{authError:null});case"CHANGE_STATE":return Object(p.a)(Object(p.a)({},e),{},{auth:t.payload});case"SIGN_OUT":return console.log("signOutSuccess"),e;case"SIGNUP_SUCCESS":return console.log("Singupsuccess"),Object(p.a)(Object(p.a)({},e),{},{authError:null});case"SIGNUP_ERR":return Object(p.a)(Object(p.a)({},e),{},{authError:t.payload});case"GET_USER_DATA":return console.log("getuser",t.payload),Object(p.a)(Object(p.a)({},e),{},{getUserCollection:t.payload});default:return e}},z={projects:[{id:1,title:"Help me find peach",content:"blh blah blah"},{id:2,title:"collect all stars",content:"bjbcjs mnbncj"},{id:3,title:"egg hunt",content:"ndjkhjk mcjk"}],showData:[],showProjectDetail:[],isLoaded:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":case"CREATE_PROJECT_ERROR":return e;case"SHOW_PROJECT_DATA":return Object(p.a)(Object(p.a)({},e),{},{showData:t.payload});case"SHOW_PROJECT_DATA_ERR":return e;case"PROJECT_DETAIL":return Object(p.a)(Object(p.a)({},e),{},{showProjectDetail:t.payload});case"IS_LOADED_ACTION":return console.log("isLoaded"),Object(p.a)(Object(p.a)({},e),{},{isLoaded:!0});case"GET_NOTIFICATION":default:return e}},q=n(25),Q=(Object(q.c)({auth:B,project:K}),n(123)),V={cardData:[],loadingState:!0,showError:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CARD_DATA":return Object(p.a)(Object(p.a)({},e),{},{cardData:t.payload,loadingState:!1});case"ERR_CARD_DATA":return Object(p.a)(Object(p.a)({},e),{},{cardData:t.payload,loadingState:!0,showError:!0});default:return e}},Z=Object(q.c)({cardReducer:X}),$=Object(q.e)(Z,Object(q.d)(Object(q.a)(Q.a)));r.a.render(Object(u.jsx)(x.a,{store:$,children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[405,1,2]]]);
//# sourceMappingURL=main.1e9c8cc8.chunk.js.map