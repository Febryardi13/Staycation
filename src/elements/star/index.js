import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star({ className, value, width, height, spacing }) {
    const decimals = Number(value) % 1
    // console.log(decimals)
    // console.log(value - decimals)
    const star = []
    let leftPost = 0;
    for (let i = 0; i <  5 && i < value - decimals; i++) {
        leftPost = leftPost + width
        star.push(
            <div 
                key={`star-${i}`}
                className="star"
                style={{ 
                    left: i * width, 
                    height: height, 
                    width: width, 
                    marginRight: spacing
                }}
            ></div>
        );
    }

    if (decimals > 0 && value <= 5){
        star.push(
            <div 
                key={`starWithDecimal`}
                className="star"
                style={{ 
                    left: leftPost, 
                    height: height, 
                    width: decimals * width - spacing}}
            ></div>
        )
    }
    
    const starPlaceholder = []
    for (let i = 0; i <  5 ; i++) {
        starPlaceholder.push(
            <div 
                key={`starPlaceholder-${i}`}
                className="star placeholder"
                style={{ left: i * width, height:height, width:width, marginRight: spacing}}
            ></div>
        )
    }

    return (
        <>
            <div className={ ["stars", className].join(" ") } style={{ height:height }}>
                {starPlaceholder}
                {star}
            </div>
        </>
    )
}

Star.propTypes = {
    className:propTypes.string,
    value:propTypes.number,
    width:propTypes.number,
    height:propTypes.number,
    spacing:propTypes.number,
}
