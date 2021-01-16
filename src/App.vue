<template>
  <div id="app">
    <mcv-top-bar />
    <router-view />
  </div>
</template>

<script>
import { actionTypes } from '@/store/modules/auth'
import McvTopBar from '@/components/TopBar'

export default {
  name: 'McvApp',
  components: {
    McvTopBar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>
