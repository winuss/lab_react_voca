import React from 'react';
import { Link } from "react-router-dom"
// import { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";

export interface IDay {
    id: number;
    day: number;
}

export default function DayList() {
    // console.log("dummy", dummy);
    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/days")
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setDays(data);
    //         })
    // }, [])

    const days: IDay[] = useFetch("http://localhost:3001/days");

    if(days.length === 0)  {
        return <span>Loading...</span>
    }

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    {/* <a href -> Lint to */}
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}
