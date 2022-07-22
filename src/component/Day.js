// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from './Word';
import useFetch from '../hooks/useFetch'
import { useNavigate } from "react-router-dom";

export default function Day() {
    const { day } = useParams();
    // const wordList = dummy.words.filter(word=> word.day === Number(day));

    // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setWords(data);
    //         })
    // }, [day])

    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    const navigate = useNavigate();

    function next() {
        navigate(`/day/${Number(day)+1}`);
    }

    function prev() {
        navigate(`/day/${Number(day)-1}`);
    }

    if(words.length === 0) {
        return <span>Loading...</span>
    }
    
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word key={word.id} word={word} />
                    ))}
                </tbody>
            </table>

            <button onClick={prev}>이전</button>
            <button onClick={next}>다음</button>
        </>
    )
}
