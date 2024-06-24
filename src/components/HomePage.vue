<template>
    <div class="app-container>">
        <div class="links-to animate__animated animate__fadeInRight animate__delay-0.2s" v-if="mounted">
        <a href="https://www.linkedin.com/in/harmyacs/" target="_blank"> <span class="links-text">\About</span></a>
        <a href="https://www.github.com/harmya" target="_blank"> <span class="links-text">\Github</span></a>
        <a href="Resume_2023_SWE.pdf" download="harmya_bhatt_resume" target="_blank"> 
            <span class="links-text">\Resume</span></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> <span class="links-text">\Home</span></a>
        <a href="mailto: hvbhatt@purdue.edu" target="_blank"> <span class="links-text">\Contact</span></a>
    </div>
    <div class="greeting">
        <h1> Hello, I'm Harmya Bhatt</h1>
        <p> I like to build things with code</p>
    </div>
    <div class="container animate__animated animate__fadeIn">
        <div class="terminal-menu">
            <div class="buttons-container">
                <div class="button-red"></div>
                <div class="button-yellow"></div>
                <div class="button-green"></div>
            </div>
            <div class="terminal-title">
                <h1> <a href="https://harmya.me" target="_blank"> harmya.me </a> </h1>
            </div>
        </div>
        <div class="terminal">
            <div class="terminal-intro">
                <p class="welcome-message" style="padding-bottom: 5px; padding-left: 5px"> Logged in as <span class="username">visitor</span></p>
            </div>
            <div class="terminal-input">
                <p class="prompt">visitor@home:~$&nbsp;</p>
                <input ref="focusInput" @keydown="handleSubmit" type="text" class="input" placeholder="Type 'help' for a list of commands" />
            </div>
        </div>
    </div>
</div>

</template>

<script>
import 'animate.css';

export default {
    name: 'HomePage',
    data () {
        return {
            mounted: false,
            prompt: 'visitor@home:~$ ',
            commands: [
                {
                    name: 'help',
                    description: 'List all available commands'
                },
                {
                    name: 'work',
                    description: 'Summary of my work experience'
                },
                {
                    name: 'projects',
                    description: 'Projects I have worked on'
                },
                {
                    name: 'skills',
                    description: 'List of skills I have'
                },

                {
                    name: 'contact',
                    description: 'Ways to contact me'
                }, 
                {
                    name: 'clear',
                    description: 'Clear the terminal'
                },

            ],
        }
    },
    mounted () {
        this.$refs.focusInput.focus();
    },
    methods: {
        handleSubmit(event) {
            if (event.key === 'Enter') {
                const input = this.$refs.focusInput;
            const command = input.value;
            input.value = '';
            console.log(command);
            const newLine = document.createElement('div');
            const promtAndCommand = `<p class="prompt">${this.prompt}${command}</p>`;
            let output = '';

            if (command === 'clear') {
                document.querySelectorAll('.terminal-output').forEach(e => e.remove());
                return;
            } else if (command === 'help') {
                output = this.commands.map(c => `<p>$ <span class="command">${c.name}</span> - ${c.description}</p>`).join('');
            } else if (command === 'diya') {
                output = "goops";
            }
            else {
                output = "Command not found. Type 'help' for a list of commands"
            }
            
            newLine.innerHTML = `${promtAndCommand}<p>${output}</p>`;
            newLine.classList.add('terminal-output');
            document.querySelector('.terminal-input').before(newLine);
            }
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
