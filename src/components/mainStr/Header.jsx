import React, { useEffect, useState } from 'react'

function Header(props) {
    const displayNumber = props.displayNumber;
    const refresh = props.reloadPage;
    let [whatBackground, setWhatBackground] = useState('rgb(80, 79, 79)')
    let [whatWidth, setWhatWidth] = useState('12rem')

    // let whatBackground = "rgb(80, 79, 79)";
    // let whatWidth = '12rem';

    useEffect(() => {        // Using useEffect to change certain style displays after certain conditions
        if (displayNumber != '?') {
            setWhatBackground("rgb(120, 224, 120)")
            console.log('2')
            setWhatWidth('18rem')
            console.log('3')
        }
    }, [displayNumber])

    // if (displayNumber != "?") {
    //     whatBackground = "rgb(120, 224, 120)"
    //     whatWidth = '18rem'
    // }



    const whatCss = {
        position: 'absolute',
        textAlign: 'center',
        color: 'lightcyan',
        width: whatWidth,
        backgroundColor: whatBackground,
        height: '12rem',
        fontSize: '10rem',
        borderRadius: '12px',
        transform: 'translate(-50%, 50%)',
        bottom: '0',
        left: '50%',
        fontFamily: 'Audiowide, cursive',
        color: 'lightcoral'
    }

    return (
        <header>
            <h1 className='main-header'>Guess My Number!</h1>
            <p className='between'>(Between 1 and 99)</p>
            <button onClick={refresh} className='again'>Again!</button>
            <div className='what' style={whatCss}>{displayNumber}</div>
        </header>
    )
}

export default Header;
