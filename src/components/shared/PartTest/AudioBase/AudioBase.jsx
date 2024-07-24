import ButtonControl from "@/components/shared/PartTest/AudioBase/ButtonControl";
import OptionControl from "@/components/shared/PartTest/AudioBase/OptionControl";
import VolumeControl from "@/components/shared/PartTest/AudioBase/VolumeControl";
import { Slider } from "@/components/ui/slider";
import { questionActions, useQuestionSlice } from "@/redux/slices/question.slice";
import { convertZero } from "@/utils";
import { memo, useCallback, useEffect, useId, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const fDuration = (duration) => {
    return convertZero(Math.floor(duration / 60)) + ":" + convertZero(Math.floor(duration % 60));
};

const AudioBase = ({ option }) => {
    const [isPlay, setIsPlay] = useState(false);
    const [volume, setVolume] = useState(100);
    const [currentTime, setCurrentTime] = useState(0);
    const [speed, setSpeed] = useState(1);
    const audioRef = useRef(null);
    const currentVolume = useRef(volume);
    const dispatch = useDispatch();
    const { activeAudioQuestion: activeAudio } = useQuestionSlice();
    const audioId = useId();

    useEffect(() => {
        if (!audioRef.current || !activeAudio) return;

        if (activeAudio !== audioId && isPlay) {
            setIsPlay(false);
            audioRef.current.pause();
        }
    }, [isPlay, audioRef.current, activeAudio, audioId]);

    const handleToggleAudio = useCallback(() => {
        if (!audioRef.current) return;

        // set active run audio question
        if (audioId !== activeAudio) {
            dispatch(questionActions.setActiveAudioQuestion(audioId));
        }

        if (isPlay) {
            audioRef.current.pause();
            setIsPlay(false);
        } else {
            audioRef.current.play();
            setIsPlay(true);
        }
    }, [isPlay, audioRef.current, activeAudio, audioId]);

    const handleOnTimeUpdate = useCallback((event) => {
        const currentTime = event.target.currentTime;
        setCurrentTime(currentTime);
    }, []);

    const handleOnEnded = useCallback(() => {
        setIsPlay(false);
    }, []);

    const handleChangePositionTime = useCallback(
        (value) => {
            if (!audioRef.current) return;
            const positionTime = value[0];
            audioRef.current.currentTime = positionTime;
            setCurrentTime(positionTime);
        },
        [audioRef.current]
    );

    const handleChangeVolume = useCallback(
        (value) => {
            if (!audioRef.current) return;
            audioRef.current.volume = value / 100;
            setVolume(value);
        },
        [audioRef.current, currentVolume.current]
    );

    const handleToggleMuted = useCallback(() => {
        if (!audioRef.current) return;
        let newVolume = volume === 0 ? currentVolume.current : 0;
        audioRef.current.volume = newVolume / 100;
        setVolume(newVolume);
    }, [audioRef.current, currentVolume.current, volume]);

    const handleChangeSpeed = useCallback(
        (newSpeed) => {
            if (!audioRef.current) return;
            audioRef.current.playbackRate = newSpeed;
            setSpeed(newSpeed);
        },
        [audioRef.current]
    );

    const handleReloadAudio = useCallback(() => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
    }, [audioRef.current]);

    return (
        <div className="mt-5 w-full m-auto">
            <div className="w-full flex flex-row items-center space-x-4 px-3 h-[54px] mb-2 bg-[#f2f3f5] rounded-full shadow-none">
                <div className="flex items-center">
                    {/* control play and pause */}
                    <ButtonControl onClick={handleToggleAudio}>
                        {isPlay ? (
                            <FaPause className="text-[12px] pl-[2px]" />
                        ) : (
                            <FaPlay className="text-[12px] pl-[2px]" />
                        )}
                    </ButtonControl>

                    {/* duration */}
                    <p className="text-sm ml-1 text-[#34447c] font-sans">
                        {fDuration(currentTime)} / {fDuration(option?.duration)}
                    </p>
                </div>

                {/* progress bar */}
                <div className="flex-1 transition-all">
                    <Slider
                        value={[currentTime]}
                        max={option?.duration}
                        step={0.01}
                        onValueChange={handleChangePositionTime}
                        className="cursor-pointer"
                    />
                </div>

                <div className="flex items-center">
                    {/* volume */}
                    <VolumeControl
                        volume={volume}
                        onChangeVolume={handleChangeVolume}
                        onMuted={handleToggleMuted}
                    />

                    {/* control option */}
                    <OptionControl
                        activeSpeed={speed}
                        onChangeSpeed={handleChangeSpeed}
                        onReload={handleReloadAudio}
                    />
                </div>
            </div>

            {/* source audio */}
            <audio
                hidden
                ref={audioRef}
                onTimeUpdate={handleOnTimeUpdate}
                onEnded={handleOnEnded}
                controls
                autoPlay={false}
            >
                <source src={option?.url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

AudioBase.displayName = "AudioBase";

export default memo(AudioBase);
