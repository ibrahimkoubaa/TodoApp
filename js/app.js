let todoApp = [];
let newTodo = document.getElementById('newTodo');
let submitTodo = document.getElementById('submitTodo');
let searchTodo = document.getElementById('searchTodo');
let list = document.getElementById('carts');
getLocalStorage();

function rendreing(todoApp) {
    list.innerHTML = "";
    for (let i = 0; i < todoApp.length; i++) {
        let newItem = document.createElement('li');
        newItem.className = 'cart';
        newItem.id = 'itemCart';
        newItem.innerHTML = '<input id="check" type="radio">';
        let textNote = document.createElement('span');
        textNote.className = 'textnote';
        textNote.id = Date.now();
        newItem.append(textNote);
        list.append(newItem);
        list.style.cssText += 'background-color:#FFFFFF;box-shadow:0px 4px 14px rgba(0, 0, 0, 0.14)';
        list.prepend(newItem);
        let index = todoApp[i].value;
        textNote.textContent = index;
    };
};

newTodo.onkeyup = function() {
    if (newTodo.value.trim() !== "") {
        submitTodo.disabled = false;
        submitTodo.style.cssText = 'cursor: pointer;color: #7556CD;background: linear-gradient( 180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.276) 100%);'
    }
};

searchTodo.addEventListener('keyup', function() {
    let searchTodoLowerC = searchTodo.value.toLowerCase();
    let arrFilitred = todoApp.filter((founded) => {
        foundedValue = founded.value;
        return foundedValue.includes(searchTodoLowerC);
    });
    console.log(arrFilitred)
    rendreing(arrFilitred);
});

submitTodo.addEventListener('click', () => {
    if (newTodo.value.trim() !== "") {
        let newAdd = { value: newTodo.value, id: Date.now() };
        todoApp.push(newAdd);

        rendreing(todoApp);
        storeLocalStorage(newAdd)
    };
    newTodo.value = "";
});



function storeLocalStorage(added) {
    if (localStorage.getItem('boxStorage') === null) {
        todoApp = []
    } else {
        todoApp = JSON.parse(localStorage.getItem('boxStorage'))
    }
    todoApp.push(added);
    localStorage.setItem('boxStorage', JSON.stringify(todoApp))
};

function getLocalStorage() {
    if (localStorage.getItem('boxStorage') !== null) {
        todoApp = JSON.parse(localStorage.getItem('boxStorage'))

    }
    rendreing(todoApp);

};

list.addEventListener('click', function(e) {

    if (e.target.id === 'check') {
        todoApp = JSON.parse(localStorage.getItem('boxStorage'));
        todoApp.map((i) => {

            if (i.value === e.target.nextSibling.innerHTML) {
                console.log(e.target.nextSibling.id)
                let message = confirm("Do you want to remove it !!");
                if (message) {

                    let koko = todoApp.splice(todoApp.indexOf(i.id), 1);

                    e.target.parentNode.remove();

                }
                e.target.checked = false;
            }
        })


    }
    localStorage.setItem('boxStorage', JSON.stringify(todoApp))
});