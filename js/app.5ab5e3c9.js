(function(){"use strict";var e={7563:function(e,t,a){var n=a(3751),i=a(641);const r={id:"app"};function s(e,t,a,n,s,o){const l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(l)])}var o={name:"App"},l=a(6262);const c=(0,l.A)(o,[["render",s]]);var d=c,p=a(2433),m=a(5220);const u={class:"app-container>"},h={key:0,class:"links-to animate__animated animate__fadeInRight animate__delay-0.2s"},f=(0,i.Fv)('<a href="https://www.linkedin.com/in/harmyacs/" target="_blank"><span class="links-text">/about</span></a><a href="https://www..com/harmya" target="_blank"><span class="links-text">/github</span></a><a href="Resume_2024.pdf" download="harmya_bhatt_resume" target="_blank"><span class="links-text">/resume</span></a><a href="mailto: hvbhatt@purdue.edu" target="_blank"><span class="links-text">/contact</span></a>',4),v=(0,i.Lk)("div",{class:"greeting animate__animated animate__fadeInLeft animate__delay-0.2s"},[(0,i.Lk)("h1",null,"Hello, I'm Harmya Bhatt"),(0,i.Lk)("p",null,"I like to build things with code")],-1),g={class:"container animate__animated animate__fadeIn animate__delay-0.3s"},k=(0,i.Fv)('<div class="terminal-menu"><div class="buttons-container"><div class="button-red"></div><div class="button-yellow"></div><div class="button-green"></div></div><div class="terminal-title"><h1><a href="https://harmya.me" target="_blank"> harmya.me </a></h1></div></div>',1),y={class:"terminal"},b=(0,i.Lk)("div",{class:"terminal-intro"},[(0,i.Lk)("p",{class:"welcome-message",style:{"padding-bottom":"5px","padding-left":"5px"}},[(0,i.eW)(" Logged in as "),(0,i.Lk)("span",{class:"username"},"visitor")])],-1),w={class:"terminal-input"},_=(0,i.Lk)("p",{class:"prompt"},"visitor@home:~$ ",-1);function S(e,t,a,n,r,s){return(0,i.uX)(),(0,i.CE)("div",u,[r.mounted?((0,i.uX)(),(0,i.CE)("div",h,[f,(0,i.Lk)("span",{class:"links-text",onClick:t[0]||(t[0]=(...e)=>s.goToFriends&&s.goToFriends(...e))},"/friends")])):(0,i.Q3)("",!0),v,(0,i.Lk)("div",g,[k,(0,i.Lk)("div",y,[b,(0,i.Lk)("div",w,[_,(0,i.Lk)("input",{ref:"focusInput",onKeydown:t[1]||(t[1]=(...e)=>s.handleSubmit&&s.handleSubmit(...e)),type:"text",class:"input",placeholder:"Type 'help' for a list of commands"},null,544)])])])])}a(4114);var I={name:"HomePage",data(){return{mounted:!1,prompt:"visitor@home:~$ ",commands:[{name:"help",description:"List all available commands"},{name:"work",description:"Summary of my work experience"},{name:"projects",description:"Projects I have worked on"},{name:"skills",description:"List of skills I have"},{name:"contact",description:"Ways to contact me"},{name:"clear",description:"Clear the terminal"},{name:"cd",description:"Go to a specific directory (listed above)"}],workExperience:[{company:"Cohere Health",position:"Software Engineering Intern",duration:"Jun 2024 - Present",description:"Integrating ML tools for seamless prior authorizations, developing and releasing front-end and back-end features, writing Cypress tests. Working on automation solutions to digitize workflows and improve patient outcomes."},{company:"Purdue University: INDESS Research Group",position:"ML Research Intern",duration:"May 2023 - Aug 2023",description:"Developed a Flask REST API to integrate a Multi-Label Classifier within a microservice architecture. Optimized data flow and processing, improving efficiency by 10%. Deployed API on AWS EC2 using Docker for scalability. Technologies: Python, scikit-learn, Keras, pandas, nltk, Flask, Docker."},{company:"Discovery Park at Purdue University",position:"Research Intern",duration:"May 2022 - Aug 2022",description:"Created data pipelines with web scraping frameworks, consolidating 50,000+ data points. Developed NLP models with 85% accuracy for injury case identification. Deployed NLP models as a REST API in Docker for real-time predictions. Technologies: Python, tensorflow, scikit-learn, Keras, Flask, Selenium, Docker."},{company:"FarmBridge",position:"Software Engineering Intern",duration:"Jan 2021 - Aug 2021",description:"Designed a Java application to process 10GB of raw data for client reports. Developed a RESTful API with Spring Boot for efficient database querying. Improved software stability by 25% with JUnit test cases. Technologies: Java, Spring Boot, SQL, JDBC, JSON, MS Access."}],projects:[{name:"Particle Life Simulation",description:"This project includes a particle life simulation where particles are created at random positions and move in random directions. It features a quadtree implementation for efficient neighbor detection.There attraction forces based on particle color influence their movement: red particles attract each other, and green particles attract red particles.",link:"https://www.github.com/harmya/particle-life/"},{name:"Computed Tomography",description:"This project involves tomographic reconstruction. By taking multiple projections, the 2D Fourier Transform of the object can be constructed, and its inverse yields the original object. An example of this process is demonstrated through a CAT scan animation.",link:"https://www.github.com/harmya/tomography/"},{name:"Indoor Scene Recognition",description:"This project presents a novel approach using bound embeddings. It leverages YOLOv9 to generate local information about objects in an image, which is then passed to a pre-trained image classification model for enhanced scene recognition.",link:"https://www.github.com/harmya/indoor-scene-recognition/"}],userHistory:[],commandCounter:0}},mounted(){this.$refs.focusInput.scrollIntoView({behavior:"smooth"}),this.$refs.focusInput.focus()},methods:{goToFriends(){this.$router.push("/friends")},workSummary(){return this.workExperience.map((e=>`<p><span class="company">${e.company}</span> - <span class="position">${e.position}</span><br>${e.duration}<br>${e.description}</p>`)).join("")},projectsSummary(){const e="Here are some projects I have worked on recently: <br><br>",t='<p> Check out my <u><a href="https://www.github.com/harmya" target="_blank">/gitHub</a></u> for more projects </p>',a=this.projects.map((e=>`<p><a href="${e.link}" class="project-name"><u>${e.name}</u></a><br>${e.description}</p> <br>`)).join("");return`<span class="project-title">${e}</span>${a}<br>${t}`},handleSubmit(e){if("Tab"===e.key){const t=this.$refs.focusInput,a=t.value.trim().toLowerCase(),n=this.commands.map((e=>e.name)).filter((e=>e.startsWith(a)));1===n.length?t.value=n[0]:n.length>1&&(n.sort(),t.value=n[0]),e.preventDefault()}if("Enter"===e.key){const e=this.$refs.focusInput,t=e.value.trim().toLowerCase();e.value="";const a=document.createElement("div"),n=`<p class="prompt">${this.prompt}${t}</p>`;let i="";if(t&&(this.userHistory.push(t),this.commandCounter=this.userHistory.length),console.log(this.userHistory),"clear"===t)return void document.querySelectorAll(".terminal-output").forEach((e=>e.remove()));i="help"===t||"ls"===t?this.commands.map((e=>`<p>$ <span class="command">${e.name}</span> - ${e.description}</p>`)).join(""):"diya"===t?"goops":"work"===t?this.workSummary():"projects"===t?this.projectsSummary():"skills"===t?"Python, Java, JavaScript, HTML, CSS, SQL, Docker, Flask, Spring Boot, scikit-learn, Keras, TensorFlow, Selenium, pandas, nltk, AWS, Git, JUnit, Cypress":"contact"===t?"Email: hvbhatt@purdue.edu":""===t?"":"Command not found. Type 'help' for a list of commands",a.innerHTML=`${n}<p>${i}</p>`,a.classList.add("terminal-output"),document.querySelector(".terminal-input").before(a),this.$refs.focusInput.scrollIntoView({behavior:"smooth"}),this.$refs.focusInput.focus()}else if("ArrowUp"===e.key){console.log(this.commandCounter);const e=this.$refs.focusInput,t=-1===this.commandCounter||0===this.commandCounter?0:this.commandCounter-1,a=this.userHistory[t];a&&(e.value="",e.value=a,setTimeout((()=>{e.setSelectionRange(e.value.length,e.value.length)}),10),this.commandCounter=t)}else if("ArrowDown"===e.key){console.log(this.commandCounter),console.log(this.userHistory.length);const e=this.$refs.focusInput,t=this.commandCounter===this.userHistory.length?this.userHistory.length:this.commandCounter+1;if(t===this.userHistory.length)return e.value="",void(this.commandCounter=this.userHistory.length);const a=this.userHistory[t];a&&(e.value="",e.value=a,setTimeout((()=>{e.setSelectionRange(e.value.length,e.value.length)}),10),this.commandCounter=t)}}},created(){setTimeout((()=>{this.mounted=!0}),10)}};const C=(0,l.A)(I,[["render",S]]);var L=C;const j={class:"friend-view animate__animated animate__fadeIn animate__delay-0.3s"},A=(0,i.Fv)('<h1 class="friend-title" data-v-496ef984>Friends</h1><h2 data-v-496ef984>If you want to know people working on great stuff:</h2><div class="friend-list" data-v-496ef984><ul data-v-496ef984><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://arefmalek.com/" target="_blank" class="name" data-v-496ef984>Aref Malek</a> - AI and Software Engineer at Starlink </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://bhavesh.dev/" target="_blank" class="name" data-v-496ef984>Bhavesh Pareek</a> - Software Engineering, Hosting and basically everything </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://coleroberts.dev" target="_blank" class="name" data-v-496ef984>Cole Roberts</a> - Systems/Operating Systems </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://arnavmehra.com/" target="_blank" class="name" data-v-496ef984>Arnav Mehra</a> - Algorithms Guy </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://www.zietek.dev/" target="_blank" class="name" data-v-496ef984>Jacob Zietek</a> - Robotics and AI Engineer at Armada </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://jinen.setpal.net/" target="_blank" class="name" data-v-496ef984>Jinen Setpal</a> - Researcher in ML Interpretability </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://mikail-khan.com" target="_blank" class="name" data-v-496ef984>Mikail Khan</a> - PL Nerd and PHD Student at CMU </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://wade.dev/about/" target="_blank" class="name" data-v-496ef984>Nicholas Wade</a> - Robotics, AI and great stock picks </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://sagarpatil.me/" target="_blank" class="name" data-v-496ef984>Sagar Patil</a> - 10x Engineer, AI, SWE and Systems </p></li><li class="friend-item" data-v-496ef984><p data-v-496ef984><a href="https://www.sarthakmangla.com/" target="_blank" class="name" data-v-496ef984>Sarthak Mangla</a> - Software, AI and Cole Palmer Fan </p></li></ul></div>',3),$=[A];function T(e,t,a,n,r,s){return(0,i.uX)(),(0,i.CE)("div",j,$)}var P={name:"FriendsPage",methods:{goToHome(){this.$router.push("/")}}};const E=(0,l.A)(P,[["render",T],["__scopeId","data-v-496ef984"]]);var H=E;const F=[{path:"/friends",name:"FriendsPage",component:H},{path:"",name:"HomePage",component:L}],x=new m.aE({history:(0,m.Bt)(),routes:F});var D=x;(0,n.Ef)(d).use(p.A).use(D).mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],r=e[d][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,r<s&&(s=r));if(o){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,s=n[0],o=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var d=l(a)}for(t&&t(n);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunkharmya_github_io"]=self["webpackChunkharmya_github_io"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(7563)}));n=a.O(n)})();
//# sourceMappingURL=app.5ab5e3c9.js.map