import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })
    }, [url])

    return datas;
}
