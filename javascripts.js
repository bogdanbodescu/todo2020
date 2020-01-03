const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


//function to add new todo to template having the input text

const addToTemplate = todo =>{
    
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
    </li>
 `;
    list.innerHTML+=html;

};

//add new todo event

addForm.addEventListener('submit', e=>{
    
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length)
        addToTemplate(todo);
    
    addForm.reset();

});


//remove from todo


list.addEventListener('click', e=>{

    if(e.target.classList.contains('delete')){

        e.target.parentElement.remove();
    }

});


//filter the search using keyup


const filterTodos = term =>{

    Array.from(list.children)
    .filter( todo => !todo.textContent.includes(term))
    .forEach( todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter( todo => todo.textContent.includes(term))
    .forEach( todo => todo.classList.remove('filtered'));

};

search.addEventListener('keyup',()=>{

    const term = search.value.trim();
    filterTodos(term);


});