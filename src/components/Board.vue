    <script>
    import BoardItem from "./BoardItem/BoardItem.vue"
    import {onBeforeMount, ref} from "vue"
import useGameInit from "./composebels/useGameInit"
    export default {
        name: "Board",
        props:{},
        components: {
        BoardItem
        },
        setup(){
     
            const number = 25
            const {dificult, init, fileds} = useGameInit(number)

            return {
                number,
                dificult,
                fileds,
                init
            }
        },
        methods:{
            start(){
                this.init(),
                this.prepereGame()
            },
            prepereGame(){
                for(let i = 0; i < this.dificult; i++){
                    const index = this.rand(0, this.number - 1);
                    if(this.fileds[index].value !== 1){
                        this.fileds[index].value = 1
                    } else {
                        i--
                    }
            }
        },
        rand(min, max){
            return Math.floor(Math.random() * (max - min) + min)
        }
   }
}

    </script>

<template>
<div class="wrapper">
    <div>
        <BoardItem v-for="filed in fileds" :filed="filed" key="filed.id"/>
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