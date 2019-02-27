import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { done: true, text: 'Memory Game'},
      { done: true, text: 'Vue mini projekt'}
    ],
    activeSlide: 0
  },
  mutations: {
    newTodo(state, todo){
      state.todos.push(todo);
    },
    updateTodo(state, index){
      state.todos[index].done = !state.todos[index].done;
    },
    swipe(state, activeSlide){
      state.activeSlide = activeSlide;
    }
  },
  actions: {

  }
})