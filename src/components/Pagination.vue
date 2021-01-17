<template>
  <ul class="pagination">
    <li
      v-for="page in pages"
      :key="page"
      class="page-item"
      :class="{ active: page === currentPage }"
    >
      <router-link
        :to="{ path: url, query: { page: page } }"
        class="page-link"
        >{{ page }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import { range } from '@/helpers/utils'

export default {
  name: 'McvPagination',
  props: {
    total: {
      type: Number,
      require: true,
    },
    limit: {
      type: Number,
      require: true,
    },
    currentPage: {
      type: Number,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  computed: {
    pages() {
      range()
      const pageCount = Math.ceil(this.total / this.limit)
      return range(1, pageCount)
    },
  },
}
</script>

<style scoped></style>
