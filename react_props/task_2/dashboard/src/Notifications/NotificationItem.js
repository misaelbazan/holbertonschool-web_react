import React from 'react';
import './Notifications.css';

function NotificationItem({ type, value, html }) {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
    );
}

export default NotificationItem;