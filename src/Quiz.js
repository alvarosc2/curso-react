import { Component } from "react";
import QuizOptions from "./QuizOptions";

class Quiz extends Component {
    constructor(props){
        super(props);

        let riddle = this.playGame()

        this.state = {riddle};
        this.renderOptions = this.renderOptions.bind(this);
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    playGame() {
        let riddle = {
            resultsArray: [10, 12, 8, 2],
            field1: 5,
            field2: 5,
            answer: 10
        }

        return riddle;
    }

    renderOptions() {
        return <div className="options">
            {this.state.riddle.resultsArray.map((option, index) => <QuizOptions key={index} option={option} />)}
        </div>
    }

    render() {
        return <div className="quiz">
            <div className="quiz-content">
                <p className="question">What is the sum of <span className="text-info">5</span> and <span className="text-info">5</span>?</p>
                {this.renderOptions()}
                <div className="play-again">
                    <a className="button">Play Again</a>
                </div>
            </div>
        </div>
    }

}

export default Quiz;