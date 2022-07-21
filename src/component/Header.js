import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
        <h1>
            {/* <a href="/">아이템 고급</a> */}
            <Link to="/">아이템 단어 고급</Link>
        </h1>
        <div className='menu'>
            <a href="create_word" className="link">
                아이템 추가
            </a>
            <a href="#x" className="link">
                Day 추가
            </a>
        </div>
    </div>
  )
}
