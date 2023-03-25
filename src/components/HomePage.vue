<template>
    <div class="greeting" v-if="mounted">
        <h1>Hi, I'm <span class="name">Harmya Bhatt</span></h1>
        <h2> Research  in  <span class="job">Natural Language Processing, Explainable AI and Recommender Systems</span></h2>
        <h2>Studying Computer Science at <img src="../assets/uni_logo.svg" alt="uni logo"> <span class="uni">Purdue University</span></h2>
        <img src="https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif" alt="greeting gif" class="my-pic">
    </div>

    <div class="navigation" v-if="mounted">
        <a class="nav-button">Summary</a>
        <a class="nav-button">Work Experience</a>
        <a class="nav-button">Research</a>
        <a class="nav-button">Personal Projects</a>
        <a class="nav-button">Skills</a>

    </div>
</template>

<script>


export default {
    name: 'HomePage',
    data () {
        return {
            mounted: false,
        }
    },
    methods: {
        changeMessage () {
            this.message = 'Hello Vue!'
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
    border: 1px solid #e9e9e9;
    animation: slideInLeft 1s ease-in-out;
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

h2 {
    margin: 0;
    padding: 0;
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



.nav-button {
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size:16px;
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
    margin-top: -180px;
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





</style>
