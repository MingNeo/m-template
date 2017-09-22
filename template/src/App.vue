<template>
  <div id="app">
    <img src="./assets/logo.png">{{if router}}
    <router-view></router-view>{{else}}
    <hello></hello>{{/if}}
  </div>
</template>

<script>
{{if !router}}import Hello from './components/Hello'{{/if}}
export default {
  name: 'app'{{if !router}},
  components: {
    Hello
  }{{/if}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
