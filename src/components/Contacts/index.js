import React from 'react';

import './contacts.css';

export function Contacts() {
    return (
        <div className="contacts-container">
            <ul className="contacts-ul">
                <li>Туристический информационный центр:</li>
                <li>город Тернополь, 69000</li>
                <li>проспект Соборный 151</li>
                <li>mycitytic@gmail.com</li>
            </ul>
            <ul className="contacts-ul">
                <li>Администрация:</li>
                <li>+380504242054</li>
                <li>+380617097001</li>
            </ul>
        </div>
    )
}