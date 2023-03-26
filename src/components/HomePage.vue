<template>

    <div class="greeting" v-if="mounted">
        <h1 class="animate__animated animate__rollIn animate__delay-0.5s">Hi, I'm <span class="name">Harmya Bhatt</span></h1>
        <h2> Research  in  <span class="job">Natural Language Processing, Explainable AI and Recommender Systems</span></h2>
        <h2>Studying Computer Science at <img src="../assets/uni_logo.svg" alt="uni logo"> <span class="uni">urdue University</span></h2>
        <img src="../assets/why.png" alt="greeting gif" class="my-pic">
    </div>

    
    
    <div class="navigation" v-if="mounted">
        <a class="nav-button" v-on:click="scrollToSummary">Summary</a>
        <a class="nav-button" v-on:click="scrollToExp">Work Experience</a>
        <a class="nav-button" v-on:click="scrollToResearch">Research</a>
        <a class="nav-button" v-on:click="scrollToPP">Personal Projects</a>
        <a class="nav-button" v-on:click="scrollToSkills">Skills</a>

    </div>

    <div class="sub-heading" v-if="mounted" id="summary">
        <h1 style="font-size: 3em;">Summary</h1>
        <h3>
            Courses <img src="https://img.icons8.com/color/48/000000/book-reading.png" alt="Website" width="30" height="30" text-decoration="None" style="translate: 0px 6px;">
        </h3>
        <p class="courses">
            Advanced Topics in Algorithms (Upcoming), Artificial Intelligence (Upcoming), Systems Programming,
            Data Structures and Algorithms, Computer Architecture, Competitive Programming, Discrete Mathematics, Programming in C and Problem Solving and Object-Oriented Programming.
        </p>
        <h3>
            Work Experience <img src="https://img.icons8.com/color/96/null/hard-working.png" alt="Website" width="30" height="30" text-decoration="None" style="translate: 0px 6px;"> 
        </h3>
        <ul class="workexp-list">
            <li><b>Research Intern</b> at Office of Undergraduate Research at Purdue University</li>
            <li><b>Research Assistant</b> - Prof. Tianyi Li Research Group</li>
            <li><b>Research Assistant</b> - INDESS (Intelligent Decision Support Systems)</li>
            <li><b>Research Intern</b> - Discovery Park at Purdue University</li>
            <li><b>Software Engineering Intern</b> at FarmBridge - AgTech Startup</li>
        </ul>
        <h3>
            Personal Projects <img src="https://img.icons8.com/dotty/80/FFFFFF/developer.png" alt="Website" width="30" height="30" text-decoration="None" style="translate: 0px 6px;" >    
        </h3>
        <ul class="project-list">
            <li> RateMyResume: A resume reviewer make with Vue.js, MongoDB, Node.js and Express.js</li>
            <li> Productive: A productivity tool made with Vue.js, MongoDB, Node.js and Express.js (Hackathon Project)</li>
            <li> Natural Selection: A vizualizer for genetic algorithms made with JavaScript, HTML and CSS</li>
            <li> Epidemic Simulation: Mathematical Modelling of an epidemic simulated in Python using Tkinter</li>
        </ul>
    </div>

    <div class="sub-heading" v-if="mounted" id="exp">
        <h1>Work Experience <img src="https://img.icons8.com/color/96/null/hard-working.png" alt="Website" width="30" height="40" text-decoration="None" style="translate: 0px 10px;"></h1>
        <div class="work-button-group">
            <a class="work-button" :class="{ 'active': exp1 }"  v-on:click="exp1 = !exp1; exp2 = false; exp3 = false; exp4 = false; exp5=false">Office of Undergraduate Research at Purdue University</a>
            <a class="work-button" :class="{ 'active': exp2 }" v-on:click="exp2 = !exp2; exp1 = false; exp3 = false; exp4 = false; exp5=false">Prof. Tianyi Li Research Group</a>
            <a class="work-button" :class="{ 'active': exp3 }" v-on:click="exp3 = !exp3; exp1 = false; exp2 = false; exp4 = false; exp5=false">INDESS Labs(Intelligent Decision Support Systems)</a>
            <a class="work-button" :class="{ 'active': exp4 }" v-on:click="exp4 = !exp4; exp1 = false; exp2 = false; exp3 = false; exp5=false">Discovery Park at Purdue University</a>
            <a class="work-button"  :class="{ 'active': exp5 }" v-on:click="exp5 = !exp5; exp1 = false; exp2 = false; exp3 = false; exp4=false">FarmBridge - AgTech Startup</a>
        </div>
        
            <div class="workexp" v-if="exp1">
            <h2 class="animate__animated animate__lightSpeedInLeft">Research Intern at Office of Undergraduate Research at Purdue University</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li> Conducting research projects and assisting in operations </li>
            </ul>
        </div>

        <div class="workexp" v-if="exp2">
            <h2 class="animate__animated animate__lightSpeedInLeft">Research Assistant - Prof. Tianyi Li Research Group</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li>Project: Control My News Feed: Exploring Users Manipulate Social Media Recommendation Systems</li>
                <li>Researching social media addiction to build better recommender systems</li>
            </ul>
        </div>

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

        <div class="workexp" v-if="exp5">
            <h2 class="animate__animated animate__lightSpeedInLeft">Software Engineering Intern at FarmBridge - AgTech Startup</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.2em;"> 
                <li>Built a Java Application working in a team of 6 to process 1GB of raw climate data to retrieve, organize and output climate reports used for preparing client pitches.</li>
                <li>Packaged the application for both Windows and macOS systems which reduced 30 work hours per month.</li>
                <li>Prepared data focused presentations with 20 clients resulting in a 90% success rate of securing funding</li>
                <li>Developed in Java <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" width="20" height="20" text-decoration="None"> using JavaFX, Object-Oriented Programming Techniques, SQL, JDBC and MS Access</li>
            </ul>
        </div>
    </div>

    <div class="sub-heading" v-if="mounted" id="research">
        <h1>Research</h1>
        <p>
            To-Do
        </p>
    </div>

    <div class="sub-heading" v-if="mounted" id="pp">
        <h1>Personal Projects</h1>
        <p>
            To-Do
        </p>
    </div>

    <div class="sub-heading" v-if="mounted" id="skills">
        <h1>Skills</h1>
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
    color: #e9e9e9;
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
    color: #e9e9e9;
    animation: slideInRight 1s ease-in-out;
    /*border: 1px solid #e9e9e9; */
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
}
.name {
    color: #159895;
    font-size: 2.5em;
}

