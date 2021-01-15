<template>
  <div id="app">
    <mcv-top-bar/>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import McvTopBar from '@/components/TopBar'

export default {
  name: 'McvApp',
  components: {
    McvTopBar,
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser,
      isLoggedIn: state => state.auth.isLoggedIn,
    }),
  },
}
</script>
