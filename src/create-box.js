import highlightBoxes from "./highlight-boxes";
const wrapper = document.getElementById("box-container");

const createBox = (boxes, i) => {
  const box = document.createElement("li");
  const text = document.createTextNode((i += 1));
  box.classList.add("clickable-box", "btn-" + i);
  box.appendChild(text);
  wrapper.appendChild(box);
  box.addEventListener("click", () => {
    highlightBoxes(boxes, text.nodeValue);
  });
};

export default createBox;
