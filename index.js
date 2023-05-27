function getRemoveIcon() {
    const span = document.createElement("span");
    span.appendChild(document.createTextNode("delete"));
    span.setAttribute("class", "material-icons remove-button");

    return span;
}

function setTotalNumber(totalNumber, length) {
    totalNumber.innerHTML = `Number of todos: ${length}`;
}

function getText(value) {
    const div = document.createElement("div");
    const text = document.createTextNode(value);
    div.appendChild(text);

    return div;
}

document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.querySelector(".list-group");
    const totalNumber = document.querySelector(".total-number");
    const addButton = document.querySelector(".add-button");
    const addIcon = document.querySelector(".add-icon");
    const inputGroup = document.querySelector(".input-group");
    const input = inputGroup.querySelector("input");
    let showInputGroup = false;

    inputGroup.style.display = "none";

    addButton.addEventListener("click", () => {
        input.value = "";
        inputGroup.style.display = showInputGroup ? "" : "none";
        addButton.innerText = showInputGroup ? "Hide form" : "Show form";
        showInputGroup = !showInputGroup;
    });

    addIcon.addEventListener("click", () => {
        if (input.value) {
            const removeIcon = getRemoveIcon();
            const text = getText(input.value);

            const li = document.createElement("li");
            li.classList.add("list-group-item", "d-flex", "gap-3");
            li.appendChild(text);
            li.appendChild(removeIcon);
            todoList.appendChild(li);
            input.value = "";

            const listItems = document.querySelectorAll("ul > li");
            removeIcon.addEventListener("click", (event) => {
                event.target.parentElement.remove();
                setTotalNumber(totalNumber, listItems.length - 1);
            });

            setTotalNumber(totalNumber, listItems.length);
        }
    });
});
