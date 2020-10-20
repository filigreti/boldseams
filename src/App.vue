<template>
  <main id="app">
    <div>
      <TopHeader />
    </div>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import TopHeader from '@/components/TopHeader'
export default {
  components: {
    TopHeader
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif !important;
  font-weight: 400;
}
.router-container {
  padding-top: 3.5rem;
  padding-right: 1rem;
}
#app {
  box-sizing: border-box;
}
</style>