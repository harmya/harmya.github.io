<template>
  <div class="app-container>">
    <div
      class="links-to animate__animated animate__fadeInRight animate__delay-0.2s"
      v-if="mounted"
    >
      <a href="https://www.linkedin.com/in/harmyacs/" target="_blank">
        <span class="links-text">\about</span></a
      >
      <a href="https://www.github.com/harmya" target="_blank">
        <span class="links-text">\github</span></a
      >
      <a
        href="Resume_2024.pdf"
        download="harmya_bhatt_resume"
        target="_blank"
      >
        <span class="links-text">\resume</span></a
      >
      <a href="mailto: hvbhatt@purdue.edu" target="_blank">
        <span class="links-text">\contact</span></a
      >
      <span class="links-text" @click="goToFriends">\friends</span>
    </div>
    <div
      class="greeting animate__animated animate__fadeInLeft animate__delay-0.2s"
    >
      <h1>Hello, I'm Harmya Bhatt</h1>
      <p>I like to build things with code</p>
    </div>
    <div
      class="container animate__animated animate__fadeIn animate__delay-0.3s"
    >
      <div class="terminal-menu">
        <div class="buttons-container">
          <div class="button-red"></div>
          <div class="button-yellow"></div>
          <div class="button-green"></div>
        </div>
        <div class="terminal-title">
          <h1><a href="https://harmya.me" target="_blank"> harmya.me </a></h1>
        </div>
      </div>
      <div class="terminal">
        <div class="terminal-intro">
          <p
            class="welcome-message"
            style="padding-bottom: 5px; padding-left: 5px"
          >
            Logged in as <span class="username">visitor</span>
          </p>
        </div>
        <div class="terminal-input">
          <p class="prompt">visitor@home:~$&nbsp;</p>
          <input
            ref="focusInput"
            @keydown="handleSubmit"
            type="text"
            class="input"
            placeholder="Type 'help' for a list of commands"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'HomePage',
  data() {
    return {
      mounted: false,
      prompt: 'visitor@home:~$ ',
      commands: [
        {
          name: 'help',
          description: 'List all available commands',
        },
        {
          name: 'work',
          description: 'Summary of my work experience',
        },
        {
          name: 'projects',
          description: 'Projects I have worked on',
        },

        {
          name: 'skills',
          description: 'List of skills I have',
        },

        {
          name: 'contact',
          description: 'Ways to contact me',
        },
        {
          name: 'clear',
          description: 'Clear the terminal',
        },
      ],

      workExperience: [
        {
          company: 'Cohere Health',
          position: 'Software Engineering Intern',
          duration: 'Jun 2024 - Present',
          description:
            'Integrating ML tools for seamless prior authorizations, developing and releasing front-end and back-end features, writing Cypress tests. Working on automation solutions to digitize workflows and improve patient outcomes.',
        },
        {
          company:
            'Purdue University: INDESS Research Group',
          position: 'ML Research Intern',
          duration: 'May 2023 - Aug 2023',
          description:
            'Developed a Flask REST API to integrate a Multi-Label Classifier within a microservice architecture. Optimized data flow and processing, improving efficiency by 10%. Deployed API on AWS EC2 using Docker for scalability. Technologies: Python, scikit-learn, Keras, pandas, nltk, Flask, Docker.',
        },
        {
          company: 'Discovery Park at Purdue University',
          position: 'Research Intern',
          duration: 'May 2022 - Aug 2022',
          description:
            'Created data pipelines with web scraping frameworks, consolidating 50,000+ data points. Developed NLP models with 85% accuracy for injury case identification. Deployed NLP models as a REST API in Docker for real-time predictions. Technologies: Python, tensorflow, scikit-learn, Keras, Flask, Selenium, Docker.',
        },
        {
          company: 'FarmBridge',
          position: 'Software Engineering Intern',
          duration: 'Jan 2021 - Aug 2021',
          description:
            'Designed a Java application to process 10GB of raw data for client reports. Developed a RESTful API with Spring Boot for efficient database querying. Improved software stability by 25% with JUnit test cases. Technologies: Java, Spring Boot, SQL, JDBC, JSON, MS Access.',
        },
      ],

      projects: [
  {
    name: 'Particle Life Simulation',
    description: 'This project includes a particle life simulation where particles are created at random positions and move in random directions. It features a quadtree implementation for efficient neighbor detection.There attraction forces based on particle color influence their movement: red particles attract each other, and green particles attract red particles.',
    link: 'https://www.github.com/harmya/particle-life/'
  },
  {
    name: 'Computed Tomography',
    description: 'This project involves tomographic reconstruction. By taking multiple projections, the 2D Fourier Transform of the object can be constructed, and its inverse yields the original object. An example of this process is demonstrated through a CAT scan animation.',
    link: 'https://www.github.com/harmya/tomography/'
  },
  {
    name: 'Indoor Scene Recognition',
    description: 'This project presents a novel approach using bound embeddings. It leverages YOLOv9 to generate local information about objects in an image, which is then passed to a pre-trained image classification model for enhanced scene recognition.',
    link: 'https://www.github.com/harmya/indoor-scene-recognition/'
  },
]

    };
  },
  mounted() {
    this.$refs.focusInput.scrollIntoView({ behavior: 'smooth' });
    this.$refs.focusInput.focus();
  },
  methods: {
    goToFriends() {
      this.$router.push('/friends');
    },
    workSummary() {
      return this.workExperience
        .map(
          (w) =>
            `<p><span class="company">${w.company}</span> - <span class="position">${w.position}</span><br>${w.duration}<br>${w.description}</p>`,
        )
        .join('');
    },

    projectsSummary() {
      const titleMessage = 'Here are some projects I have worked on recently: <br><br>';
      const endMessage = '<p> Check out my <u><a href="https://www.github.com/harmya" target="_blank">/gitHub</a></u> for more projects </p>';
      const projects = this.projects
        .map(
          (p) =>
            `<p><a href="${p.link}" class="project-name"><u>${p.name}</u></a><br>${p.description}</p> <br>`,
        )
        .join('');
      return `<span class="project-title">${titleMessage}</span>${projects}<br>${endMessage}`;
    },
    handleSubmit(event) {
      if (event.key === 'Tab') {
        //autocomplete
        const input = this.$refs.focusInput;
        const command = input.value.trim().toLowerCase();
        const matches = this.commands
          .map((c) => c.name)
          .filter((c) => c.startsWith(command));
        
        if (matches.length === 1) {
          input.value = matches[0];
        } else if (matches.length > 1) {
          matches.sort();
          input.value = matches[0];
        }
        event.preventDefault();
      }
      if (event.key === 'Enter') {
        const input = this.$refs.focusInput;
        const command = input.value.trim().toLowerCase();
        input.value = '';

        const newLine = document.createElement('div');
        const promtAndCommand = `<p class="prompt">${this.prompt}${command}</p>`;
        let output = '';

        if (command === 'clear') {
          document
            .querySelectorAll('.terminal-output')
            .forEach((e) => e.remove());
          return;
        } else if (command === 'help' || command === 'ls') {
          output = this.commands
            .map(
              (c) =>
                `<p>$ <span class="command">${c.name}</span> - ${c.description}</p>`,
            )
            .join('');
        } else if (command === 'diya') {
          output = 'goops';
        } else if (command === 'work') {
          output = this.workSummary();
        } else if (command === 'projects') {
          output = this.projectsSummary();
        } else if (command === 'skills') {
          output = 'Python, Java, JavaScript, HTML, CSS, SQL, Docker, Flask, Spring Boot, scikit-learn, Keras, TensorFlow, Selenium, pandas, nltk, AWS, Git, JUnit, Cypress';
        } else if (command === 'contact') {
          output = 'Email: hvbhatt@purdue.edu';
        }
        else {
          output = "Command not found. Type 'help' for a list of commands";
        }

        newLine.innerHTML = `${promtAndCommand}<p>${output}</p>`;
        newLine.classList.add('terminal-output');
        document.querySelector('.terminal-input').before(newLine);
        this.$refs.focusInput.scrollIntoView({ behavior: 'smooth' });
        this.$refs.focusInput.focus();
      }
    },
  },
  created() {
    setTimeout(() => {
      this.mounted = true;
    }, 10);
  },
};
</script>

<style>
@import '../assets/style.css';
</style>
