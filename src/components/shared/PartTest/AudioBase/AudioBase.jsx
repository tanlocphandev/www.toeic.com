import { useEffect, useRef, useState } from "react";

const AudioBase = ({ option }) => {
    const audioRef = useRef(null);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        console.log(`readyState:::`, audioRef.current.readyState);
        // if (audioRef.current.paused) {
        //     console.log(`pause`);
        // }
    }, [audioRef.current]);

    return (
        <div className="mt-5 w-full m-auto">
            <audio
                ref={audioRef}
                controls
                autoPlay={false}
                className="w-full mb-5"
                controlsList="nodownload"
            >
                <source src={option.url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioBase;
