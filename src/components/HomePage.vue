<template>
  <div class="app-container">
    <!-- Main content that will be hidden when friends is shown -->
    <div v-if="!showingFriends">
      <div
        class="links-to animate__animated animate__fadeInRight animate__delay-0.2s"
        v-if="mounted"
      >
        <a
          href="https://www.linkedin.com/in/harmyacs/"
          target="_blank"
          ref="linkedin"
        >
          <span class="links-text">/linkedin</span></a
        >
        <a href="https://www.github.com/harmya" target="_blank" ref="github">
          <span class="links-text">/github</span></a
        >
        <a
          href="harmya_2025.pdf"
          download="harmya_bhatt_resume"
          target="_blank"
          ref="resume"
        >
          <span class="links-text">/resume</span></a
        >
        <a href="mailto: hvbhatt@purdue.edu" target="_blank" ref="email">
          <span class="links-text">/contact</span></a
        >
        <span class="links-text" @click.prevent="goToFriends" ref="friends">
          /friends</span
        >
        <span
          class="links-text terminal-toggle"
          @click.prevent="toggleTerminal"
          ref="terminal"
        >
          {{ showingTerminal ? '/home' : '/terminal' }}</span
        >
      </div>
      <div
        class="greeting animate__animated animate__fadeInLeft animate__delay-0.2s"
      >
        <h1>Hello, I'm Harmya Bhatt</h1>
        <p>I like math, ML and software</p>
      </div>

      <!-- Text Summary View (default) -->
      <div
        v-if="!showingTerminal"
        class="summary-container animate__animated animate__fadeIn animate__delay-0.3s"
      >
        <div class="summary-content">
          <div class="bio-paragraph">
            <p>
              I study Computer Science (and some Math) at Purdue University.
              <br />
              <br />
              I have worked at Cohere Health doing software and ML work for
              them. My research so far has involved using NLP for injury
              detection, and developing a framework for analyzing dark patterns
              in social media recommender systems. I hope to work on more
              fundamental research problems.
              <br />
              <br />
              I am currently working on
              <a
                href="https://tensara.org/"
                target="_blank"
                style="text-decoration: none; border-bottom: 1px dotted #f8f8f2"
                >Tensara</, a competitive GPU programming platform
              >
              <br />
              <br />
              In past, I have made a
              <a
                href="https://github.com/harmya/rag-distillation"
                target="_blank"
                style="text-decoration: none; border-bottom: 1px dotted #f8f8f2"
                >RAG assisted distillation framework</a
              >, wrote a simulation of
              <a
                href="https://github.com/harmya/tomography"
                target="_blank"
                style="text-decoration: none; border-bottom: 1px dotted #f8f8f2"
                >CT scan</a
              >
              machines, and wrote multiple implementations of Deep Learning
              architectures from scratch.
              <br />
              <br />
              Also, I love football (actual) and I enjoy playing
              <a
                href="https://www.youtube.com/@harmyab"
                target="_blank"
                style="text-decoration: none; border-bottom: 1px dotted #f8f8f2"
                >guitar</a
              >.
            </p>
          </div>
        </div>
      </div>

      <!-- Terminal View -->
      <div
        v-if="showingTerminal"
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
    <div v-if="showingFriends" class="friends-container">
      <FriendsPage @hide-friends="hideFriends" />
    </div>
  </div>
</template>

<script>
import 'animate.css';
import FriendsPage from './FriendsPage.vue';

