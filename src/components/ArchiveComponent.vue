<template>
  <div class="todos__title">Архив</div>
  <ul class="todos__body" v-if="archive.length !== 0">
    <li class="todo__item archive" v-for="t in archive" :key="t.id">
      <div>
        <button class="todo__btn" @click="back(t)">
          <img src="../assets/arrow_back.png" alt="Вернуть" id="arrow" />
        </button>
        <span class="item__body checked">{{ t.body }}</span>
      </div>
      <button class="todo__btn delete" @click="remove(t.id)">
        <img src="../assets/basket.png" alt="Удалить" id="delete" />
      </button>
    </li>
  </ul>
  <div v-else class="empty">Список пуст, добавьте новую задачу</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    const archive = store.getters.archive

    const back = (todo) => {
      store.commit('back', todo)
    }

    const remove = (id) => {
      store.commit('remove', id)
    }

    return {
      archive,
      back,
      remove,
    }
  },
}
</script>
