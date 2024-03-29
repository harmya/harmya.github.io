<template>
    <div class="links-to animate__animated animate__fadeInRight animate__delay-0.2s" v-if="mounted">
        <a href="https://www.linkedin.com/in/harmyacs/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="Website" width="50" height="50" text-decoration="None" style="translate: 0px 6px;"></a>
        <a href="https://www.github.com/harmya" target="_blank"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="Website" width="50" height="50" text-decoration="None" style="translate: 0px 6px;"></a>
        <a href="Resume_2023_SWE.pdf" download="harmya_bhatt_resume" target="_blank"><img src="resume.png" alt="Website" width="50" height="50" text-decoration="None" style="translate: 0px 6px;"></a>
        <a href="mailto: hvbhatt@purdue.edu"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/new-post.png" alt="Website" width="50" height="50" text-decoration="None" style="translate: 0px 6px;"></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/home.png" alt="Website" width="50" height="50" text-decoration="None" style="translate: 0px 6px;"></a>
    </div>
    <div class="greeting" v-if="mounted">
        <h1 class="animate__animated animate__slideInLeft animate__delay-0.2s">Hi, I'm <span class="name">Harmya Bhatt</span></h1>
        <h2>Computer Science and Mathematics at <img src="uni_logo.svg" alt="uni logo" style="height: 35px; margin-left: 5px;"> <span class="uni">urdue University</span></h2>
        <h2>Research in <span class="job">Natural Language Processing and Explainable AI</span></h2>
    </div>
    <div class="navigation" v-if="mounted">
        <a class="nav-button" v-on:click="scrollToSummary">About</a>
        <a class="nav-button" v-on:click="scrollToExp">Experience</a>
        <a class="nav-button" v-on:click="scrollToPP">Projects</a>
        <a class="nav-button" v-on:click="scrollToSkills">Skills</a>
    </div>

    <!-- jgn -->

    <div class="sub-heading" v-if="mounted" id="summary">
        <h1 style="font-size: 3em; border-bottom: 1px solid #61677A;">About Me</h1>
        <p class="courses">
            I am a junior at Purdue University majoring in Computer Science and Mathematics. I like AI and Math.
        </p>

        <h3>
            Courses <img src="https://img.icons8.com/doodle/48/null/read.png" alt="Website" width="30" height="30" text-decoration="None" style="translate: 0px 6px;">
        </h3>
        <p class="courses">
            Advanced Topics in Algorithms, Theory of Artificial Intelligence, Systems Programming,
            Data Structures and Algorithms, Computer Architecture, Competitive Programming, Discrete Mathematics, Programming in C and  and Object-Oriented Programming.
        </p>
    </div>

    
    <div class="sub-heading" v-if="mounted" id="exp">
        <h1 style="font-size: 3em; border-bottom: 1px solid #61677A;">Experience <img src="https://img.icons8.com/color/96/null/hard-working.png" alt="Website" width="30" height="40" text-decoration="None" style="translate: 0px 10px;" ></h1>    
        <div class="work-button-group">
            <a class="work-button" v-on:click="exp1 = !exp1; exp2=false; exp3=false; exp4=false; exp5=false;">Purdue CS Department</a>
            <a class="work-button" v-on:click="exp2 = !exp2; exp1=false; exp3=false; exp4=false; exp5=false;">Purdue Pathlology Lab</a>
            <a class="work-button" v-on:click="exp3 = !exp3; exp1=false; exp2=false; exp4=false; exp5=false;">INDESS Labs</a>
            <a class="work-button" v-on:click="exp4 = !exp4; exp1=false; exp2=false; exp3=false; exp5=false;">Discovery Park</a>
            <a class="work-button" v-on:click="exp5 = !exp5; exp1=false; exp2=false; exp3=false; exp4=false;">FarmBridge</a>
        </div>
        <div class="work-description">
            <div class="workexp" v-if="exp1">
            <h2 class="animate__animated animate__lightSpeedInLeft">Teaching Assistant</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.4em;"> 
                <li> - Teaching Assistant for Data Structures and Algorithms (CS 251)</li>
                <li> - Conducted weekly office hours, providing support to students, addressing their questions, and clarifying course concepts.</li>
                <li> - Graded assignments and provided constructive feedback to students, aiding their understanding of course materials.</li>
            </ul>
        </div>

        <div class="workexp" v-if="exp2">
        <h2 class="animate__animated animate__lightSpeedInLeft">Assistant Software Developer</h2>
        <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.4em;"> 
            <li> - Developed Python-based interactive desktop application for calculating and visualizing infectious disease spread risks</li>
            <li> - Incorporated real-time data analysis to enhance accuracy using dynamic data sources </li>
            <li>- Designed intuitive, user-friendly visualizations for effective decision-making in disease control and prevention</li>
        </ul>
        </div>
        <div class="workexp" v-if="exp3">
            <h2 class="animate__animated animate__lightSpeedInLeft">ML Research Intern</h2>
            <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.4em;"> 
                <li>- Developed a robust Flask REST API to integrate a pre-trained Multi-Label Classifier in a system with
