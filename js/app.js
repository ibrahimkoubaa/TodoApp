// call search bar
let searchBar = document.querySelector('.search');
// call input of adding note
let noteInput = document.querySelector('.add-cart');
// call button of submitting a note
let btnSubmit = document.getElementById('cta-submit');
// call 
let blocSubmit = document.querySelector('.right-side');
// call text content of note added
let span = document.querySelector('.text');


// adding an updating date
let dateUpdated = document.getElementById("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var today = new Date();
var dd = String(today.getDate());
var mm = String(months[today.getMonth()]);
var yyyy = today.getFullYear();
today = dd + 'th ' + mm + ', ' + yyyy;
dateUpdated.innerHTML = today;

// function to indisplay submitting button
noteInput.onclick = function() {
    if (noteInput.value == "") {
        btnSubmit.style.display = 'block';
        noteInput.style.width = '207px';
    }
};


//create a ul tag within a div
let blocAdded = document.createElement('div');
blocAdded.className = 'portionAdded';
blocAdded.innerHTML = '<ul id="carts"></ul>';
blocSubmit.append(blocAdded);

// call the unorder list
let list = blocAdded.querySelector('#carts');

// function for adding a new item
btnSubmit.addEventListener("click", function(e) {
    if (noteInput.value !== "") {
        e.preventDefault;
        let newItem = document.createElement('li');
        newItem.className = 'cart';
        newItem.id = Date.now();
        newItem.innerHTML = '<input id="check" type="radio">';
        var textNote = document.createElement('span');
        textNote.className = 'textnote'
        textNote.textContent = noteInput.value;
        newItem.append(textNote);
        list.style.cssText += 'padding-bottom: 10px;background-color:#FFFFFF;box-shadow:0px 4px 14px rgba(0, 0, 0, 0.14)';
        list.append(newItem);
        // set local storage
        localStorage.setItem('textInput', span.textContent);

    }
    noteInput.value = "";
});

//get local storage
let stordNote = localStorage.getItem('textInput')
if (noteInput) {
    let newItem = document.createElement('li');
    newItem.className = 'cart';
    newItem.innerHTML = '<input id="check" type="radio">';
    var textNote = document.createElement('span');
    textNote.className = 'textnote'
    newItem.append(textNote);
    list.style.cssText += 'padding-bottom: 10px;background-color:#FFFFFF;box-shadow:0px 4px 14px rgba(0, 0, 0, 0.14)';
    list.append(newItem);

    textNote.textContent = stordNote;
}

noteInput.addEventListener('input', word => {
    span.style.display = 'none'
    span.textContent = word.target.value;

})

// function searching for a note
searchBar.addEventListener('keyup', function(e) {
    let contentSearch = e.target.value.toLowerCase();
    let itemsInList = list.querySelectorAll('li');
    // change list of dom to an array to  apply forEach methode 
    Array.from(itemsInList).forEach(function(item) {
        let textNote = item.textContent.toLowerCase();
        if (textNote.indexOf(contentSearch) == -1) {
            item.style.display = 'none';
            alert('Not find it')
        } else {
            item.style.display = 'flex';
        }
    });
});


//removing note with confirmation
list.addEventListener('click', function(e) {
    let itemToRemove = e.target.closest('#check');
    let message = confirm("Do you want to remove it !!");
    if (message == true) {
        itemToRemove.parentNode.remove();
        list.style.cssText += 'padding-bottom:0px';
        localStorage.removeItem('textInput');

    }
});