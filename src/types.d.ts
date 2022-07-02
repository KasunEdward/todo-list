interface Todo {
    text: string,
    complete: boolean
}

interface AddTodoObj {
    todoText: string
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (todoObj: AddTodoObj) => void;