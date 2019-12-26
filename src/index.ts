import { useState, useEffect } from "react";

const PROGRESS_VALUES = [0, 25, 75, 90];
const INITIAL_VALUE = PROGRESS_VALUES[0];
const LAST_VALUE = PROGRESS_VALUES[PROGRESS_VALUES.length - 1];
const FINAL_VALUE = 100;

function findNext(n: number) {
    const nextVal = PROGRESS_VALUES.find(v => v > n);
    return (nextVal ? nextVal : LAST_VALUE);
}

const useValueState = (): [number, () => void, () => void] => {
    const [value, setValue] = useState(INITIAL_VALUE);

    const nextValue = () => (setValue(findNext(value)));
    const finalValue = () => (setValue(FINAL_VALUE));
    return [value, nextValue, finalValue];
}

export const useAutoProgressEffect = (start: boolean): [number, (start: boolean) => void] => {
    const [value, nextValue, finalValue] = useValueState();
    const [startProgress, setStartProgress] = useState(start);

    const setStart = (s: boolean) => { 
        if (s !== startProgress) {
            setStartProgress(s);
            // switching off
            if (!s) finalValue(); 
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (startProgress) {
                nextValue();
            }
        }, 200);

        return function cleanUp() {
            clearTimeout(timeout);
        }
    });
    
    return [value, setStart];
}