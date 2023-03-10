"use strict";(self.webpackChunkportfolio_3=self.webpackChunkportfolio_3||[]).push([[488],{2488:function(e,t,n){n.r(t),n.d(t,{About:function(){return S}});var i=n(8735),o=n(3046),r=n(2504),s=n(3880),a=n(9439),c=n(2791),l=n(6332),d=n(3433),u=n(1413),p=n(5987),h=n(184),m=["title"],f=["title"],x=function(e){var t=e.title,n=(0,p.Z)(e,m);return(0,h.jsx)(i.X6,(0,u.Z)((0,u.Z)({fontSize:"2xl",fontWeight:"bold"},n),{},{"data-aos":"fade-down",children:t}))},g=function(e){var t=e.title,n=(0,p.Z)(e,f);return(0,h.jsx)(i.xv,(0,u.Z)((0,u.Z)({fontWeight:"semibold",fontSize:"lg"},n),{},{"data-aos":"fade-down",children:t}))},j=function(e){var t=e.expanded,n=e.id,o=e.idx,s=e.title,u=e.subTitle,p=e.date,m=e.content,f=e.onChange,x=(0,c.useMemo)((function(){return t.includes(o)}),[t,o]),j=(0,c.useState)(!1),b=(0,a.Z)(j,2),y=b[0],v=b[1],k=(0,c.useMemo)((function(){return m.length>1&&!x||!x&&y}),[y,x,m]);return(0,c.useEffect)((function(){var e,t="first-point-".concat(n),i=document.getElementById(t);i&&(i.scrollWidth>=(null===(e=i.parentElement)||void 0===e?void 0:e.scrollWidth)?v(!0):v(!1))}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.KF,{as:i.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,h.jsx)(g,{title:s,fontWeight:"semibold"}),(0,h.jsx)(i.xv,{"data-aos":"fade",children:u}),(0,h.jsx)(i.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:p}),(0,h.jsxs)(i.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[x?(0,h.jsx)(i.QI,{listStylePosition:"outside",pl:"1",children:(0,h.jsx)(i.xv,{as:"li",isTruncated:!t.includes(o),children:m[0]})}):(0,h.jsx)(i.xv,{id:"first-point-".concat(n),isTruncated:!t.includes(o),children:m[0]}),k&&(0,h.jsx)(r.zx,{flexShrink:0,id:"see-more-".concat(n),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:function(){if(t.includes(o)){var e=t.filter((function(e){return e!==o}));f(e)}else f([].concat((0,d.Z)(t),[o]))},children:"See more"})]})]}),(0,h.jsxs)(l.Hk,{p:"0",pl:"1",children:[(0,h.jsx)(i.QI,{listStylePosition:"outside",children:m.slice(1).map((function(e,t){return(0,h.jsx)(i.xv,{as:"li",children:e},"".concat(s,"-cont-").concat(t))}))}),t.includes(o)&&(0,h.jsx)(i.kC,{justifyContent:"flex-end",children:(0,h.jsx)(r.zx,{id:"see-less-".concat(n),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:function(){var e=t.filter((function(e){return e!==o}));f(e)},children:"See less"})})]})]})},b=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{title:"Education"}),(0,h.jsx)("br",{}),(0,h.jsx)(l.UQ,{pt:"2",allowMultiple:!0,index:n,id:"education",children:s.rH.about.educations.map((function(e,t){return(0,h.jsx)(l.Qd,{p:"0",border:"0",mb:"4",children:(0,h.jsx)(j,{title:e.school,subTitle:e.degree,date:e.duration,content:e.content,id:e.id,idx:t,onChange:i,expanded:n})},"panel-".concat(e.school,"-").concat(e.degree))}))})]})},y=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{title:"Job Experience"}),(0,h.jsx)("br",{}),(0,h.jsx)(l.UQ,{pt:"2",allowMultiple:!0,index:n,children:s.rH.about.experiences.map((function(e,t){return(0,h.jsx)(l.Qd,{p:"0",border:"0",mb:"4",children:(0,h.jsx)(j,{id:e.id,title:e.company,subTitle:e.position,date:e.duration,content:e.description,idx:t,onChange:i,expanded:n})},"panel-".concat(e.company))}))})]})},v=n(3362),k=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{title:"Skills",pb:"2"}),(0,h.jsx)("br",{}),s.rH.about.skills.map((function(e){return(0,h.jsxs)(i.xu,{p:"0",mb:"4",children:[(0,h.jsx)(g,{title:e.title}),(0,h.jsx)(v.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))}))]})},S=function(){var e=(0,s.r0)(s.nl.About);return(0,h.jsxs)(i.xu,{children:[(0,h.jsxs)(i.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:[(0,h.jsx)(i.xu,{flex:"0.35","data-aos":"fade-up",children:(0,h.jsxs)("picture",{children:[(0,h.jsx)("source",{type:"image/webp",srcSet:s.rH.common.mainPicture}),(0,h.jsx)("source",{type:"image/jpeg",srcSet:s.rH.common.mainPictureJPG}),(0,h.jsx)(o.Ee,{borderRadius:"xl",src:s.rH.common.mainPicture,w:"100%",alt:"profile image"})]})}),(0,h.jsxs)(i.xu,{flex:"0.85",children:[(0,h.jsx)(i.X6,{"data-aos":"fade-down",children:s.rH.common.name}),(0,h.jsxs)(i.kC,{alignItems:"center",children:[(0,h.jsx)(i.xv,{fontWeight:"bold",opacity:"0.5","data-aos":"fade","data-aos-delay":"200"}),(0,h.jsx)(r.zx,{size:"xs","aria-label":"pronunciation button",as:r.hU,variant:"icon",fontSize:"md"})]}),(0,h.jsx)(i.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:(0,h.jsx)(s.VY,{fontSize:"lg",children:e.about})})]})]}),(0,h.jsxs)(i.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,h.jsx)(i.xu,{flex:"0.6",flexShrink:"0",overflow:"hidden",children:(0,h.jsx)(b,{})}),(0,h.jsx)(i.xu,{flex:"0.6",overflow:"hidden",children:(0,h.jsx)(y,{})})]}),(0,h.jsx)(i.xu,{pt:"16",children:(0,h.jsx)(k,{})}),(0,h.jsx)(i.xu,{pt:"16"})]})}},3880:function(e,t,n){n.d(t,{VY:function(){return M},nl:function(){return o},rH:function(){return P},r0:function(){return H}});var i,o,r=n(5987),s=n(1413),a=n(9439),c=n(4942),l=n(2791),d=n(8735),u=n(63),p=JSON.parse('{"name":"Tanner Heimsch","logoType":{"mobile":"TH","desktop":"Tanner Heimsch"},"mainPicture":"/assets/TH.webp","mainPictureJPG":"/assets/TH.jpeg","audioFile":"/assets/name-pro.mp3","cssVarPrefix":"hp","email":"h3imscht@outlook.com","linkedin":"https://www.linkedin.com/in/tannerheimsch/","github":"https://github.com/tannerheimsch","resume":"http://resume.com","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/tannerheimsch/"},{"type":"github","link":"https://github.com/tannerheimsch"},{"type":"mail","link":"mailto:h3imscht@outlook.com"}]}'),h=JSON.parse('{"headline":"Hello, I\'m Tanner Heimsch.","picture":"/assets/landing/face.webp","jpg":"/assets/landing/face.jpeg"}'),m=JSON.parse('[{"id":"featured-project-name","title":"Project Name","year":"2023","location":"location","demo":"http://www.google.com/","github":"https://github.com/tannerheimsch","tags":["MySQL"],"description":"Project Description","image":"/assets/featured-projects/placeholder-image.webp","jpg":"/assets/featured-projects/trackcta.jpeg"}]'),f=JSON.parse('[{"id":"other-project-post","title":"Project Name","year":"Aug 2019 - Dec 2019","github":"https://github.com/tannerheimsch","demo":"","tags":["Tags"],"description":"Description.","image":"/assets/other-projects/placeholder.webp","jpg":"/assets/other-projects/post.jpeg"}]'),x=JSON.parse('{"educations":[{"id":"edu-1","school":"Chippewa Valley Technical College","degree":"Associate\'s Degree - Data & Analytics Specalist","duration":"Sept 2022 - May 2024","content":["GPA: 4/4","Courses: Database I/II, Python, Bus Intelligence/Visualization, Systems Analysis and Design, Project Management."]},{"id":"edu-2","school":"Grafton High School","degree":"","duration":"Sept 2011 - June 2015","content":[]}],"experiences":[{"id":"exp-1","company":"Toppers Pizza","position":"Driver Manager","duration":"Jul 2017 - Present","description":["Managing Driver shifts for the week, this includes scheduling and looking at sales numbers from the previous quarter to assure antiquate staffing for that day.","Teaching Drivers proper Customer interactions either at the door or on the phone."]},{"id":"exp-2","company":"EPropertyCare","position":"Independent Contractor","duration":"Jun 2019 - Feb 2020","description":["Travel to customers\' premises to install, maintain, or repair security equipment such as security cameras, smart thermostats, or water sensors.\u200b","Set up service for customers, installing, connecting, testing, or adjusting equipment.","Splice cables, using hand tools, epoxy, or mechanical equipment."]},{"id":"exp-3","company":"Highland Ventures | Family Video","position":"Assistant Manager","duration":"Sept 2016 - Aug 2017","description":["Managing employees and training them in order to be able to keep up with a heavy rush during our busier hours\u200b","Assessing rental numbers for the period in order to know what to expect in terms of customer feedback/rental habits for the next week.","Ordering new stock for the stores, be it promotional items for New Releases, game equipment, or snack/soda items."]}],"skills":[{"title":"Programming","tools":["Python","Javascript"]},{"title":"Web","tools":["HTML/CSS"]},{"title":"Databases","tools":["MySQL","Microsoft Access","Microsoft SQL Management Studio"]},{"title":"OS & Tools","tools":["MacOS","Linux","Unbuntu","Windows"]},{"title":"Design & System Life Cycle","tools":["Surveys","Interviews","Microsoft Project","Adobe Photoshop"]}],"blog":[{"id":"","title":"","link":""},{"id":"","title":"","link":""}]}'),g=n(7034),j=n(7838),b=n(184),y=["children"],v=["node"],k=["node"],S=["node"],w=["ordered"],Z=["node"],C=["ordered"],P={common:p,landing:h,featuredProjects:m,otherProjects:f,about:x};!function(e){e.Landing="landing",e.About="about"}(o||(o={}));var T=(i={},(0,c.Z)(i,o.Landing,g),(0,c.Z)(i,o.About,j),i),H=function(e){var t=(0,l.useState)({landing:"",about:""}),n=(0,a.Z)(t,2),i=n[0],o=n[1];return(0,l.useEffect)((function(){fetch(T[e]).then((function(e){return e.text()})).then((function(t){return o((function(n){return(0,s.Z)((0,s.Z)({},n),{},(0,c.Z)({},e,t))}))}))}),[e]),i},M=function(e){var t=e.children,n=(0,r.Z)(e,y);return(0,b.jsx)(d.Kq,{spacing:"4",children:(0,b.jsx)(u.D,{components:{p:function(e){e.node;var t=(0,r.Z)(e,v);return(0,b.jsx)(d.xv,(0,s.Z)((0,s.Z)({},n),t))},a:function(e){e.node;var t=(0,r.Z)(e,k);return(0,b.jsx)(d.rU,(0,s.Z)({href:t.href,target:"_blank",color:"primary.200"},t))},ul:function(e){e.node;var t=(0,r.Z)(e,S),n=(t.ordered,(0,r.Z)(t,w));return(0,b.jsx)(d.QI,(0,s.Z)((0,s.Z)({},n),{},{"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"}))},li:function(e){e.node;var t=(0,r.Z)(e,Z),n=(t.ordered,(0,r.Z)(t,C));return(0,b.jsx)("li",(0,s.Z)({"data-aos":"flip-up","data-aos-delay":100*t.index+400},n))}},children:t})})}},3362:function(e,t,n){n.d(t,{$:function(){return r}});var i=n(8735),o=n(184),r=function(e){var t=e.id,n=e.tags,r=e.size,s=void 0===r?"sm":r;return(0,o.jsx)(i.kC,{py:"2",wrap:"wrap",gap:"4",children:n.map((function(e,n){return(0,o.jsx)(i.xu,{"data-aos":"flip-left","data-aos-delay":50*n,children:(0,o.jsx)(i.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:s,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))}))})}},7838:function(e,t,n){e.exports=n.p+"static/media/about.86ea2b9ca997cc5e7aff.md"},7034:function(e,t,n){e.exports=n.p+"static/media/landing.d3448ad2bc4499a4b0e8.md"}}]);
//# sourceMappingURL=488.e5c6f902.chunk.js.map