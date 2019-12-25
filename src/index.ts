import { useState } from "react";

export const useAutoProgressEffect = (start: boolean) : [number, (b: boolean) =>void] => {
    const [value, setValue] = useState(0);

    const setStart = (b: boolean) => {if (!b) setValue(100);}
    
    return [value, setStart];
}