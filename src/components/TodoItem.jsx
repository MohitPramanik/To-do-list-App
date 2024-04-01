import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

function TodoItem({ item, deleteItem }) {
    return (
        <div className="flex justify-center items-center w-full border-2 border-black bg-gradient-to-r from-blue-800 to-[#df0e96] p-3 rounded-lg">
            <div className="w-full text-xl rounded-full sm:ps-10 ps-4 text-white font-semibold">
                {item}
            </div>

            {/* Buttons get shown according to screen size */}
            <button
                className="bg-[#9308dd] w-28 sm:flex justify-center items-center text-white text-lg font-bold px-8 py-2 rounded-lg border-2 border-black active:bg-red-500 hover:bg-[#a731e5] hidden"
                onClick={() => deleteItem(item)}
            >
                Delete
            </button>
            <button
                className="bg-[#9308dd] w-12 flex justify-center items-center text-white text-lg font-bold rounded-lg border-2 border-black active:bg-red-500 hover:bg-[#a731e5] py-3 sm:hidden"
                onClick={() => deleteItem(item)}
            >
                <RiDeleteBin5Fill />
            </button>
        </div>
    );
}

export default TodoItem;
