<template>
    <h2>wait</h2>

</template>

<script>
import { useApp } from '../stores/index'

export default {
  name: 'BlamkView',
  components: {},
  data() {
    return {
        app: useApp()
    };
  },
  methods: {},
  created() {
    this.app.getSpecificUrl(this.$route.params.customurl)
  },
};

</script>