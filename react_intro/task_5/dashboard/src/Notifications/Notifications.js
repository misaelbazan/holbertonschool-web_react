import './Notifications.css';
import React from 'react';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>
                Here is the list of notifications
            </p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                >
                </li>
            </ul>
            <button
                style={{
                    position: 'relative',
                    left: '98%',
                    bottom: '8.5rem',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
                aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}
            >x</button>
        </div>
    );
};