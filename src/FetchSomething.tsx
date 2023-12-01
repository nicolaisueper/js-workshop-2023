import {useEffect, useState} from "react";
import {SouthParkAPIResponse} from "./types.ts";

export function FetchSomething() {
    const [data, setData] = useState<SouthParkAPIResponse | undefined>(undefined)
    useEffect(() => {
        fetch("https://spapi.dev/api/characters")
            .then(res => {
                res.json().then(setData);
                console.log(res)
            })
            .catch(() => console.error("😭"))
    }, []);

    if (data) {
        return <div>{data.data[0].name}</div>
    }
    return <div>Hello, world!</div>
}