// call search bar
let searchBar = document.querySelector('.search');
// call input of adding note
let noteInput = document.querySelector('.add-cart');
// call button of submitting a note
let btnSubmit = document.getElementById('cta-submit');
// call ul list 
let list = document.querySelector('#carts');
let inputRadio = document.querySelector('#check');

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
    btnSubmit.disabled = false;
    btnSubmit.style.cssText = 'cursor: pointer;color: #7556CD;background: linear-gradient( 180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.276) 100%);'
};

function addContent() {
    let newItem = document.createElement('li');
    newItem.className = 'cart';

    newItem.innerHTML = '<input id="check" type="radio">';
    let textNote = document.createElement('span');
    textNote.className = 'textnote';
    textNote.id = Date.now();
    newItem.append(textNote);
    list.style.cssText += 'background-color:#FFFFFF;box-shadow:0px 4px 14px rgba(0, 0, 0, 0.14)';
    list.prepend(newItem);
    btnSubmit.disabled = true;
    btnSubmit.style.cssText = 'none';
};



// function for adding a new item
btnSubmit.addEventListener("click", function(e) {
    if (noteInput.value !== "") {
        addContent()
        let span = document.querySelector('.textnote');
        span.textContent = noteInput.value;
        setToLocalS(noteInput.value);
    }
    noteInput.value = "";
});



// function searching for a note
searchBar.addEventListener('keyup', function(e) {
    let contentSearch = e.target.value.toLowerCase();
    saveSearch(contentSearch)
    let itemsInList = list.querySelectorAll('li');
    // change list of dom to an array to  apply forEach methode 
    Array.from(itemsInList).forEach(function(item) {
        let textNote = item.textContent.toLowerCase();
        if (textNote.indexOf(contentSearch) == -1) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });
});




// save in local storage
let setToLocalS = (newElem) => {
    if (localStorage.getItem('Local') === null) {
        arrayInLocal = [];
    } else {
        arrayInLocal = JSON.parse(localStorage.getItem('Local'));
    }
    arrayInLocal.push(newElem);
    localStorage.setItem('Local', JSON.stringify(arrayInLocal));
};

function saveSearch(value) {
    localStorage.setItem('search', value)
};



//get from local storage
let getFromLocal = () => {
    if (localStorage.getItem('Local') === null) {
        arrayInLocal = [];
    } else {
        arrayInLocal = JSON.parse(localStorage.getItem('Local'));
    }
    arrayInLocal.forEach((elem) => {
        addContent();
        let span = document.querySelector('.textnote');
        span.textContent = elem;
    })
};




//remove item than remove it from a local storage

list.addEventListener('click', function(e) {
    if (e.target.id === 'check') {
        let message = confirm("Do you want to remove it !!");
        if (message == true) {
            e.target.parentElement.remove();
            arrayInLocal = JSON.parse(localStorage.getItem('Local'));
            let index = arrayInLocal.indexOf(e.target.parentElement);
            arrayInLocal.splice(index, 1);
            localStorage.setItem('Local', JSON.stringify(arrayInLocal));

        }
        e.target.checked = false;
    }
});




document.addEventListener('DOMContentLoaded', getFromLocal);


/*list.addEventListener('click', function(e) {
    if (e.target.className === 'textnote') {
        let message = confirm("Do you want to remove it !!");
        if (message == true) {
            let removedElem = e.target;

            arrayInLocal = JSON.parse(localStorage.getItem('Local'));
            for (let i = 0; i <= arrayInLocal.length; i++) {
                if (removedElem.innerHTML === arrayInLocal[i]) {
                    let index = arrayInLocal.indexOf(arrayInLocal[i]);
                    arrayInLocal.splice(index, 1);
                    localStorage.setItem('Local', JSON.stringify(arrayInLocal));
                    removedElem.parentNode.remove()
                }
            }
        }
    }
});*/