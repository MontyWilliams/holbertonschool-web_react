import React from 'react';
import './Notifications.css'
import x from "./close_x.png"
import {getLatestNotification} from './utils'

export default function Notifications () {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        onClick={() => console.log('Close button has been clicked')}
        style={{ position: 'absolute', top: '15px', right: '15px' }}
      >
        <img src={x} alt='icon'width={20}/>
      </button>
      <ul>
        <li data-priority='default'>New coures available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  )
}
