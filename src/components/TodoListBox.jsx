import React from "react";
import TodoItem from "./TodoItem";

function TodoListBox({ listItems, deleteItem }) {
    return (
        <div className="flex justify-center w-full">
            <div className="border-2 border-black bg-[#2d2a2a29] rounded-lg sm:w-[75%] lg:w-[72%] xl:w-[62%] w-[85%] p-3 flex flex-col gap-3 bg-slate-300">
                {listItems.length === 0 ? (
                    <p className="text-center">No Task left</p>
                ) : (
                    listItems.map((item) => (
                        <TodoItem
                            key={item}
                            item={item}
                            deleteItem={deleteItem}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoListBox;
