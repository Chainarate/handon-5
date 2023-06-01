// const todolistInput = document.getElementById("todolist");

// const todolistButton = document.getElementById("add-todolist");

// const todolistMilestonesList = document.getElementById("todolist-milestone");

// todolistButton.addEventListener("click", (e) => {
//   e.preventDefault();

//   const newList = document.createElement("li");

//   if (!todolistInput.value) {
//     alert("Please input something!");
//   } else {
//     newList.textContent = todolistInput.value;
//     todolistMilestonesList.appendChild(newList);
//     let cancel = document.createElement("button");
//     cancel.innerHTML = "x";
//     newList.appendChild(cancel);
//   }
//   todolistInput.value = "";
// });

// todolistMilestonesList.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("marked");
//   } else if (e.target.tagName === "BUTTON") {
//     e.target.parentNode.remove();
//   }
// });

const app = () => {
  const todolistInput = document.getElementById("todolist");

  const todolistButton = document.getElementById("add-todolist");

  const todolistMilestonesList = document.getElementById("todolist-milestone");

  todolistButton.addEventListener("click", (e) => {
    e.preventDefault();

    // const newList = document.createElement("li");

    if (!todolistInput.value) {
      alert("Please input something!");
    } else {
      const newList = document.createElement("li");
      newList.textContent = todolistInput.value;
      todolistMilestonesList.appendChild(newList);
      let cancel = document.createElement("button");
      cancel.textContent = "x";
      newList.appendChild(cancel);
    }
    todolistInput.value = "";
  });

  todolistMilestonesList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("marked");
    } else if (e.target.tagName === "BUTTON") {
      e.target.parentNode.remove();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  app();
});
