import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) ?? [],
      archive: JSON.parse(localStorage.getItem('archive')) ?? [],
    }
  },
  getters: {
    todos(state) {
      if (state.todos) {
        return state.todos
      }
    },
    archive(state) {
      if (state.archive) {
        return state.archive
      }
    },
  },
  mutations: {
    createDeal(state, deal) {
      state.todos.push(deal)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    checkedDeal(state, id) {
      const idx = state.todos.findIndex((e) => e.id === id)
      if (state.todos[idx].status === 'active') {
        state.todos[idx].status = 'checked'
      } else {
        state.todos[idx].status = 'active'
      }
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toArchive(state, todo) {
      state.archive.push(todo)
      localStorage.setItem('archive', JSON.stringify(state.archive))
      const idx = state.todos.findIndex((e) => e.id === todo.id)
      state.todos.splice(idx, 1)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    back(state, todo) {
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
      const idx = state.archive.findIndex((e) => e.id === todo.id)
      state.archive.splice(idx, 1)
      localStorage.setItem('archive', JSON.stringify(state.archive))
    },
    remove(state, id) {
      const idx = state.archive.findIndex((e) => e.id === id)
      state.archive.splice(idx, 1)
      localStorage.setItem('archive', JSON.stringify(state.archive))
    },
  },
})
