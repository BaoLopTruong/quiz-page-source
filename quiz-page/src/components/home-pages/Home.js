import Navbar from "./Navbar";
import './home.css'
import Ranking from "./Ranking";

export default function Home(){
    return(
        <div className="home">
        <Navbar></Navbar>
        <div className="search">
        <h2>Find your Quiz</h2>
            <div className="input-search">
            <input placeholder="Enter your code"></input>
            <button>Find</button>
            </div>
        </div>
        <Ranking></Ranking>
        </div>
    )
}