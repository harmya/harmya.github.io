<template>

    <div class="greeting" v-if="mounted">
        <h1 class="animate__animated animate__rollIn animate__delay-0.5s">Hi, I'm <span class="name">Harmya Bhatt</span></h1>
        <h2>Computer Science and Mathematics at <img src="../assets/uni_logo.svg" alt="uni logo" style="height: 25px; margin-left: 5px;"> <span class="uni">urdue University</span></h2>
        <h2> Research  in  <span class="job">Natural Language Processing, Explainable AI and Recommender Systems</span></h2>
        <img src="../assets/cute.jpg" alt="Website" class="my-pic">
    </div>
    <div class="navigation" v-if="mounted">
        <a class="nav-button" v-on:click="scrollToSummary">Summary</a>
        <a class="nav-button" v-on:click="scrollToExp">Work Experience</a>
        <a class="nav-button" v-on:click="scrollToResearch">Research</a>
        <a class="nav-button" v-on:click="scrollToPP">Personal Projects</a>
        <a class="nav-button" v-on:click="scrollToSkills">Skills</a>

    </div>

    <div class="sub-heading" v-if="mounted" id="summary">
        <h1 style="font-size: 3em; border-bottom: 1px solid #112D4E;">Summary</h1>
        <h3>
            Courses <img src="https://img.icons8.com/doodle/48/null/read.png" alt="Website" width="30" height="30" text-decoration="None" style="translate: 0px 6px;">
        </h3>
        <p class="courses">
            Advanced Topics in Algorithms (Upcoming), Artificial Intelligence (Upcoming), Systems Programming,
            Data Structures and Algorithms, Computer Architecture, Competitive Programming, Discrete Mathematics, Programming in C and Problem Solving and Object-Oriented Programming.
        </p>
        <h3>
            Work Experience <img src="https://img.icons8.com/doodle/48/null/laptop--v1.png" alt="Website" width="30" height="30" text-decoration="None" style="translate: 0px 6px;"> 
        </h3>
        <ul class="workexp-list">
            <li> <span class="work-title">Research Intern</span> at <a class="work-place" href="https://www.purdue.edu/undergrad-research/index.php" target="_blank">Office of Undergraduate Research at Purdue University</a></li>
            <li> <span class="work-title">Research Assistant</span> at <a class="work-place" href="https://tl-tianyi-li.github.io/#portfolio" target="_blank">Prof. Tianyi Li Research Group</a>  </li>
            <li> <span class="work-title">Research Assistant</span> at <a class="work-place" href="https://web.ics.purdue.edu/~gnanda/RGroup.html" target="_blank">INDESS Labs (Intelligent Decision Support Systems)</a></li>
            <li> <span class="work-title">Research Intern</span> at <a class="work-place" href="https://www.discoveryparkdistrict.com/" target="_blank">Discovery Park at Purdue University</a></li>
            <li> <span class="work-title">Software Engineering Intern</span> at <a class="work-place" href="http://farmbridge01.weebly.com/our-reach-and-projects.html" target="_blank">FarmBridge AgTech Startup</a></li>
        </ul>
        <h3>
            Personal Projects <img src="https://img.icons8.com/doodle/48/null/goal.png" alt="Website" width="30" height="30" text-decoration="None" style="translate: 0px 6px;" >    
        </h3>
        <ul class="project-list">
            <li> RateMyResume: A resume reviewer make with Vue.js, MongoDB, Node.js and Express.js</li>
            <li> Productive: A productivity tool made with Vue.js, MongoDB, Node.js and Express.js (Hackathon Project)</li>
            <li> Natural Selection: A vizualizer for genetic algorithms made with JavaScript, HTML and CSS</li>
            <li> Epidemic Simulation: Mathematical Modelling of an epidemic simulated in Python using Tkinter</li>
        </ul>
    </div>

    <div class="sub-heading" v-if="mounted" id="exp">
        <h1 style="font-size: 3em; border-bottom: 1px solid #112D4E;">Work Experience <img src="https://img.icons8.com/color/96/null/hard-working.png" alt="Website" width="30" height="40" text-decoration="None" style="translate: 0px 10px;" ></h1>
        <div class="work-button-group">
            <a class="work-button" v-on:click="exp1 = !exp1; ">Office of Undergraduate Research at Purdue University</a>
            <div class="workexp" v-if="exp1">
            <h2 class="animate__animated animate__lightSpeedInLeft">Research Intern at Office of Undergraduate Research at Purdue University</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li> Conducting research projects and assisting in operations </li>
            </ul>
            </div>
            <a class="work-button" v-on:click="exp2 = !exp2; ">Prof. Tianyi Li Research Group</a>
            <div class="workexp" v-if="exp2">
            <h2 class="animate__animated animate__lightSpeedInLeft">Research Assistant - Prof. Tianyi Li Research Group</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li>Project: Control My News Feed: Exploring Users Manipulate Social Media Recommendation Systems</li>
                <li>Researching social media addiction to build better recommender systems</li>
            </ul>
            </div>
            <a class="work-button" v-on:click="exp3 = !exp3; ">INDESS Labs(Intelligent Decision Support Systems)</a>
            <div class="workexp" v-if="exp3">
            <h2 class="animate__animated animate__lightSpeedInLeft">Research Assistant - INDESS (Intelligent Decision Support Systems)</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li>Project: Investigating Explainability of Machine Learning Model Decisions for Injury Surveillance.</li>
                <li>Worked in a team of 5 to build software utilizing Machine Learning Models for predicting injury narratives
                        in the workplace with 92% accuracy.</li>
                <li>Created an explainable interface to explain the model decisions and improve upon its accuracy through
                        human coding by 5%.</li>
                <li>Developed in Python <img src="https://img.icons8.com/color/48/000000/python.png" alt="Website" width="20" height="20" text-decoration="None"> using tensorflow, keras, pandas, numpy, sklearn, matplotlib, LIME, sHap and InterpretML</li>
            </ul>
            </div>
            <a class="work-button" v-on:click="exp4 = !exp4; ">Discovery Park at Purdue University</a>
            <div class="workexp" v-if="exp4">
            <h2 class="animate__animated animate__lightSpeedInLeft">Research Intern - Discovery Park at Purdue University</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li>Project: Text Mining and Classification of Injury Narratives.</li>
                <li>Set up Data Pipelines using web scraping frameworks to create datasets of more than 50,000 data points
                        social media data from websites like Amazon, Reddit and Twitter related to product usage andreviews.</li>
                <li>Worked in a team of 4 to build Natural Language Processing (NLP) Models with 85% accuracy to identify
                        injury cases, categorize body parts and diagnosis of the injury cases.</li>
                <li>Developed in Python <img src="https://img.icons8.com/color/48/000000/python.png" width="20" height="20" text-decoration="None"> using tensorflow, keras, scikit-learn, pandas, BeautifulSoup and Selenium</li>
            </ul>
            </div>
            <a class="work-button" v-on:click="exp5 = !exp5; ">FarmBridge - AgTech Startup</a>
            <div class="workexp" v-if="exp5" >
            <h2 class="animate__animated animate__lightSpeedInLeft">Software Developer - FarmBridge - AgTech Startup</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li>Built a Java Application working in a team of 6 to process 1GB of raw climate data to retrieve, organize and output climate reports used for preparing client pitches.</li>
                <li>Packaged the application for both Windows and macOS systems which reduced 30 work hours per month.</li>
                <li>Prepared data focused presentations with 20 clients resulting in a 90% success rate of securing funding</li>
                <li>Developed in Java <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" width="20" height="20" text-decoration="None"> using JavaFX, Object-Oriented Programming Techniques, SQL, JDBC and MS Access</li>
            </ul>
            </div>
        </div>
        
    </div>

    <div class="sub-heading" v-if="mounted" id="research">
        <h1 style="font-size: 3em; border-bottom: 1px solid #112D4E;">Research <img src="https://img.icons8.com/color/96/null/brain.png" alt="Website" width="30" height="40" text-decoration="None" style="translate: 0px 10px;"></h1>
        <div class="research-show">
            <a class="research-button">Control My News Feed: Exploring Users Manipulate Social Media Recommendation Systems</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: darkred;">In Progress</span>
                </h2>
                <p class="research-description">
                    Social media addiction is a growing concern in the 21st century. While it is clear why people get addicted to social media, we have little knowledge about the coping mechanism people use to deal with their addiction. This project aims to research the mechanism people use to deal with their addiction to short form video social media platforms like TikTok, Instagram, YouTube Shorts etc. With the knowledge of mechanisms, we will be able to build systems to help people combat their addiction.
                </p>
                
            </div>
            <a class="research-button">Investigating Explainability of Machine Learning Model Decisions for Injury Surveillance</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: green">Concluded with a Presentation at Purdue's Fall 2023 Research Symposium</span>
                </h2>
                <h2>
                    <a style="color: darkorange" href="https://purdue0-my.sharepoint.com/:b:/g/personal/hvbhatt_purdue_edu/Ef6SOzlU0rRLl7Gm7r0bgp0BDINVYJIGwzM5XVqyZ_6JLQ?e=PLoFJW" target="_blank">View our Poster</a> for Purdue's Fall 2022 Research Symposium
                </h2>
                <!-- <h2>
                    <a href="https://github.com/harmya/TextMiningAndInjuryClassification" target="_blank">Read</a> more about the project 
                </h2> -->
                <p class="research-description">
                    Injury Surveillance in the public health sector is done by humans based on accident narratives in hospitals. This project aims at using machine learning and natural language processing approaches to identify parts of the narratives that are the most responsible for the ML model decisions by using Explainable Artificial Intelligence (XAI) methods to generate explanations for the ML model decisions at the global (for the entire dataset) and local (for a particular narrative) levels.
                </p>
                <h2 style="align-self: center;">
                    <a class="example-toggle" v-on:click="showexample1 = !showexample1">View Snippet of a local LIME explanation for an Arbritary Narrative </a>
                </h2>
                <img src="../assets/explain.png" alt="Demo" class="explain-demo animate__animated animate__flipInX" v-if="showexample1">
                
            </div>
            <a class="research-button">Text Mining and Classification of Injury Narratives</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: olive">Writing a Research Paper</span>
                </h2>
                <h2>
                    <a style="color: darkorange" href="https://purdue0-my.sharepoint.com/:p:/g/personal/hvbhatt_purdue_edu/EQMHxrOJkfpLuB_eJpXNSu8BmddxqcyJGQAHG3cs9bjACg?e=JbThBJ" target="_blank">View our presentation</a> for Purdue's Summer 2022 Research Symposium
                </h2>
                <p class="research-description">
                    In injury surveillance, different aspects of an injury event are captured using injury codes. This task is usually done by human coders and then the data is used for statistical analysis. This project aims to identify various elements of injury surveillance like cause of injury, product involved, nature of injury and so on from the textual narrative of the injury using machine learning and natural language processing approaches.
                </p>
                <h2 style="align-self: center;">
                    <a class="example-toggle" v-on:click="showexample2 = !showexample2">View Result of Analysis of injured body parts for Skateboard Injury Narratives</a>
                </h2>
                <img src="../assets/r1.png" alt="Demo" v-if="showexample2" class="classification-demo animate__animated animate__flipInX" >
                
            </div>
        </div>
    </div>

    <div class="sub-heading" v-if="mounted" id="pp">
        <div class="projects-show">
        <h1 style="font-size: 3em; border-bottom: 1px solid #112D4E;">Personal Projects <img src="https://img.icons8.com/color/96/null/active-directory.png" alt="pp" style="width: 40px; heigh: 50px; translate: 0px 7px;"/> </h1>
        <a class="research-button">RateMyResume</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: green">Complete</span>
                </h2>
                <p class="research-description">
                   RateMyResume is a web application that allows users to upload their resumes and get a score of their resume. The application is built using the MEVN stack and uses 
                   MongoDB <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" style="width: 30px; height: 30px; translate: 0px 7px;"/>, 
                   Express.js <img src="https://img.icons8.com/color/48/000000/express.png" alt="Express.js" style="width: 30px; height: 30px; translate: 0px 7px;"/>, 
                   Vue.js <img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> and 
                   Node.js <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> 
                </p>
                <a class="project-link" href="https://github.com/harmya/resumereviewer" target="_blank">
                    View the project <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
            </div>
        <a class="research-button">Productive (Hackathon Project)</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: green">Complete</span>
                </h2>
                <p class="research-description">
                    Productive is a web application that allows users to track their productivity.
                    Built using the MERN stack and 
                    uses MongoDB <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                    Express.js <img src="https://img.icons8.com/color/48/000000/express.png" alt="Express.js" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                    React.js <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> and 
                    Node.js <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> 
                </p>
                <a class="project-link" href="https://github.com/harmya/productive" target="_blank">
                    View the project <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
            </div>
        <a class="research-button">To-Do List Web App</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: green">Complete</span>
                </h2>
                <p class="research-description">
                    A simple web application that allows users to create a to-do list. This is my first application when I was learning JavaScript Frameworks. Built using <img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> Vue.js
                </p>
                <a class="project-link" href="https://github.com/harmya/todolist" target="_blank">
                    View the project <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
            </div>
        <a class="research-button">Epidemic Simulation</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: green">Complete</span>
                </h2>
                <p class="research-description">
                    Mathematical Vizualization of the SIR Model of Epidemic Spread. Built using <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" style="width: 30px; height: 30px; translate: 0px 7px;"/> Python's tkinter library
                </p>
                <a class="project-link" href="https://github.com/harmya/EpidemicSimulation" target="_blank">
                    View the project <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
            </div>
        <a class="research-button">Natural Selection</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: green">Complete</span>
                </h2>
                <p class="research-description">
                    A simulation of natural selection and genetic algorithms. Built using <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" style="width: 30px; height: 30px; translate: 0px 7px;"/> JavaScript, <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" style="width: 30px; height: 30px; translate: 0px 7px;"/> HTML and <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" style="width: 30px; height: 30px; translate: 0px 7px;"/> CSS
                </p>
                <a class="project-link" href="https://github.com/harmya/NaturalSelection" target="_blank">
                    View the project <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
            </div>
        
        </div>
    </div>

    <div class="sub-heading" v-if="mounted" id="skills">
        <h1 style="font-size: 3em; border-bottom: 1px solid #112D4E;">Skills</h1>
        <p>
            To-Do
        </p>

    </div>


