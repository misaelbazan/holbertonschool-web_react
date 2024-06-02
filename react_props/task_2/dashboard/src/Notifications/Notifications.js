import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';

function Notifications() {
    return (
        <div className='Notifications'>
            <p>
                Here is the list of notifications
            </p>
            <ul>
		        <NotificationItem type="default" value="New course available" />
		        <NotificationItem type="urgent" value="New resume available" />
		        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
	        </ul>
            <button
                style={{
                    position: 'relative',
                    left: '97%',
                    top: '-20vh',
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

export default Notifications;