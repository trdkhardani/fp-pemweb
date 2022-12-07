

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Barokah Shortener</a>
      <button class="btn btn-outline-danger" type="submit">Log Out</button>
    </div>
  </nav>

  <div class="mt-5">
    My Links
    <br>
    <button type="button" class="btn btn-outline-success m-lg-2" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Tambah</button>
    <ul class="list-group mt-5 mr-5 m-lg-5">
      <li v-for="(url, id) in app.urls" :key="id" class="list-group-item">Original URL: <a v-bind:href=url.originalurl
          target="_blank">{{ url.originalurl }}</a> || Shortened URL: <a>{{ url.customurl }}</a>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <p class=" align text-end">Clicked: {{ url.click }}</p>
          <p>{{ url.docid }}</p>
          <button target="_blank" type="button" @click="$router.push('/go/' + url.customurl)"
            class="btn btn-outline-info align text-end"><i class="bi bi-arrow-up-right"></i></button>
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
            class="btn btn-outline-warning align text-end">Edit</button>
          <button type="button" class="btn btn-outline-danger align text-end"
            @click="app.deleteUrl(url.docid)">Hapus</button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Modal -->

        <!-- Offcanvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="offcanvas-body">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text text-info" id="InputaddUrl">Original URL</span>
                <input type="text" class="form-control text-info" aria-label="Sizing example input"
                  aria-describedby="InputaddUrl" ref="original" v-model="app.input.originalurl">
                  <h1>{{ app.input.originalurl }}</h1>
              </div>

              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text text-info" id="InputaddUrl">Custom URL</span>
                <input type="text" class="form-control text-info" aria-label="Sizing example input"
                  aria-describedby="InputaddUrl" ref="custom" v-model="app.input.customurl">
              </div>
              <button class="btn btn-outline-info" data-bs-dismiss="offcanvas" @click="app.addUrl()">Add</button>
            </div>
          </div>
        </div>
        <!-- End of Offcanvas -->
      </li>

    </ul>
  </div>


</template>
<script>
import { useApp } from '../stores/index'
export default {
  name: 'DashboardView',
  components: {},
  data() {
    return {
      app: useApp()
    }
  },
  methods: {},
  created() {
    this.app.getUrls()
  }
};
</script>