let addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = document.querySelector("header ion-icon"),
titleTag = document.querySelector("input"),
descTag = document.querySelector("textarea"),
addBtn = document.querySelector("button");
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});

    addBtn.addEventListener("click", e => {
    e.preventDefault();

    let noteTitle = titleTag.value,
    noteDesc = descTag.value;

    if(noteTitle || noteDesc){
        let dateObj = new Date(),
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear();

    let noteInfo = {
        title: noteTitle, description: noteDesc,
        date:`${month} ${day}, ${year}}`
    }
        let notes = [];
        notes.push(noteInfo);//adding new note to notes
        //saving notes to local storage
        localStorage.setItem("notes", JSON.stringify(notes));
    }
});

