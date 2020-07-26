import data from "../src/data/data.json";
import createBox from "./create-box";

const app = function () {
  let numbersToDisplay = data;
  for (let i = 0; i < numbersToDisplay.length; i++) {
    createBox(numbersToDisplay, i);
  }
};

export default app;
