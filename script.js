// document.querySelector('.button').addEventListener('click',
// function(event){
//     // console.log("hi, you clicked");
//     event.preventDefault();
//    })
// document.querySelector('.button').addEventListener('dblclick',
// function(e){
// // console.log('you clicked double on Add');
// e.preventDefault();
// })
// const heading = document.querySelectorAll('.title')[1];
// document.body.addEventListener('mousemove',
// function(e){
//     // console.log(`mouseX: ${e.offsetX}, mouseY: ${e.offsetY}`);
//     heading.innerHTML=`mousX: ${e.offsetX}, mouseY: ${e.offsetY}`;
//     e.preventDefault();
// })
//////
// const inputTxt = document.querySelector('#add-book input');
// const link = document.querySelector('.button');
// inputTxt.value = '';
// link.addEventListener('click',
// function(e){
//     console.log(inputTxt.value);
//     inputTxt.value='';
//     e.preventDefault();
// })
// inputTxt.addEventListener('focus',
// function(e){
//     console.log('selected');
// })
// inputTxt.addEventListener('blur',
// function(e){
//     console.log('unSelected');
// })
////////////
// const checkBox = document.querySelector('#hide input');
// const heading = document.querySelectorAll('.title')[1];
// const ul= document.querySelector('ul');

// checkBox.addEventListener('change',
// function(e){
//     if(checkBox.checked){
//         heading.style.display = 'none';
//         ul.style.display = 'none';
//     }else{
//         heading.style.display = 'block';
//         ul.style.display = 'initial';
//         console.log('unChecked');
//     }
// })

/////// localStorage: customize and controll Google Chrome-> 
// More tools-> Developer tools-> Application-> Storage-> Local Storage
// Key,Value
// localStorage.setItem('ali-key','Majidi-value') ;
// const kk = localStorage.getItem('ali-key');
// console.log(kk);
// localStorage.clear();
// const arr = ['Ali','Hamid','Fati'];
// const obj = {name:'Alireza',age:45};
// localStorage.setItem('array',arr);
// localStorage.setItem('object',JSON.stringify(obj));
// const myArray = localStorage.getItem('array').split(',');
// const myObject = JSON.parse(localStorage.getItem('object'));
// console.log(myObject);
////////////////////////
const inputTxt = document.querySelector('#add-book input');
const link = document.querySelector('.button');
const ul = document.querySelector('ul');
const checkBox = document.querySelector('#hide input');
const spanDelete = `<span class="delete">Delete</span>`;
const inputSearch = document.querySelector('#search-books input');

link.addEventListener('click',
function(e){
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = inputTxt.value ;
    const li = document.createElement('li');
    li.appendChild(spanName);
    li.innerHTML += spanDelete;
    ul.appendChild(li);

    storeToLocalStorage(inputTxt.value);//implement this funtion below

    inputTxt.value='';
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', function(e){
    let tasks;  // array of task
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    for (let item of tasks) {
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = item ;
    const li = document.createElement('li');
    li.appendChild(spanName);
    li.innerHTML += spanDelete;
    ul.appendChild(li);
    }
})

function storeToLocalStorage(task){
    let tasks;  // array of task
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    tasks.push(task); // adding element task in array tasks

    localStorage.setItem('tasks',tasks);
}

// Delete button
ul.addEventListener('click',
function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();
        removeFromLocalStorage(e.target.parentElement.children[0].textContent);
        }
});
function removeFromLocalStorage(task){
    let tasks;  // array of task
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    }else{
        tasks = localStorage.getItem('tasks').split(',');
    }

    for(let i=0; i<tasks.length;i++){
        if(tasks[i]===task){
            tasks.splice(i,1);
        }
    }
    if(tasks.length===0){
        localStorage.clear();
    }else{
    localStorage.setItem('tasks',tasks);
    }

}

// hide checkBox:
checkBox.addEventListener('change', 
function(e){
    if(checkBox.checked === true){
        ul.style.display = 'none';
    }else{
        ul.style.display = 'block';
    }
})
// search books bar
inputSearch.addEventListener('keyup',
function(e){
    for (let book of ul.children) {
        if(book.firstElementChild.textContent.indexOf
            (inputSearch.value) !== -1){
                book.style.display = 'block';
            }else{
                book.style.display = 'none';
            }
    }
})












