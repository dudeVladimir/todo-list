<template>
  <input
    @keypress.enter="addDeal"
    type="text"
    class="todos__input"
    placeholder="Введите задачу"
    v-model="deal"
  />
  <ul class="todos__body" v-if="todos.length !== 0">
    <li class="todo__item" v-for="t in todos" :key="t.id">
      <div>
        <button
          :class="['todo__btn', { checked: t.status === 'checked' }]"
          @click="check(t.id)"
        >
          <img
            src="../assets/checkedGreen.png"
            alt="Галочка"
            v-if="t.status === 'checked'"
          />
          <img src="../assets/checkedGray.png" id="gray" alt="Галочка" v-else />
        </button>
        <span :class="['item__body', { checked: t.status === 'checked' }]">{{
          t.body
        }}</span>
      </div>
      <button
        class="todo__btn archive"
        v-if="t.status === 'checked'"
        @click="toArchive(t)"
      >
        <img src="../assets/archive.png" alt="В архив" />
      </button>
    </li>
  </ul>
  <div v-else class="empty">Список пуст, добавьте новую задачу</div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const store = useStore()

    const todos = store.getters.todos
    const deal = ref('')

    const check = (id) => {
      store.commit('checkedDeal', id)
    }

    const toArchive = (todo) => {
      store.commit('toArchive', todo)
    }

    const addDeal = () => {
      store.commit('createDeal', {
        body: deal.value,
        status: 'active',
        id: new Date().getTime(),
      })
      deal.value = ''
    }

    return {
      toArchive,
      check,
      todos,
      addDeal,
      deal,
    }
  },
}
</script>