microservice architecture enhancing overall functionality</li>
                <li> - Integration of API optimized data flow and improved processing with a 10% increase in efficiency </li>
                <li> - Deployed API on AWS EC2 instances using Docker Container to ensure scalability and high performance </li>
                <li> - Developed in Python using scikit-learn, Keras, pandas, nltk, Flask and Docker </li>
            </ul>
        </div>
        <div class="workexp" v-if="exp4">
        <h2 class="animate__animated animate__lightSpeedInLeft">Research Intern</h2>
        <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.4em;"> 
            <li>- Created Data Pipelines using web scraping and data mining frameworks to consolidate datasets with over 50,000 data points from websites like Amazon, Reddit and Twitter related to product usage</li>
            <li>- Developed Natural Language Processing (NLP) Models with 85% accuracy identifying injury cases, catego- rizing body parts and classifying injury cases</li>
            <li>- Deployed the NLP Models as a REST API within a Docker container to enable real-time predictions</li>
            <li>- Developed in Python using tensorflow, scikit-learn, Keras, Flask, Selenium and Docker</li>
        </ul>
       </div>
       <div class="workexp" v-if="exp5" >
        <h2 class="animate__animated animate__lightSpeedInLeft">Software Engineering Intern</h2>
        <ul class="animate__animated animate__lightSpeedInLeft" style="font-size: 1.4em;"> 
            <li>- Designed and implemented a robust Java application to efficiently process and restructure 10GB of raw data, optimizing it for streamlined analysis and subsequent inclusion in client reports</li>
            <li>- Developed a RESTful API using Spring Boot that implements an efficient endpoint to query SQL database and respond with serialized data in JSON format</li>
            <li>- Tracked and documented bug fixes using JUnit test cases increasing software stability by 15%</li>
            <li>- Developed in Java using Spring Boot, SQL, JDBC, JSON and MS Access</li>
        </ul>
       </div>
        </div>
        
    </div>

    <div class="sub-heading" v-if="mounted" id="research">
        <h1 style="font-size: 3em; border-bottom: 1px solid #61677A;">Research <img src="https://img.icons8.com/color/96/null/brain.png" alt="Website" width="30" height="40" text-decoration="None" style="translate: 0px 10px;"></h1>
        <div class="research-show">
            <a class="research-button">Control My News Feed: Exploring How Users Manipulate Social Media Recommendation Systems</a>
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
                <img src="explain.png" alt="Demo" class="explain-demo animate__animated animate__flipInX" v-if="showexample1">
                
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
                <img src="r1.png" alt="Demo" v-if="showexample2" class="classification-demo animate__animated animate__flipInX" >
                
            </div>
        </div>
    </div>

    <div class="sub-heading" v-if="mounted" id="pp">
        <div class="projects-show">
        <h1 style="font-size: 3em; border-bottom: 1px solid #112D4E;">Personal Projects <img src="https://img.icons8.com/color/96/null/active-directory.png" alt="pp" style="width: 40px; heigh: 50px; translate: 0px 7px;"/> </h1>

        <a class="research-button">Self-Driving Car</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: goldenrod">In Progress</span>
                </h2>
                <p class="research-description">
                   This project aims to train a self-driving car using evolutionary training of neural neworks. On a simulated track, the car will be able to drive itself without any human intervention and navigate through traffic. 
                   Built using the synaptic.js library, JavaScript <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" style="width: 30px; height: 30px; translate: 0px 7px;"/>, 
                   HTML <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" style="width: 30px; height: 30px; translate: 0px 7px;"/>,
                   and CSS <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </p>
                <a class="project-link" href="https://github.com/harmya/SelfDrivingCar" target="_blank">
                    View the project on GitHub<img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
        </div>

        <a class="research-button">Neural Network from Scratch</a>
            <div class="researchexp">
                <h2>
                    Status: <span style="color: goldenrod">In Progress</span>
                </h2>
                <p class="research-description">
                   This project aims to build a neural network from scratch using only numpy and math. The neural network will be able to classify handwritten digits from the MNIST dataset.
                     Built using Python <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" style="width: 30px; height: 30px; translate: 0px 7px;"/>,
                        numpy <img src="https://img.icons8.com/color/48/000000/numpy.png" alt="numpy" style="width: 30px; height: 30px; translate: 0px 7px;"/>,
                        and math <img src="https://img.icons8.com/external-goofy-solid-kerismaker/96/null/external-Math-education-goofy-solid-kerismaker.png" alt="math" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </p>
                <a class="project-link" href="https://github.com/harmya/NeuralNetworkFromScratch" target="_blank">
                    View the project on GitHub<img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
        </div>

        
            

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
                    View the project on GitHub <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
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
                    View the project on GitHub <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
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
                    View the project on GitHub <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
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
                    View the project on GitHub <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
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
                    View the project on GitHub <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" style="width: 30px; height: 30px; translate: 0px 7px;"/>
                </a>
            </div>
        </div>

    </div>

    <div class="sub-heading" v-if="mounted" id="skills">
        <h1 style="font-size: 3em; border-bottom: 1px solid #112D4E; margin-bottom: 25px;">Skills</h1>
        <div class="skill-box">
            <div class="tools">
                <h2 style="margin-bottom: 20px; font-size: 1.6em;"> Languages </h2>
                <p>
                     <img class="lang-icon" src="https://img.icons8.com/color/48/000000/python.png" alt="Python" style="width: 30px; height: 30px; translate: 0px 7px;"/> Python
                </p>
                <p>
                     <img class="lang-icon" src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" style="width: 30px; height: 30px; translate: 0px 7px;"/> Java
                </p>
                
                <p>
                     <img class="lang-icon" src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" style="width: 30px; height: 30px; translate: 0px 7px;"/>  JavaScript
                </p>
                <p>
                     <img class="lang-icon" src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" style="width: 30px; height: 30px; translate: 0px 7px;"/> HTML
                </p>
                <p>
                     <img class="lang-icon" src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" style="width: 30px; height: 30px; translate: 0px 7px;"/> CSS
                </p>
                
                <p>
                    <img class="lang-icon" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++" style="width: 30px; height: 30px; translate: 0px 7px;"/> C++
                </p>
                <p>
                    <img class="lang-icon" src="https://img.icons8.com/color/48/000000/c-programming.png" alt="C" style="width: 30px; height: 30px; translate: 0px 7px;"/> C
                </p>
                <p>
                     <img class="lang-icon" src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" style="width: 30px; height: 30px; translate: 0px 7px;"/> SQL
                </p>
                <p>
                     <img class="lang-icon" src="https://img.icons8.com/color/48/000000/bash.png" alt="Shell Scripting" style="width: 30px; height: 30px; translate: 0px 7px;"/> Shell Scripting
                </p>
                    
            </div>
            
            <div class="tools">
                <h2 style="margin-bottom: 20px; font-size: 1.6em;"> Frameworks </h2>
                <p>
                    <img src="https://img.icons8.com/color/48/000000/tensorflow.png" alt="TensorFlow" style="width: 30px; height: 30px; translate: 0px 7px;"/> TensorFlow
                </p>
                <p>
                    <img src="https://img.icons8.com/ios-filled/50/FA5252/k.png" alt="Keras" style="width: 30px; height: 30px; translate: 0px 7px;"/> Keras
                </p>
                <p>
                    <img src="4bqos6r005.png" alt="PyTorch" style="width: 30px; height: 30px; translate: 0px 7px;"/> PyTorch
                </p>
                <p>
                    <img src="scikit.png" alt="Scikit-Learn" style="width: 50px; height: 30px; translate: 0px 7px;"/> Scikit-Learn
                </p>
                <p>
                    <img src="https://img.icons8.com/color/48/000000/selenium-test-automation.png" alt="Selenium" style="width: 30px; height: 30px; translate: 0px 7px;"/> Selenium
                </p>
                <p>
                    <img src="goopsm.jpg" alt="BeautifulSoup" style="width: 40px; height: 30px; translate: 0px 7px; object-fit: cover; object-position: 0px -25px;"/> BeautifulSoup
                </p>
                <p>
                   <img src="https://img.icons8.com/color/48/000000/pandas.png" alt="pandas" style="width: 30px; height: 30px; translate: 0px 7px;"/> pandas
                </p>
                <p>
                    <img src="https://img.icons8.com/color/48/000000/numpy.png" alt="NumPy" style="width: 30px; height: 30px; translate: 0px 7px;"/> NumPy
                </p>
                <p>
                    <img src="matplotlib.png" alt="Matplotlib" style="width: 30px; height: 30px; translate: 0px 7px;"/> Matplotlib
                </p>
                <p>
                    <img src="scipy.jpeg" alt="SciPy" style="width: 30px; height: 30px; translate: 0px 7px;"/> SciPy
                </p>
                <p>
                    <img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> Vue.js
                </p>
                <p>
                    <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> Node.js
                </p>
                <p>
                    <img src="https://img.icons8.com/color/48/000000/express.png" alt="Express.js" style="width: 30px; height: 30px; translate: 0px 7px;"/> Express.js
                </p>
                <p>
                    <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" style="width: 30px; height: 30px; translate: 0px 7px;"/> MongoDB
                </p>
            </div>
        </div>


    </div>
    <a class="go-to-top" v-on:click="scrollToTop">
            <img src="https://img.icons8.com/cotton/64/null/circled-chevron-up.png" alt="Go to top" style="width: 60px; height: 60px;"/>
    </a>
    <div class="footer">  
        <span class="footer-text">Made with <img src="https://img.icons8.com/color/96/null/vue-js.png" alt="Vue.js" style="width: 50px; height: 50px; translate: 0px 10px; background: transparent;" />By Harmya</span>
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
            showdemo: false,
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
        },
        scrollToTop () {
            //scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
    },
    created () {
        setTimeout(() => {
            this.mounted = true
        }, 10)
    }
}

</script>

<style>
@import '../assets/style.css';
</style>
