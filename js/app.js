let noteInput = document.querySelector('.add-cart');
let btnSubmit = document.getElementById('cta-submit');



let searchBarre = document.querySelector('.search');
let spans = document.querySelectorAll('.textnote');
let list = document.querySelector('.carts');




searchBarre.addEventListener('keyup', function(e) {
    let contentSearch = e.target.value.toLowerCase();
    let divOfDiv = list.querySelectorAll('li');

    Array.from(divOfDiv).forEach(function(div) {
        let tiile = div.lastElementChild.textContent;
        if (tiile.toLowerCase().indexOf(contentSearch) != -1) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});
let background = document.querySelector('.right-side')
let listBig = document.querySelector('.carts')


noteInput.onclick = function() {
    if (noteInput.value == "") {
        btnSubmit.style.display = 'block';
        noteInput.style.width = '207px';
    }
}


btnSubmit.addEventListener("click", function(e) {
    if (noteInput.value !== "") {

        e.preventDefault;

        let div = document.createElement('li');
        div.className = 'cart';
        div.innerHTML = '<input id="check" type="radio">';
        let textNote = document.createElement('span');
        textNote.className = 'textnote'
        textNote.textContent = noteInput.value;
        div.append(textNote);
        background.style.cssText += 'background-color:#FFFFFF;box-shadow:0px 4px 14px rgba(0, 0, 0, 0.14)';
        listBig.style.cssText += 'height: 500px;overflow: auto';

        list.append(div);
    }



    noteInput.value = "";


    let removeNote = document.querySelectorAll('.cart');
    let radio = document.getElementById('check');
    let arrayjs = Array.from(removeNote)

    for (let i = 0; i < arrayjs.length; i++) {
        radio.addEventListener('click', () => {
            function myFunction() {
                var txt;
                if (confirm("Press a button!")) {
                    txt = "You pressed OK!";
                } else {
                    txt = "You pressed Cancel!";
                }
                document.getElementById("check").innerHTML = txt;
            }
            arrayjs[i].remove()
            background.style.cssText += 'background-color:transparent;box-shadow:none';
            listBig.style.cssText += 'height: 0;overflow: none';

            btnSubmit.style.display = 'none';
            noteInput.style.width = 'auto';

        })
    }
});

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(months[today.getMonth()]);
var yyyy = today.getFullYear();

today = dd + 'th ' + mm + ', ' + yyyy;
let dateUpdated = document.getElementById("date");
dateUpdated.innerHTML = today;