</template>

<script>

import 'animate.css';

export default {
    name: 'HomePage',
    data () {
        return {
            mounted: false,
            exp1: false,
            exp2: false,
            exp3: false,
            exp4: false,
            exp5: false,
            showexample1: false,
            showexample2: false,
        }
    },
    methods: {
        changeMessage () {
            this.message = 'Hello Vue!'
        },
        scrollToSummary () {
            document.getElementById('summary').scrollIntoView({ behavior: 'smooth' })
        },
        scrollToExp () {
            document.getElementById('exp').scrollIntoView({ behavior: 'smooth' })
        },
        scrollToResearch () {
            document.getElementById('research').scrollIntoView({ behavior: 'smooth' })
        },
        scrollToPP () {
            document.getElementById('pp').scrollIntoView({ behavior: 'smooth' })
        },
        scrollToSkills () {
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
        }
    },
    created () {
        setTimeout(() => {
            this.mounted = true
        }, 10)
    }
}

</script>

<style>
.greeting {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    color: #112D4E;
    /* border: 1px solid #e9e9e9; */
    animation: slideInLeft 1s ease-in-out;
    margin-left: 50px;
}

.navigation {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: #112D4E;
    animation: slideInRight 1s ease-in-out;
    /*border: 1px solid #e9e9e9; */
}

