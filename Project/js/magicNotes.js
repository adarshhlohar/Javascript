console.log("welcome to the magicNotes");
shownotes();

// Adding The in  a card one by one 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        title : addTitle.value,
        text : addTxt.value
    };
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";

    shownotes();
});

// showing The note after adding
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html +=
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<b>Nothing to show! Use "Add a Note" section above to add notes.</b>`;
    }
}

// function to delete notes

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    console.log(notes)
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
    // console.log("this is deleting notes", index)
}

// search implementation

search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})