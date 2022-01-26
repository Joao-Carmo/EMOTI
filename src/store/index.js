import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.users? JSON.parse(localStorage.users) :
      [
        {
          username: "admin",
          password: "admin",
          type: "admin"
        },
      ],
    
    loggedUser: null,

    jogoRecognizeEmotion: [
      {
        name: "alegria",
        images: [
          {
            addedBy: "admin",
            image: "emojis/alegria.svg",
          },
          {
            addedBy: "admin",
            image: "emojis/alegria2.png",
          }
        ]
      },
      {
        name: "amor",
        images: [
          {
            addedBy: "admin",
            image: "emojis/amor.svg",
          },
          {
            addedBy: "admin",
            image: "emojis/amor2.png",
          }
        ]
      },
      {
        name: "cansaço",
        images: [
          {
            addedBy: "admin",
            image: "emojis/cansaço.svg",
          },
          {
            addedBy: "admin",
            image: "emojis/cansaço2.png",
          }
        ]
      },
      {
        name: "enojado",
        images: [
          {
            addedBy: "admin",
            image: "emojis/enojado.svg",
          }
        ]
      },
      {
        name: "espanto",
        images: [
          {
            addedBy: "admin",
            image: "emojis/espanto.svg",
          },
          {
            addedBy: "admin",
            image: "emojis/espanto2.png",
          }
        ]
      },
      {
        name: "medo",
        images: [
          {
            addedBy: "admin",
            image: "emojis/medo.svg",
          },
          {
            addedBy: "admin",
            image: "emojis/medo2.png",
          }
        ]
      },
      {
        name: "raiva",
        images: [
          {
            addedBy: "admin",
            image: "emojis/raiva.svg",
          },
          {
            addedBy: "admin",
            image: "emojis/raiva2.png",
          }
        ]
      },
      {
        name: "tristeza",
        images: [
          {
            addedBy: "admin",
            image: "emojis/tristeza.svg",
          },
          {
            addedBy: "admin",
            image: "emojis/tristeza2.png",
          }
        ]
      },
      {
        name: "vergonha",
        images: [
          {
            addedBy: "admin",
            image: "emojis/vergonha.svg",
          }
        ]
      },
    ],

    randomizedRecognizeEmotion: [],
  },

  getters: {
    loggedUser: state => state.loggedUser,

    getjogoRecognizeEmotion: (state) => { return state.jogoRecognizeEmotion },

    getRandomImageEmotion: (state) => (emotion, image) => 
    { return {emotion: state.jogoRecognizeEmotion[emotion].name, image: state.jogoRecognizeEmotion[emotion].images[image].image } },
    
    isEmotion: (state) => (username, password) => 
    state.users.some(user => user.username == username && user.password == password),

  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload);
      localStorage.users = JSON.stringify(state.users);
    },
    SET_LOGOUT(state) {
      state.loggedUser = null;
      localStorage.removeItem("loggedUser");
    },

    // RANDOMIZED_ARRAY(state) {
    //   // state.randomizedRecognizeEmotion = state.jogoRecognizeEmotion
    //   let randomPosArray = []

    //   for (let index = 0; index < 8; index++) {
    //     let randomPos = Math.floor(Math.random() * (state.jogoRecognizeEmotion.length-1))

    //     randomPosArray.push(randomPos)
        
    //     state.randomizedRecognizeEmotion.push(
    //       {
    //         state.jogoRecognizeEmotion[randomPos]
    //       })
    //   }
    // },
  },
  actions: {
  },
  modules: {
  }
})