.icon {
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.sub-heading {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: fadeIn 2s ease-in-out;
    /* border: 1px solid #e9e9e9; */
    margin-left: 10%;
    margin-right: 10%;
    transition: opacity 1s ease-in-out;
    
}

h3 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    margin-bottom: -10px;
    text-align: left;
    align-self: start;
    margin-left: 20px;

}
h2 {
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-align: left;
    /* border: white 1px solid; */
}


.name {
    color: #112D4E;
    font-size: 2.5em;
}

.job {
    color: #3F72AF;
    font-size: 1em;
}

.uni {
    color: #a8892b;
    font-size: 1em;
    margin-left: -5px;
}
.nav-button {
  text-align: center;
  color: #3F72AF;
  cursor: pointer;
  font-size:18px;
  font-weight: 600;
  line-height: 45px;
  margin: 0 0 2em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  @media(min-width: 600px) {
    margin: 0 1em 2em;
  }
}
li::marker {
    color: #112D4E;
    content: "";
}

.courses {
    color: #3F72AF;
    align-self: flex-start;
    text-align: left;
    font-size: 1.2em;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 600;
}

.workexp-list {
    align-self: flex-start;
    color: #3F72AF;
    font-size: 1.2em;
    font-weight: 600;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
}

.work-place {
    color: #112D4E;
    font-size: 1.1em;
    font-weight: 600;
    text-align: left;
}

