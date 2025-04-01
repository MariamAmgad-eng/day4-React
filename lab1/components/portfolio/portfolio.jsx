import React from 'react';
import Card from '../card/card';
import style from './portfolio.module.css'; 
function Portfolio() {
    const cardsData = [
        { content: "Web Development", bg: "lightblue" },
        { content: "UI/UX Design", bg: "lightcoral" },
        { content: "Mobile App Development", bg: "lightgreen" },
        { content: "Backend Development", bg: "lightsalmon" },
        { content: "Data Analysis", bg: "lightseagreen" },
        { content: "Cybersecurity", bg: "lightgray" }
    ];

    return (
        <div className={style.portfolio}>
            {cardsData.map((card, index) => (
                <Card key={index} content={card.content} bg={card.bg} />
            ))}
        </div>
    );
}

export default Portfolio;
