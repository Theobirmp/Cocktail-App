import React from 'react'

const WhiteLine = ({colour}) => {
    return (
        <hr
        style={{
            color: colour,
            backgroundColor: colour,
            height: 5,
            width:"50%",
            borderRadius:"10rem"
        }}
    />
    )
}

export default WhiteLine
