<script setup>
import Board from "./components/Board.vue"
</script>

<template>
  <main>
    <section>
      <div class="container">
        <h1 class="main__title">remember me game</h1>
        <Board/>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .main__title{
    font-size: clamp(20px, 5vw + 1rem, 40px);
    text-align: center;
    margin-block-end: 20px;
  }
  .container{
    max-width: 1300px;
    padding-inline: 20px;
    margin-inline: auto;
  }
</style>
