(function(){"use strict";var e={6965:function(e,a,t){var n=t(3751),i=t(641);const r={id:"app"};function o(e,a,t,n,o,s){const c=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(c)])}var s={name:"App"},c=t(6262);const l=(0,c.A)(s,[["render",o]]);var d=l,p=t(2433),m=t(5220);const u={class:"app-container>"},h={key:0,class:"links-to animate__animated animate__fadeInRight animate__delay-0.2s"},f=(0,i.Fv)('<a href="https://www.linkedin.com/in/harmyacs/" target="_blank"><span class="links-text">\\about</span></a><a href="https://www.github.com/harmya" target="_blank"><span class="links-text">\\github</span></a><a href="Resume_2024.pdf" download="harmya_bhatt_resume" target="_blank"><span class="links-text">\\resume</span></a><a href="mailto: hvbhatt@purdue.edu" target="_blank"><span class="links-text">\\contact</span></a>',4),v=(0,i.Lk)("div",{class:"greeting animate__animated animate__fadeInLeft animate__delay-0.2s"},[(0,i.Lk)("h1",null,"Hello, I'm Harmya Bhatt"),(0,i.Lk)("p",null,"I like to build things with code")],-1),g={class:"container animate__animated animate__fadeIn animate__delay-0.3s"},k=(0,i.Fv)('<div class="terminal-menu"><div class="buttons-container"><div class="button-red"></div><div class="button-yellow"></div><div class="button-green"></div></div><div class="terminal-title"><h1><a href="https://harmya.me" target="_blank"> harmya.me </a></h1></div></div>',1),b={class:"terminal"},y=(0,i.Lk)("div",{class:"terminal-intro"},[(0,i.Lk)("p",{class:"welcome-message",style:{"padding-bottom":"5px","padding-left":"5px"}},[(0,i.eW)(" Logged in as "),(0,i.Lk)("span",{class:"username"},"visitor")])],-1),w={class:"terminal-input"},_=(0,i.Lk)("p",{class:"prompt"},"visitor@home:~$ ",-1);function S(e,a,t,n,r,o){return(0,i.uX)(),(0,i.CE)("div",u,[r.mounted?((0,i.uX)(),(0,i.CE)("div",h,[f,(0,i.Lk)("span",{class:"links-text",onClick:a[0]||(a[0]=(...e)=>o.goToFriends&&o.goToFriends(...e))},"\\friends")])):(0,i.Q3)("",!0),v,(0,i.Lk)("div",g,[k,(0,i.Lk)("div",b,[y,(0,i.Lk)("div",w,[_,(0,i.Lk)("input",{ref:"focusInput",onKeydown:a[1]||(a[1]=(...e)=>o.handleSubmit&&o.handleSubmit(...e)),type:"text",class:"input",placeholder:"Type 'help' for a list of commands"},null,544)])])])])}t(4114);var I={name:"HomePage",data(){return{mounted:!1,prompt:"visitor@home:~$ ",commands:[{name:"help",description:"List all available commands"},{name:"work",description:"Summary of my work experience"},{name:"projects",description:"Projects I have worked on"},{name:"skills",description:"List of skills I have"},{name:"contact",description:"Ways to contact me"},{name:"clear",description:"Clear the terminal"}],workExperience:[{company:"Cohere Health",position:"Software Engineering Intern",duration:"Jun 2024 - Present",description:"Integrating ML tools for seamless prior authorizations, developing and releasing front-end and back-end features, writing Cypress tests. Working on automation solutions to digitize workflows and improve patient outcomes."},{company:"Purdue University: INDESS Research Group",position:"ML Research Intern",duration:"May 2023 - Aug 2023",description:"Developed a Flask REST API to integrate a Multi-Label Classifier within a microservice architecture. Optimized data flow and processing, improving efficiency by 10%. Deployed API on AWS EC2 using Docker for scalability. Technologies: Python, scikit-learn, Keras, pandas, nltk, Flask, Docker."},{company:"Discovery Park at Purdue University",position:"Research Intern",duration:"May 2022 - Aug 2022",description:"Created data pipelines with web scraping frameworks, consolidating 50,000+ data points. Developed NLP models with 85% accuracy for injury case identification. Deployed NLP models as a REST API in Docker for real-time predictions. Technologies: Python, tensorflow, scikit-learn, Keras, Flask, Selenium, Docker."},{company:"FarmBridge",position:"Software Engineering Intern",duration:"Jan 2021 - Aug 2021",description:"Designed a Java application to process 10GB of raw data for client reports. Developed a RESTful API with Spring Boot for efficient database querying. Improved software stability by 25% with JUnit test cases. Technologies: Java, Spring Boot, SQL, JDBC, JSON, MS Access."}],projects:[{name:"Particle Life Simulation",description:"This project includes a particle life simulation where particles are created at random positions and move in random directions. It features a quadtree implementation for efficient neighbor detection.There attraction forces based on particle color influence their movement: red particles attract each other, and green particles attract red particles.",link:"https://www.github.com/harmya/particle-life/"},{name:"Computed Tomography",description:"This project involves tomographic reconstruction. By taking multiple projections, the 2D Fourier Transform of the object can be constructed, and its inverse yields the original object. An example of this process is demonstrated through a CAT scan animation.",link:"https://www.github.com/harmya/tomography/"},{name:"Indoor Scene Recognition",description:"This project presents a novel approach using bound embeddings. It leverages YOLOv9 to generate local information about objects in an image, which is then passed to a pre-trained image classification model for enhanced scene recognition.",link:"https://www.github.com/harmya/indoor-scene-recognition/"}]}},mounted(){this.$refs.focusInput.scrollIntoView({behavior:"smooth"}),this.$refs.focusInput.focus()},methods:{goToFriends(){this.$router.push("/friends")},workSummary(){return this.workExperience.map((e=>`<p><span class="company">${e.company}</span> - <span class="position">${e.position}</span><br>${e.duration}<br>${e.description}</p>`)).join("")},projectsSummary(){const e="Here are some projects I have worked on recently: <br><br>",a='<p> Check out my <u><a href="https://www.github.com/harmya" target="_blank">/gitHub</a></u> for more projects </p>',t=this.projects.map((e=>`<p><a href="${e.link}" class="project-name"><u>${e.name}</u></a><br>${e.description}</p> <br>`)).join("");return`<span class="project-title">${e}</span>${t}<br>${a}`},handleSubmit(e){if("Tab"===e.key){const a=this.$refs.focusInput,t=a.value.trim().toLowerCase(),n=this.commands.map((e=>e.name)).filter((e=>e.startsWith(t)));1===n.length?a.value=n[0]:n.length>1&&(n.sort(),a.value=n[0]),e.preventDefault()}if("Enter"===e.key){const e=this.$refs.focusInput,a=e.value.trim().toLowerCase();e.value="";const t=document.createElement("div"),n=`<p class="prompt">${this.prompt}${a}</p>`;let i="";if("clear"===a)return void document.querySelectorAll(".terminal-output").forEach((e=>e.remove()));i="help"===a||"ls"===a?this.commands.map((e=>`<p>$ <span class="command">${e.name}</span> - ${e.description}</p>`)).join(""):"diya"===a?"goops":"work"===a?this.workSummary():"projects"===a?this.projectsSummary():"skills"===a?"Python, Java, JavaScript, HTML, CSS, SQL, Docker, Flask, Spring Boot, scikit-learn, Keras, TensorFlow, Selenium, pandas, nltk, AWS, Git, JUnit, Cypress":"contact"===a?"Email: hvbhatt@purdue.edu":"Command not found. Type 'help' for a list of commands",t.innerHTML=`${n}<p>${i}</p>`,t.classList.add("terminal-output"),document.querySelector(".terminal-input").before(t),this.$refs.focusInput.scrollIntoView({behavior:"smooth"}),this.$refs.focusInput.focus()}}},created(){setTimeout((()=>{this.mounted=!0}),10)}};const L=(0,c.A)(I,[["render",S]]);var j=L;const A={class:"friend-view animate__animated animate__fadeIn animate__delay-0.3s"},$=(0,i.Fv)('<h1 class="friend-title" data-v-4cc4da82>Friends</h1><h2 data-v-4cc4da82>If you want to know people working on great stuff:</h2><div class="friend-list" data-v-4cc4da82><ul data-v-4cc4da82><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://arefmalek.com/" target="_blank" class="name" data-v-4cc4da82>Aref Malek</a> - AI and Software Engineer at Starlink </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://bhavesh.dev/" target="_blank" class="name" data-v-4cc4da82>Bhavesh Pareekh</a> - Software Engineering, Hosting and basically everything </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://coleroberts.dev" target="_blank" class="name" data-v-4cc4da82>Cole Roberts</a> - Systems/Operating Systems </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://arnavmehra.com/" target="_blank" class="name" data-v-4cc4da82>Arnav Mehra</a> - Algorithms Guy </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://www.zietek.dev/" target="_blank" class="name" data-v-4cc4da82>Jacob Zietek</a> - Robotics and AI Engineer at Armada </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://jinen.setpal.net/" target="_blank" class="name" data-v-4cc4da82>Jinen Setpal</a> - Researcher in ML Interpretability </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://mikail-khan.com" target="_blank" class="name" data-v-4cc4da82>Mikail Khan</a> - PL Nerd and PHD Student at CMU </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://wade.dev/about/" target="_blank" class="name" data-v-4cc4da82>Nicholas Wade</a> - Robotics, AI and great stock picks </p></li><li class="friend-item" data-v-4cc4da82><p data-v-4cc4da82><a href="https://sagarpatil.me/" target="_blank" class="name" data-v-4cc4da82>Sagar Patil</a> - 10x Engineer, AI, SWE and Systems </p></li></ul></div>',3),T=[$];function E(e,a,t,n,r,o){return(0,i.uX)(),(0,i.CE)("div",A,T)}var P={name:"FriendsPage",methods:{goToHome(){this.$router.push("/")}}};const C=(0,c.A)(P,[["render",E],["__scopeId","data-v-4cc4da82"]]);var x=C;const F=[{path:"/friends",name:"FriendsPage",component:x},{path:"/",name:"HomePage",component:j}],D=new m.aE({history:(0,m.LA)("/"),routes:F});var O=D;(0,n.Ef)(d).use(p.A).use(O).mount("#app")}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var r=a[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,n,i,r){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],r=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(d--,1);var l=i();void 0!==l&&(a=l)}}return a}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var i,r,o=n[0],s=n[1],c=n[2],l=0;if(o.some((function(a){return 0!==e[a]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(c)var d=c(t)}for(a&&a(n);l<o.length;l++)r=o[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},n=self["webpackChunkharmya_github_io"]=self["webpackChunkharmya_github_io"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(6965)}));n=t.O(n)})();
//# sourceMappingURL=app.40829eda.js.map