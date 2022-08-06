// Your code here
let redFunction = event => {
  let text = event.target.value;
  if (text === "red") {
    event.target.style.backgroundColor = "red";
  } else  {
    event.target.style.backgroundColor = "transparent";
  }
}

let listFunction = event => {
  let list = document.querySelector("ul");
  let item = document.createElement("li");
  let value = document.getElementById("list-add").value;
  item.innerText = value;
  list.append(item);
}

let colorFunction = event => {
  let color = event.target.value;
  event.target.parentElement.style.backgroundColor = color;
}


window.addEventListener("DOMContentLoaded", event => {

  //alert user the DOM has loaded
  window.alert("DOM has loaded!");

  //when #red-input contains "red", change the bg color to red
  let redInput = document.getElementById("red-input");
  redInput.addEventListener("input", redFunction);

  //when #add-item is pressed, add a list element to the list
  let listController = document.getElementById("add-item");
  listController.addEventListener("click", listFunction);

  //when a color is selected in #color-select, change it's bg color
  let colorSelector = document.getElementById("color-select");
  colorSelector.addEventListener("input", colorFunction);

  //remove event listeners when button is clicked
  let remover = document.getElementById("remove-listeners");
  remover.addEventListener("click", event => {
    console.log("clicked remover");
    redInput.removeEventListener("input", redFunction);
    listController.removeEventListener("click", listFunction);
    colorSelector.removeEventListener("input", colorFunction);
  });

  //add listenders when button is clicked
  let adder = document.getElementById("add-listeners");
  adder.addEventListener("click", event => {
    redInput.addEventListener("input", redFunction);
    listController.addEventListener("click", listFunction);
    colorSelector.addEventListener("input", colorFunction);
  });

  //div that says it is being hovered over
  let hoverCheck = document.getElementById("section-6");
  console.log(hoverCheck);
  hoverCheck.addEventListener("mouseover", event => {
    hoverCheck.innerText = "I am being hovered";
  })
  hoverCheck.addEventListener("mouseout", event => {
    hoverCheck.innerText = "I am not being hovered";
  })

  //global event: alert when space is pressed
  window.addEventListener("keypress", event => {
    if (event.key === " ") {
      window.alert("You pressed space");
    }
  });

});
