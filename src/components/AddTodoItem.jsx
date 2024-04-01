import React, { useRef } from "react";
import { MdPostAdd } from "react-icons/md";

const AddTodoItem = ({ addTodoItem }) => {
    const todoItem = useRef(null);

    function addItem() {
        let item = todoItem.current.value;
        if (item.trim().length !== 0) {
            addTodoItem(item);
            todoItem.current.value = "";
        }
    }

    return (
        <div className="flex justify-center items-center mt-10 mb-3 w-full">
            <div className="flex justify-center items-center border-2 border-black xl:w-[62%] sm:w-[75%] lg:w-[72%] w-[85%] bg-slate-300 rounded-lg p-2 gap-3">
                <input
                    type="text"
                    placeholder="Enter todo item"
                    ref={todoItem}
                    className="border-2 border-black p-2 m-2 w-[80%] text-xl"
                    onKeyDown={(e) => {
                        if (e.code === "Enter") {
                            addItem();
                        }
                    }}
                />

                {/* Buttons get shown according to screen size */}
                <button
                    className="bg-red-500 w-28 sm:flex justify-center items-center text-white text-lg font-bold px-8 py-2 rounded-lg border-2 border-black active:bg-green-500 hover:bg-red-600 hidden"
                    onClick={addItem}
                >
                    Add
                </button>
                <button
                    className="bg-red-500 w-12 flex justify-center items-center text-white text-lg font-bold rounded-lg border-2 border-black active:bg-green-500 hover:bg-red-600 py-3 sm:hidden"
                    onClick={addItem}
                >
                    <MdPostAdd />
                </button>
            </div>
        </div>
    );
};

export default AddTodoItem;