.job {
    color: #57C5B6;
    font-size: 1em;
}

.uni {
    color: #F2CD5C;
    font-size: 1em;
    margin-left: -5px;
}

li::marker {
    color: #57C5B6;
    content: "\00BB  ";
}

.courses {
    color: #f4f3f3;
    align-self: flex-start;
    text-align: left;
    font-size: 1.2em;
    padding-left: 20px;
    padding-right: 20px;
}

.workexp-list {
    align-self: flex-start;
    color: #f4f3f3;
    font-size: 1.2em;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
}

.project-list {
    align-self: flex-start;
    color: #f4f3f3;
    font-size: 1.2em;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
}

.nav-button {
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size:18px;
  font-weight: 400;
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

.nav-button:hover, .nav-button:active {
  letter-spacing: 5px;
  color: #57C5B6;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  transition: all 280ms ease-in-out;
}

.my-pic {
    align-self: flex-end;
    margin-top: -200px;
    width: 250px;
    height: 250px;
    margin-right: 50px;
    object-fit: cover;
    object-position: 0 20%;
}

.work-button-group {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    
}

.work-button {
    background-color: #1A5F7A;
    color: #fff;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
}

.work-button-active {
    background-color: #57C5B6;
    color: #fff;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
}

.work-button:hover {
    background-color: #57C5B6;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}
.workexp {
    text-align: left;
    text-decoration: none;
    color: #f4f3f3;
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
