import React from 'react';
import { FaPlay } from "react-icons/fa6";
import { GoUnmute } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Audio = ({ option }) => {
    return (
        <div>
            <div className="mt-5 w-[400px] m-auto">
                <div className="bg-gray-200 py-2 px-4 rounded-full flex items-center justify-between mb-5">
                    <button><FaPlay /></button>
                    {/* <button><IoIosPause /></button> */}
                    <div>0.00 / {option.duration}</div>
                    <div className="w-[200px] h-2 bg-zinc-300 rounded"></div>
                    <button><GoUnmute /></button>
                    <button><HiOutlineDotsVertical /></button>
                </div>
            </div>
        </div>
    )
}

export default Audio