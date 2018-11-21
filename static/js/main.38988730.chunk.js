(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(8),r=a.n(i),s=(a(14),a(2)),c=a(3),d=a(6),l=a(4),u=a(5),h=a(1),m=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("h1",null,"My ToDo List")}}]),t}(n.a.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={taskName:a.props.todoText,priority:a.props.priority,dueDate:a.props.dueDate},a.handleChange1=a.handleChange1.bind(Object(h.a)(Object(h.a)(a))),a.handleChange2=a.handleChange2.bind(Object(h.a)(Object(h.a)(a))),a.handleChange3=a.handleChange3.bind(Object(h.a)(Object(h.a)(a))),a.addTodo=a.addTodo.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange1",value:function(e){this.setState({taskName:e.target.value,priority:this.state.priority,dueDate:this.state.dueDate})}},{key:"handleChange2",value:function(e){this.setState({taskName:this.state.taskName,priority:e.target.value,dueDate:this.state.dueDate})}},{key:"handleChange3",value:function(e){this.setState({taskName:this.state.taskName,priority:this.state.priority,dueDate:e.target.value})}},{key:"addTodo",value:function(e,t,a){e.length>0&&(this.props.addTodo(e,t,a),this.setState({taskName:"",priority:this.props.priority,dueDate:""}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-md-4"},n.a.createElement("div",{class:"form-group"},"Task Name",n.a.createElement("input",{type:"text",value:this.state.taskName,onChange:this.handleChange1,class:"form-control"}))),n.a.createElement("div",{class:"col-md-3"},n.a.createElement("div",{class:"form-group"},"Task priority",n.a.createElement("select",{onChange:this.handleChange2,class:"form-control"},n.a.createElement("option",null,"None"),n.a.createElement("option",{value:"High"},"High"),n.a.createElement("option",{value:"Medium"},"Medium"),n.a.createElement("option",{value:"Low"},"Low")))),n.a.createElement("div",{class:"col-md-3"},n.a.createElement("div",{class:"form-group"},"Due Date",n.a.createElement("input",{type:"date",value:this.state.dueDate,onChange:this.handleChange3,class:"form-control"}))),n.a.createElement("div",{class:"col-md-2"},n.a.createElement("div",{class:"form-group"},n.a.createElement("button",{class:"btn btn-md is-green mar-top",onClick:function(){return e.addTodo(e.state.taskName,e.state.priority,e.state.dueDate)}},"Submit")))))}}]),t}(n.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={status:a.props.status},a.changeStatus=a.changeStatus.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"removeTodo",value:function(e){this.props.removeTodo(e)}},{key:"changeStatus",value:function(e){this.setState({status:e.target.checked})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"todoWrapper"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-md-1"},n.a.createElement("input",{type:"checkbox",onChange:this.changeStatus,"aria-label":this.props.todo.text+" "+this.props.priority+" "+this.props.dueDate})),n.a.createElement("div",{class:"col-md-3"},this.props.todo.text),n.a.createElement("div",{class:"col-md-3"},this.props.todo.priority),n.a.createElement("div",{class:"col-md-2"},this.props.todo.dueDate),n.a.createElement("div",{class:"col-md-2"},n.a.createElement("button",{class:"removeTodo",onClick:function(t){return e.removeTodo(e.props.id)},"aria-label":"Remove "+this.props.todo.text+" Task"},n.a.createElement("i",{class:"fa fa-trash-o"})))))}}]),t}(n.a.Component),f=(a(16),n.a.Component,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={todos:[{id:0,text:"Demo Task 1",priority:"High",dueDate:"13/11/2018",status:"open"},{id:1,text:"Demo Task 2",priority:"Medium",dueDate:"14/11/2018",status:"open"}],nextId:2},a.addTodo=a.addTodo.bind(Object(h.a)(Object(h.a)(a))),a.removeTodo=a.removeTodo.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"addTodo",value:function(e,t,a){var o=this.state.todos;o.push({id:this.state.nextId,text:e,priority:t,dueDate:a}),this.setState({todos:o,nextId:++this.state.nextId})}},{key:"removeTodo",value:function(e){this.setState({todos:this.state.todos.filter(function(t,a){return t.id!==e})})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"todo-wrapper"},n.a.createElement(m,null),n.a.createElement(p,{todoText:"",priority:"None",dueDate:"",addTodo:this.addTodo}),this.state.todos.map(function(t){return n.a.createElement(v,{todo:t,key:t.id,id:t.id,removeTodo:e.removeTodo,status:t.status,priority:t.priority,dueDate:t.dueDate})})))}}]),t}(o.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(n.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react_todo_app_master",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react_todo_app_master","/service-worker.js");b?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):g(e)})}}()},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.38988730.chunk.js.map