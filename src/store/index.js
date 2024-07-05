import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // declared state: null
    home:null,
    about:null,
    resume:null,
    skills:null,
    testimonials:null,
    projects:null,
    contact:null
  },
  getters: {
  },
  mutations: {
    sethome(state,payload){
      state.home = payload
    },
    setabout(state,payload){
      state.about = payload
    },
    setresume(state,payload){
      state.resume = payload
    },
    setskills(state,payload){
      state.skills = payload
    },
    settestimonials(state,payload){
      state.testimonials = payload
    },
    setprojects(state,payload){
      state.projects = payload
    },
    setcontact(state,payload){
      state.contact = payload
    },
  },
  actions: {
    async gethome({commit}){
      let {data} = await axios.get ('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      let {home} = data
      console.log(data);
      commit('sethome',home)
    },
    async getabout({commit}){
      let {data} = await axios.get ('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      let {about} = data
      console.log(data);
      commit('setabout',about)
    },
    async getresume({commit}){
      let {data} = await axios.get ('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      let {resume} = data
      console.log(data);
      commit('setresume',resume)
    },
    async getskills({commit}){
      let {data} = await axios.get ('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      let {skills} = data
      console.log(data);
      commit('setskills',skills)
    },
    async gettestimonials({commit}){
      let {data} = await axios.get ('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      let {testimonials} = data
      console.log(data);
      commit('settestimonials',testimonials)
    },
    async getprojects({commit}){
      let {data} = await axios.get ('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      let {projects} = data
      console.log(data);
      commit('setprojects',projects)
    },
    async getcontact({commit}){
      let {data} = await axios.get ('https://raw.githubusercontent.com/MasoodahGeorge/lmao.json/main/data/data.json')
      let {contact} = data
      console.log(data);
      commit('setcontact',contact)
    },
  },
  modules: {
  }
})
