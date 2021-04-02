import React from 'react'

const style = {
    backgroundColor: 'rgb(180, 170, 170)',
    color: 'green',
    border: '5px solid green',
    borderRadius: '10px',
    paddingLeft: '5px',
}

const Notification = ({message}) => {
    if (!message) return null
    return (
        <div style={style}>
            <p>{message}</p>
        </div>
    )
}

export default Notification