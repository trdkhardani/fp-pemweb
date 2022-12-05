

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Barokah Shortener</a>
      <button class="btn btn-outline-danger" type="submit">Log Out</button>
    </div>
  </nav>

  <div class="mt-5">
    My Links
    <ul class="list-group mt-5 mr-5 m-lg-5">
      <li v-for="(url, id) in app.urls" :key="id" class="list-group-item">Original URL: <a v-bind:href=url.originalurl
          target="_blank">{{ url.originalurl }}</a> || Shortened URL: <a>{{ url.customurl }}</a>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <p class=" align text-end">Clicked: {{ url.click }}</p>
          <button target="_blank" type="button" @click="$router.push('/go/'+url.customurl)"
            class="btn btn-outline-info align text-end"><i class="bi bi-arrow-up-right"></i></button>
          <button type="button" class="btn btn-outline-warning align text-end">Edit</button>
          <button type="button" class="btn btn-outline-danger align text-end"
            @click="app.deleteUrl(url.docid)">Hapus</button>
        </div>
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