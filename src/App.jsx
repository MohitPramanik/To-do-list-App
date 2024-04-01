import React, { useEffect, useState } from "react";
import AddTodoItem from "./components/AddTodoItem";
import TodoListBox from "./components/TodoListBox";

// to get data from local storage
const getLocalItems = () => {
    let list = localStorage.getItem("todoList");

    if (list) {
        return JSON.parse(localStorage.getItem("todoList"));
    } else {
        return [];
    }
};

const App = () => {
    const [todoList, setTodoList] = useState(getLocalItems());

    function handleAddItem(item) {
        if (!todoList.includes(item)) {
            let newArray = [...todoList, item];
            setTodoList(newArray);
        }
    }

    function handleDeleteItem(toDeleteItem) {
        let newArray = todoList.filter((item) => item != toDeleteItem);
        setTodoList(newArray);
    }

    // to set data to local storage
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div>
            <AddTodoItem addTodoItem={handleAddItem} />
            <TodoListBox listItems={todoList} deleteItem={handleDeleteItem} />
        </div>
    );
};

export default App;
