import './Notifications.css';
import React from 'react';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>
                Here is the list of notifications
            </p>
            <button
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
                aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}
            >x</button>
        </div>
    )
}