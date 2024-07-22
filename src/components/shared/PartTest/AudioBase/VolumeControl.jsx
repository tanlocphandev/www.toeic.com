import ButtonControl from "@/components/shared/PartTest/AudioBase/ButtonControl";
import { Slider } from "@/components/ui/slider";
import { memo } from "react";
import { IoMdVolumeHigh } from "react-icons/io";
import { MdOutlineVolumeOff } from "react-icons/md";

const VolumeControl = ({ volume = 100, onChangeVolume = (volume) => {}, onMuted = () => {} }) => {
    const handleOnValueChange = (value) => {
        onChangeVolume?.(value[0]);
    };

    return (
        <div>
            <ButtonControl
                className={"space-x-1 px-3 hover:w-[110px] transition-all duration-300 group "}
            >
                <div
                    className={
                        "opacity-0 w-0 invisible group-hover:opacity-100 group-hover:visible group-hover:w-[100px] transition-all duration-300"
                    }
                >
                    <Slider
                        value={[volume]}
                        min={0}
                        max={100}
                        onValueChange={handleOnValueChange}
                        step={1}
                        size="small"
                    />
                </div>

                <button onClick={onMuted}>
                    {volume === 0 ? <MdOutlineVolumeOff /> : <IoMdVolumeHigh />}
                </button>
            </ButtonControl>
        </div>
    );
};

VolumeControl.displayName = "VolumeControl";

export default memo(VolumeControl);
