<template>
  <div id="app">
    <section class="slider">
<todos :todos="todos"/>
<newtodo/>
</section>
  </div>
</template>

<script>

import todos from './views/Todos'
import newtodo from './views/NewTodo'

export default {
  name: 'app',
  data(){
    return{
      todos: [
        {done: false, text: 'köp bananer'},
        {done: false, text: 'köp kex'},
        {done: true, text: 'köp alkohol'}
      ]
    }
  },
  components: {
    todos,
    newtodo
  }
}

</script>

<style lang="scss">

@import 'scss/main.scss';

</style>
