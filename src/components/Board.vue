    <script>
    import BoardItem from "./BoardItem/BoardItem.vue"
    export default {
        name: "Board",
        props:{},
        components: {
        BoardItem
        }
   }

    </script>
<template>
<div class="wrapper">
    <BoardItem v-for="i in 25" key="i"/>
</div>
</template>
<style scoped>
.wrapper{
width: 300px;
background-color: tomato;
margin-inline: auto;
}
</style>