export default {
  name: 'HomePage',
  components: {
    FriendsPage,
  },
  data() {
    return {
      mounted: false,
      showingFriends: false,
      showingTerminal: false, // New state to track if terminal is visible
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
        {
          name: 'cd',
          description: 'Go to a specific directory (listed above)',
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
          company: 'Purdue University: INDESS Research Group',
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
          description:
            'This project includes a particle life simulation where particles are created at random positions and move in random directions. It features a quadtree implementation for efficient neighbor detection.There attraction forces based on particle color influence their movement: red particles attract each other, and green particles attract red particles.',
          link: 'https://www.github.com/harmya/particle-life/',
        },
        {
          name: 'Computed Tomography',
          description:
            'This project involves tomographic reconstruction. By taking multiple projections, the 2D Fourier Transform of the object can be constructed, and its inverse yields the original object. An example of this process is demonstrated through a CAT scan animation.',
          link: 'https://www.github.com/harmya/tomography/',
        },
        {
          name: 'Indoor Scene Recognition',
          description:
            'This project presents a novel approach using bound embeddings. It leverages YOLOv9 to generate local information about objects in an image, which is then passed to a pre-trained image classification model for enhanced scene recognition.',
          link: 'https://www.github.com/harmya/indoor-scene-recognition/',
        },
      ],
      userHistory: [],
      commandCounter: 0,
    };
  },
  mounted() {
    // Only focus the input if terminal is showing
    if (this.showingTerminal) {
      this.$nextTick(() => {
        this.$refs.focusInput.scrollIntoView({ behavior: 'smooth' });
        this.$refs.focusInput.focus();
      });
    }

    history.pushState({ page: 'home' }, '', window.location.pathname);

    window.addEventListener('popstate', (event) => {
      if (this.showingFriends) {
        event.preventDefault();
        this.goBackToHome();
        history.pushState({ page: 'home' }, '', window.location.pathname);
        return;
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  },
  methods: {
    // New method to toggle between terminal and text view
    toggleTerminal() {
      this.showingTerminal = !this.showingTerminal;

      // Focus input when terminal is shown
      if (this.showingTerminal) {
        this.$nextTick(() => {
          if (this.$refs.focusInput) {
            this.$refs.focusInput.scrollIntoView({ behavior: 'smooth' });
            this.$refs.focusInput.focus();
          }
        });
      }
    },

    goToFriends() {
      this.showingFriends = true;
    },
    hideFriends() {
      this.showingFriends = false;
    },

    goBackToHome() {
      this.showingFriends = false;
      history.pushState({ page: 'home' }, '', window.location.pathname);

      // Only focus if terminal is showing
      if (this.showingTerminal) {
        this.$nextTick(() => {
          if (this.$refs.focusInput) {
            this.$refs.focusInput.focus();
          }
        });
      }
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
      const titleMessage =
        'Here are some projects I have worked on recently: <br><br>';
      const endMessage =
        '<p> Check out my <u><a href="https://www.github.com/harmya" target="_blank">/gitHub</a></u> for more projects </p>';
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
        event.preventDefault();
        //autocomplete
        const input = this.$refs.focusInput;
        const command = input.value.trim().toLowerCase().split(' ')[0];
        const args = input.value.trim().toLowerCase().split(' ').slice(1);

        if (args.length > 0) {
          if (command === 'cd') {
            const availableMatches = [
              'linkedin',
              'github',
              'resume',
              'email',
              'friends',
            ];
            const navigateTo = args[0];
            const matches = availableMatches.filter((m) =>
              m.startsWith(navigateTo),
            );
            console.log('matches[0]', matches[0]);
            if (matches.length === 1) {
              input.value = `cd ${matches[0]}`;
            } else if (matches.length > 1) {
              matches.sort();
              input.value = `cd ${matches[0]}`;
            }
          }
        } else {
          const matches = this.commands
            .map((c) => c.name)
            .filter((c) => c.startsWith(command));

          if (matches.length === 1) {
            input.value = matches[0];
          } else if (matches.length > 1) {
            matches.sort();
            input.value = matches[0];
          }
        }
      }
      if (event.key === 'Enter') {
        const input = this.$refs.focusInput;
        const command = input.value.trim().toLowerCase().split(' ')[0];
        const args = input.value.trim().toLowerCase().split(' ').slice(1);
        input.value = '';

        const newLine = document.createElement('div');
        const promtAndCommand = `<p class="prompt">${this.prompt}${command}</p>`;
        let output = '';

        if (command) {
          this.userHistory.push(input.value);
          this.commandCounter = this.userHistory.length;
        }
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
          output =
            'Python, Java, JavaScript, HTML, CSS, SQL, Docker, Flask, Spring Boot, scikit-learn, Keras, TensorFlow, Selenium, pandas, nltk, AWS, Git, JUnit, Cypress';
        } else if (command === 'contact') {
          output = 'Email: hvbhatt@purdue.edu';
        } else if (command === 'home') {
          this.showingTerminal = false;
          return;
        } else if (command === 'cd') {
          if (args.length === 0) {
            output = '';
          } else {
            const navigateTo = args[0];
            if (navigateTo === 'linkedin') {
              this.$refs.linkedin.click();
            } else if (navigateTo === 'github') {
              this.$refs.github.click();
            } else if (navigateTo === 'resume') {
              this.$refs.resume.click();
            } else if (navigateTo === 'email') {
              this.$refs.email.click();
            } else if (navigateTo === 'friends') {
              this.goToFriends(null);
            } else if (navigateTo === 'home') {
              this.showingTerminal = false;
              return;
            } else {
              output = `Not found: ${navigateTo}`;
            }
          }
        } else if (command === '') {
          output = '';
        } else {
          output = "Command not found. Type 'help' for a list of commands";
        }

        newLine.innerHTML = `${promtAndCommand}<p>${output}</p>`;
        newLine.classList.add('terminal-output');
        document.querySelector('.terminal-input').before(newLine);
        this.$refs.focusInput.scrollIntoView({ behavior: 'smooth' });
        this.$refs.focusInput.focus();
      } else if (event.key === 'ArrowUp') {
        const input = this.$refs.focusInput;
        const lastCommandIndex =
          this.commandCounter === -1 || this.commandCounter === 0
            ? 0
            : this.commandCounter - 1;
        const lastCommand = this.userHistory[lastCommandIndex];
        if (lastCommand) {
          input.value = '';
          input.value = lastCommand;
          // timeout because we need to wait till the DOM updates
          setTimeout(() => {
            input.setSelectionRange(input.value.length, input.value.length);
          }, 10);
          this.commandCounter = lastCommandIndex;
        }
      } else if (event.key === 'ArrowDown') {
        const input = this.$refs.focusInput;
        const nextCommandIndex =
          this.commandCounter === this.userHistory.length
            ? this.userHistory.length
            : this.commandCounter + 1;
        if (nextCommandIndex === this.userHistory.length) {
          input.value = '';
          this.commandCounter = this.userHistory.length;
          return;
        }
        const nextCommand = this.userHistory[nextCommandIndex];
        if (nextCommand) {
          input.value = '';
          input.value = nextCommand;
          // timeout because we need to wait till the DOM updates
          setTimeout(() => {
            input.setSelectionRange(input.value.length, input.value.length);
          }, 10);
          this.commandCounter = nextCommandIndex;
        }
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

.summary-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: none;
}

.summary-content {
  padding: 20px;
  color: #f8f8f2;
}

.friends-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.friends-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.back-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #555;
}

.friend-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.friend-list {
  margin-top: 20px;
}

.friend-item {
  margin-bottom: 15px;
  transition: transform 0.2s;
}

.friend-item:hover {
  transform: translateX(5px);
}

.name {
  font-weight: bold;
  color: aqua;
  cursor: pointer;
  text-decoration: underline;
}
</style>
