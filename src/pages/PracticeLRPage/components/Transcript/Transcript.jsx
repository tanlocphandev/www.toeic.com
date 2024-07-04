import React, { useState } from 'react';
import { IoCaretDownOutline } from "react-icons/io5";

const Transcript = ({ option }) => {
    const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);

    const toggleTranscript = () => {
        setIsTranscriptVisible(!isTranscriptVisible);
    };

    return (
        <div className="mt-4 ">
            <button onClick={toggleTranscript} className="flex items-center text-[#34447c] font-medium">Hiện Transcript <IoCaretDownOutline className="ml-1" /></button>
            {isTranscriptVisible && (
                <div className='text-justify' dangerouslySetInnerHTML={{ __html: option.transcript }} />
            )}
        </div>
    )
}

export default Transcript