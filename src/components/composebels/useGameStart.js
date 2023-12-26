import { ref } from "vue";

export default function useGameStart(init, fileds, dificult, number) {
  let preview = ref(false);
  const start = () => {
    init(), prepereGame();
  };
  const prepereGame = () => {
    preview.value = true;
    for (let i = 0; i < dificult.value; i++) {
      const index = rand(0, number - 1);
      if (fileds.value[index].value !== 1) {
        fileds.value[index].value = 1;
      } else {
        i--;
      }
    }

    setTimeout(() => {
      preview.value = false;
    }, 2000);
  };
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  return {
    start,
    preview,
  };
}
