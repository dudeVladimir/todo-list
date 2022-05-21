<template>
  <div class="container">
    <h1 class="title">ToDo List</h1>
    <div class="todos">
      <todos-component v-if="isTodos"></todos-component>
      <archive-component v-else></archive-component>
      <div class="todos__footer">
        <button class="todos__btn" @click="isTodos = !isTodos">
          {{ isTodos === true ? 'В архив' : 'На главную' }}
        </button>
      </div>
    </div>
  </div>
  <footer>
    <div>
      <a href="https://github.com/dudeVladimir/todo-list" class="github"
        ><img src="./assets/GitHub-Mark-64px.png" alt="GitHub"
      /></a>
    </div>
  </footer>
</template>

<script>
import TodosComponent from './components/TodosComponent.vue'
import ArchiveComponent from './components/ArchiveComponent.vue'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const isTodos = ref(true)

    return {
      isTodos,
    }
  },
  components: { TodosComponent, ArchiveComponent },
}
</script>
