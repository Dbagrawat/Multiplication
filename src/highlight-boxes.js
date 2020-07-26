import findMultiples from "./find-multiples";

const highlightBoxes = (boxes, multipleOf) => {
  const multiples = findMultiples(boxes, multipleOf);
  boxes.forEach((element) => {
    if (multiples.indexOf(element) >= 0) {
      let box = document.getElementsByClassName("btn-" + element)[0];
      box.classList.add("active");
    } else {
      let box = document.getElementsByClassName("btn-" + element)[0];
      box.classList.remove("active");
    }
  });
};

export default highlightBoxes;
