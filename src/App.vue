<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>

<style>
.container {
  max-width: 720px;
}

.questions {
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>
