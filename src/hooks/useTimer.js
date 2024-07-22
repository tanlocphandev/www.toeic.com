import { TIMER_TYPES } from "@/constants";
import { useEffect, useState } from "react";

const useTimer = (props = { type: TIMER_TYPES.UP, initialValue: 0, stopCounter: false }) => {
    const { type, initialValue, stopCounter } = props;
    const [timer, setTimer] = useState(initialValue);

    useEffect(() => {
        let interval;

        if (stopCounter) {
            clearInterval(interval);
            return;
        }

        interval = setInterval(() => {
            if (type === TIMER_TYPES.UP) {
                setTimer((timer) => timer + 1);
            } else {
                setTimer((timer) => timer - 1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [type, stopCounter]);

    return timer;
};

export default useTimer;
