<template>
  <div class="container">
    <nav>
      <a href="#">KanBoo</a>
    </nav>
    <Scheduler/>
  </div>
</template>

<script>
import Scheduler from './components/Scheduler.vue'

export default {
  name: 'App',
  components: {
    Scheduler
  },
  
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #16161A;
}

nav {
  widows: 100%;
  height: 70px;
  background: #75757529;
  color: #ffffff;
}

</style>