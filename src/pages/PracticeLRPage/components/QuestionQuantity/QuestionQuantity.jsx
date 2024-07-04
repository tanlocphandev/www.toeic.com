import React from 'react'
import { questionQuantity } from '@/constants'

const QuestionQuantity = ({ partId }) => {

    return (
        <div className=" p-4 rounded-lg border shadow-md">
            <h3 className="text-center">Question Palette</h3>
            <div className="flex mt-3 flex-wrap ">
                {Array.from({ length: questionQuantity[partId] }).map((_, index) => (
                    <button key={index + 1} className="mx-1 mt-2 w-[30px] h-[30px] border border-[#34447c] flex items-center justify-center rounded hover:bg-[#34447c] hover:text-white">
                        {index + 1}
                    </button>
                ))}
            </div>
            <div className="flex justify-center my-5">
                <div className="flex mt-3 items-center mr-3">
                    <p className="w-[15px] h-[15px] bg-green-600 mr-1"></p>
                    <p>0/{questionQuantity[partId]}</p>
                </div>
                <div className="flex mt-3 items-center">
                    <p className="w-[15px] h-[15px] bg-red-600 mr-1"></p>
                    <p>0/{questionQuantity[partId]}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="py-2 px-4 text-white bg-[#34447c] flex items-center justify-center rounded-full ">Chấm điểm</button>
            </div>
        </div>
    )
}

export default QuestionQuantity