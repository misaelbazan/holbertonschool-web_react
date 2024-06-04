import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

function Notifications({ displayDrawer, listNotifications }) {
    return (
        <>
        <div className='menuItem'>
            <p>Your Notifications</p>
        </div>
        {displayDrawer && (
            <div className='Notifications'>
                <p>
                    Here is the list of notifications
                </p>
                <ul>
                    {listNotifications.length === 0 ? (
                        <NotificationItem type='default' value='No new notification for now' />
                    ) : (
                        listNotifications.map((notification) => (
                            <NotificationItem
                                key={notification.id}
                                html={notification.html}
                                type={notification.type}
                                value={notification.value}
                            />
                    )))}
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
        )}
        </>
    );
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;