<template>
  <div>
    <div class="auth-page ng-scope">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center ng-binding">Sign in</h1>
            <p class="text-xs-center">
              <router-link :to="{ name: 'register' }"
                >Need an account?</router-link
              >
            </p>

            <mcv-validation-errors
              v-if="validationErrors"
              :validationErrors="validationErrors"
            />

            <form
              class="ng-pristine ng-valid ng-valid-email"
              @submit.prevent="onSubmit"
            >
              <fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty ng-valid-email"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                  />
                </fieldset>

                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </fieldset>

                <button
                  class="btn btn-lg btn-primary pull-xs-right ng-binding"
                  type="submit"
                  :disabled="isSubmitting"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import McvValidationErrors from '@/components/ValidationErrors'
import { actionTypes } from '@/store/modules/auth'

export default {
  name: 'McvLogin',
  components: {
    McvValidationErrors,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors,
    }),
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.login, {
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push({ name: 'globalFeed' }))
    },
  },
}
</script>
