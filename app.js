const addItem = document.querySelector('.add');
const todoList = document.querySelector('ul.todos');
const search = document.querySelector('.search');

const generateHTML = todo => {
    const html = `
        <li class="list-group-item d-flex list-group-item-primary justify-content-between align-itmes-center rounded-0 mb-1">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todoList.innerHTML += html;
};

addItem.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addItem.addNew.value.trim();
    if (todo.length) {
        generateHTML(todo);
        addItem.reset();
    }
});

todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(todoList.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('d-none'));

    Array.from(todoList.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('d-none'));

}

search.addEventListener('keyup', () => {
    const term = search.search.value.trim().toLowerCase();
    //if (term.length) {
    filterTodos(term);
    //}
});