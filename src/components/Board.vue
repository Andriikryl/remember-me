    <script>
    import BoardItem from "./BoardItem/BoardItem.vue"
    import {onBeforeMount, ref} from "vue"
    import useGameInit from "./composebels/useGameInit"
    import useGameStart from "./composebels/useGameStart"
    export default {
        name: "Board",
        props:{},
        components: {
        BoardItem
        },
        setup(){
     
            const number = 25
            const {dificult, init, fileds} = useGameInit(number)
            const {start, preview} = useGameStart(init, fileds, dificult, number)

            return {
                number,
                dificult,
                fileds,
                init, 
                start,
                preview
            }
        },
}

    </script>

<template>
<div class="wrapper">
    <div>
        <BoardItem :preview="preview" v-for="filed in fileds" :filed="filed" key="filed.id"/>
    </div>
</div>
<div class="controll__group">
    <div>
    <p>
        level: {{ dificult }}
    </p>
</div>
<div>
    <button @click="start">
        play
    </button>
</div>
</div>
</template>
<style scoped>
.wrapper{
width: 300px;
background-color: tomato;
margin-inline: auto;
}
.controll__group{
    margin-block: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
</style>