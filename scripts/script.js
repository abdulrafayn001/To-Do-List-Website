var inputField = document.getElementById("work");
var submitBtn = document.getElementById("addBtn")
var ul = document.querySelector("ul");

function addToList() {
    if (inputField.value != "") {
        //Create a new li 
        var li = document.createElement("li");

        //Add text into li
        li.appendChild(document.createTextNode(inputField.value));

        ul.appendChild(li);

        inputField.value = "";

        li.addEventListener("click", function() {
                li.classList.toggle("done");
            })
            //Create Delete Buuton
        var delBtn = document.createElement("button");
        delBtn.appendChild(document.createTextNode("X"));
        li.appendChild(delBtn);
        delBtn.addEventListener("click", function() {
            li.classList.add("delete");
        })
    }
}

submitBtn.addEventListener("click", addToList);
inputField.addEventListener("keypress", function(event) {
    if (event.code == "Enter") {
        addToList();
    }
})