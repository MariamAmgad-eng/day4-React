import React from 'react';
import style from './card.module.css';

function Card({ content, bg }) {
    return (
        <div className={style.card} style={{ background: bg }}>
            <p>{content}</p>
        </div>
    );
}

export default Card;
