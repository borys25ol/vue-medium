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

            <form class="ng-pristine ng-valid ng-valid-email">
              <fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty ng-valid-email"
                    type="email"
                    placeholder="Email"
                  />
                </fieldset>

                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty"
                    type="password"
                    placeholder="Password"
                  />
                </fieldset>

                <button
                  class="btn btn-lg btn-primary pull-xs-right ng-binding"
                  type="submit"
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
export default {
  name: 'McvLogin',
}
</script>
