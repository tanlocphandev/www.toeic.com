import { memo, useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

const Transcript = ({ transcript }) => {
    const [isTranscriptVisible, setIsTranscriptVisible] = useState(false);

    const toggleTranscript = () => {
        setIsTranscriptVisible(!isTranscriptVisible);
    };

    if (!transcript) return null;

    return (
        <div className="mt-4 ">
            <button
                onClick={toggleTranscript}
                className="flex items-center text-[#34447c] font-medium"
            >
                Hiện Transcript <IoCaretDownOutline className="ml-1" />
            </button>

            {isTranscriptVisible && (
                <div className="text-justify" dangerouslySetInnerHTML={{ __html: transcript }} />
            )}
        </div>
    );
};

export default memo(Transcript);
