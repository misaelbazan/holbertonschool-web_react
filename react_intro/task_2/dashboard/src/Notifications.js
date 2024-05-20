import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  const buttonStyle = {
    border: 'none',
    backgroundColor: "#F8f8f8",
    display: 'flex',
    position: 'absolute',
    verticalAlign: 'center',
    left: '94%',
    justifyContent: 'center',
    width: '32px', 
    padding: '0.4rem',
    borderRadius: '45%',
    fontFamily: 'Verdana',
  };
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="Notifications">
        <div className="Notifications-List">
          <p>
            Here is the list of notifications
          </p>
          <ul>
            <li data-priority="default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
          </ul>
        </div>
        <button 
          style={buttonStyle}
          aria-label='Close'
          onClick={handleButtonClick}
          ><strong>X</strong></button>
      </div>
    </>
  )
}

export default Notifications