.work-title {
    color: #3F72AF;
    font-size: 1em;
    font-weight: 800;
    text-align: left;
}

.project-list {
    align-self: flex-start;
    color: #3F72AF;
    font-size: 1.2em;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 600;
}



.nav-button:hover, .nav-button:active {
  letter-spacing: 5px;
  color: #112D4E;
  border-bottom: 1px solid #3F72AF;
  border-top: 1px solid #3F72AF;
  transition: all 280ms ease-in-out;
}

.my-pic {
    align-self: flex-end;
    margin-top: -200px;
    width: 250px;
    height: 250px;
    margin-right: 50px;
    object-fit: cover;
    object-position: 90% 40%;
    border: transparent;
    border-radius: 50%;
    box-shadow: 0 0 50px 15px #DBE2EF;
}

.work-button-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: 1px solid #e9e9e9; */
    width: 100%;
    border-radius: 5px;
}

.work-button {
    background-color: #3F72AF;
    color: #DBE2EF;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 8px 4px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.5em;
    font-weight: 600;
}

.work-button:hover {
    background-color: #112D4E;
    box-shadow: 0 0 50px 5px #d3dff5;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}
.workexp {
    text-align: left;
    text-decoration: none;
    color: #112D4E;
}

.research-show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: 1px solid #e9e9e9; */
    width: 100%;
    border-radius: 5px;
}

