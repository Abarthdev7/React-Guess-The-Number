import React from 'react'
import parags from '../../Parags'
import Content from './Content'

function Main(props) {
    const applyWhat = props.applyWhat
    
    return (

        <div >
         <Content applyWhat={applyWhat} message={parags.message} score={parags.score} highscore={parags.highscore} />
        </div>
    )
}

export default Main

