(this.webpackJsonpcv_app=this.webpackJsonpcv_app||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(6),l=s.n(i),c=(s(26),s(7)),h=s(17),o=s(8),r=s(9),j=s(2),p=s(11),d=s(10),b=(s(27),s(28),s(0)),m=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"header_container",children:[Object(b.jsx)("h1",{className:"name",children:this.props.name}),Object(b.jsx)("h4",{className:"title",children:this.props.title})]}),Object(b.jsxs)("div",{className:"body_container",children:[Object(b.jsxs)("div",{className:"education_container",children:[Object(b.jsx)("h3",{className:"edu_title",children:"Education"}),Object(b.jsx)("h4",{children:this.props.degree}),Object(b.jsx)("h5",{children:this.props.study}),Object(b.jsx)("h5",{children:this.props.school}),Object(b.jsxs)("h5",{children:[this.props.school_form," - ",this.props.school_to]})]}),Object(b.jsxs)("div",{className:"about_container",children:[Object(b.jsx)("h3",{className:"about_title",children:"About me"}),Object(b.jsx)("h5",{className:"about_detail",children:this.props.about_me})]}),Object(b.jsxs)("div",{className:"work_container",children:[Object(b.jsx)("h3",{className:"expi_title",children:"Experience"}),Object(b.jsx)("h4",{children:this.props.role}),Object(b.jsx)("h5",{children:this.props.company}),Object(b.jsxs)("h5",{children:[this.props.work_from," - ",this.props.work_to," "]}),Object(b.jsx)("h5",{children:this.props.work_description})]}),Object(b.jsxs)("div",{className:"skills_container",children:[Object(b.jsx)("h3",{className:"skills_title",children:"Skills"}),Object(b.jsx)("h5",{children:this.props.skill_1}),Object(b.jsx)("h5",{children:this.props.skill_2}),Object(b.jsx)("h5",{children:this.props.skill_3}),Object(b.jsx)("h5",{children:this.props.skill_4})]}),Object(b.jsxs)("div",{className:"contact_container",children:[Object(b.jsx)("h3",{className:"contact_title",children:"Contact"}),Object(b.jsxs)("h5",{children:["Email: ",this.props.email]}),Object(b.jsxs)("h5",{children:["Phone Number: ",this.props.phone]}),Object(b.jsxs)("h5",{children:["Address: ",this.props.address]})]})]})]})}}]),s}(n.Component),u=m,x=s(21),O=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).scrollToSection=function(e){e.preventDefault(),x.scroller.scrollTo("preview_section",{duration:800,delay:0,smooth:"easeInOutQuart"})},n.state={name:"",title:"",email:"",phone:"",address:"",about_me:"",degree:"",school:"",study:"",school_from:"",school_to:"",company:"",role:"",work_description:"",skill_1:"",skill_2:"",skill_3:"",skill_4:"",work_from:"",work_to:""},n.handleInputChange=n.handleInputChange.bind(Object(j.a)(n)),n.scrollToSection=n.scrollToSection.bind(Object(j.a)(n)),n}return Object(r.a)(s,[{key:"handleInputChange",value:function(e){var t=e.target,s=t.name,n=t.value;this.setState(Object(h.a)(Object(h.a)({},n),{},Object(c.a)({},s,n)))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"main_container",children:[Object(b.jsx)("nav",{children:Object(b.jsx)("h1",{children:"CV MAKER"})}),Object(b.jsx)("section",{className:"form_section",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("h4",{children:"Personal Info"}),Object(b.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Name",onChange:this.handleInputChange}),Object(b.jsx)("input",{id:"title",type:"text",name:"title",placeholder:"Professional Title",onChange:this.handleInputChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",onChange:this.handleInputChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"phone",type:"tel",name:"phone",placeholder:"Phone Number",onChange:this.handleInputChange}),Object(b.jsx)("input",{id:"title",type:"text",name:"adress",placeholder:"Adress",onChange:this.handleInputChange}),Object(b.jsx)("textarea",{type:"text",name:"about_me",placeholder:"About me",onChange:this.handleInputChange,rows:"8"}),Object(b.jsx)("h4",{children:"Educational Background"}),Object(b.jsx)("input",{type:"text",name:"degree",placeholder:"Degree Bsc, Masters or Phd",onChange:this.handleInputChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"study",type:"text",name:"study",placeholder:"Field of Study",onChange:this.handleInputChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"school",type:"text",name:"school",placeholder:"School Name",onChange:this.handleInputChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"number",name:"school_from",placeholder:"From",onChange:this.handleInputChange}),Object(b.jsx)("input",{type:"number",name:"school_to",placeholder:"To",onChange:this.handleInputChange}),Object(b.jsx)("h4",{children:"Work Expirience"}),Object(b.jsx)("input",{id:"company",type:"text",name:"company",placeholder:"Company Name",onChange:this.handleInputChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"role",placeholder:"Role",onChange:this.handleInputChange}),Object(b.jsx)("input",{type:"number",name:"work_from",placeholder:"From (starting-year)",onChange:this.handleInputChange}),Object(b.jsx)("input",{type:"number",name:"work_to",placeholder:"To (final-year)",onChange:this.handleInputChange}),Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{placeholder:"Role Description",name:"Message",rows:"10"}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{children:"Skills"}),Object(b.jsx)("input",{type:"text",name:"skill_1",placeholder:"skill 1",onChange:this.handleInputChange}),Object(b.jsx)("input",{type:"text",name:"skill_2",placeholder:"skill 2",onChange:this.handleInputChange}),Object(b.jsx)("input",{type:"text",name:"skill_3",placeholder:"skill 3",onChange:this.handleInputChange}),Object(b.jsx)("input",{type:"text",name:"skill_4",placeholder:"skill 4",onChange:this.handleInputChange}),Object(b.jsx)("button",{className:"submit_btn",onClick:this.scrollToSection,children:"Preview CV"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"reset_btn",children:"Reset"}),Object(b.jsx)("br",{})]})}),Object(b.jsx)("section",{className:"preview_section",children:Object(b.jsx)(u,{name:this.state.name,title:this.state.title,email:this.state.email,phone:this.state.phone,school:this.state.school,study:this.state.study,degree:this.state.degree,school_from:this.state.school_from,school_to:this.state.school_to,company:this.state.company,role:this.state.role,work_description:this.state.work_description,work_from:this.state.work_from,work_to:this.state.work_to,about_me:this.state.about_me,skill_1:this.state.skill_1,skill_2:this.state.skill_2,skill_3:this.state.skill_3,skill_4:this.state.skill_4,address:this.state.address})})]})}}]),s}(n.Component);l.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0e404f0e.chunk.js.map