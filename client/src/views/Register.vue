<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Register Form</h2>

        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile">
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="email" aria-describedby="emailHelp"
                placeholder="Email">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password">
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Register</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Already Registered? <a @click="goRouter()" class="text-dark fw-bold"> Go Login</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Register',
    components: {},
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        goRouter() {
            this.$router.push('/login')
        }
    }

}
</script>

<style>

</style>