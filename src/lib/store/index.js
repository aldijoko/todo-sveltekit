import { v4 as uuids4 } from "uuid";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const data = browser ? JSON.parse(window.localStorage.getItem("todo-list")) ?? [] : [];

export const todoData = writable(data);

todoData.subscribe((value) => {
    if(browser) {
        localStorage.setItem("todo-list", JSON.stringify(value))
    }
})

export const addTodo = () => {
    todoData.update((currentTodos) => {
        return [...currentTodos, { id: uuids4(), text: '', complete: false }, ];
    });
}

export const removeTodo = (id) => {
    todoData.update((currentTodos) => {
        return currentTodos.filter((todo) => todo.id !== id);
    });
}

export const toggleComplete = (id) => {
    todoData.update((currentTodos) => {
        return currentTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        });
    });
}

export const updateTodo = (id, text) => {
    todoData.update((currentTodos) => {
        return currentTodos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text };
            }
            return todo;
        });
    });
}