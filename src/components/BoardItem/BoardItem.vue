<template>
    <span :class="'item ' + (filed.value === 1 && preview ? 'item__active' : '')"></span>
</template>
<script>
    export default {
        name: "BoardItem",
        props: {
            filed: {
                type: Object,
                required: true,
            },
            preview:{
                type: Boolean,
                required: false,
                default: false
            }
        },
    }
</script>
<style scoped>
.item{
    position: relative;
    width: 50px;
    height: 50px;
    aspect-ratio: 1/1;
    margin: 5px;
    cursor: pointer;
    background-color: #fcc300;
    display: inline-block;
    transition: .4s ease-in-out;
    transform-style: preserve-3d;
}
.item__active{
    background-color: red;
    transform: rotateX(180deg);
}
</style>