.project-show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin-top: 20px;
    margin-bottom: 20px;
    /* border: 1px solid #e9e9e9; */
    width: 100%;
    border-radius: 5px;
}

.project-link {
    color: #112D4E;
    font-size: 1.3em;
    font-weight: 600;
    text-align: left;
}
.researchexp {
    text-align: left;
    text-decoration: none;
    color: #112D4E;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
}

.research-button {
    background-color: #DBE2EF;
    color: #112D4E;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 8px 4px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.5em;
    font-weight: 600;
}

.research-description {
    color: #112D4E;
    font-size: 1.3em;
    font-weight: 400;
    text-align: left;
    /* border: 1px solid black; */
}
.explain-demo {
    width: 100%;
    box-shadow: 0 0 50px 5px #DBE2EF;
    margin: 50px 0;
}

.classification-demo {
    width: 100%;
    box-shadow: 0 0 50px 5px #DBE2EF;
    margin: 50px 0;
}

.example-toggle {
    color: black;
    background-color: lightblue;
    padding: 5px 20px;
    border-radius: 5px;
}

.example-toggle:hover {
    cursor: pointer;
    background-color: #3F72AF;
    color: white;
    box-shadow: 0 0 50px 5px #b3c9f1;
    transition: all 0.5s ease-in-out;
}


.slideInLeft {
  animation-name: slideInLeft;
}

.slideInRight {
  animation-name: slideInRight;
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%);
  }
  60% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}






</style>
