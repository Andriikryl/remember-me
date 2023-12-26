import { onBeforeMount, ref } from "vue";

export default function useGameInit(number) {
  let fileds = ref([]);
  let dificult = ref(2);
  const init = () => {
    fileds.value = [];

    for (let i = 0; i < number; i++) {
      fileds.value.push({
        id: i,
        clicked: false,
        value: 0,
      });
    }
  };
  onBeforeMount(init);
  return {
    dificult,
    fileds,
    init,
  };
}
