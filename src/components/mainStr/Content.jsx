import React, { useState } from 'react'

const secretNumber = Math.floor(Math.random() * 99) + 1


function Content(props) {
    let [score, setScore] = useState(20)
    const [highScore, setHighScore] = useState('0');
    const [message, setMessage] = useState('Start guessing . . .');
    const [guess, setGuess] = useState('');
    const [disable, setDisable] = useState(false);
    const applyWhat = props.applyWhat
    let highScoreDisplay = 0


    const inputHandler = (event) => {  //Gets the input from the user
        setGuess(event.target.value)
    }

    const disableBtn = () => { //Disables the buttons and input field
        setDisable(true)
    }

    const check = () => {
        if (guess <= 0 || guess > 99) {
            setMessage('No Number!')
            return score
        } else if (secretNumber == guess) {
            setMessage('🏆 Correct! The number is : ' + guess)
            disableBtn()
            applyWhat(guess)

            if (score > highScoreDisplay) {
                highScoreDisplay = score
                setHighScore(highScoreDisplay)
            }
            return score
            
        } else if (guess > secretNumber) {
            if (score < 2) {
                setMessage('You Lost The Game!')
                disableBtn()
                return score = 0
            } else {
                setMessage('📉 Too high!')
                return score - 1
            }
        } else if (guess < secretNumber) {
            if (score < 2) {
                setMessage('You Lost The Game!')
                disableBtn()
                return score = 0
            } else
                setMessage('📈 Too low!')
            return score - 1
        }
    }

    const checkHandler = () => {
        setScore(check)
    }

    return (
        <main className='main-content'>

            <section className='left'>
                <input type="number" className='guess' disabled={disable} onChange={inputHandler} />
                <button className='btn' disabled={disable} onClick={checkHandler}>Check!</button>
            </section>

            <section className='right'>
                <p className='message'>{message}</p>
                <p className='label-score'>{props.score} {score}</p>
                <p className='label-score'>{props.highscore} {highScore}</p>
            </section>
        </main>
    )
}

export default Content;
