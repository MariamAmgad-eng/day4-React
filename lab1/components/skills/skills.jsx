import { Component } from 'react'
import styles from './skills.module.css';

function Skills() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Skills</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eius unde ea omnis autem fugit laudantium ducimus esse vitae earum voluptatum dolore,
                    voluptatibus, asperiores aspernatur ipsa quasi,
                    quod dolor consequatur natus!</p>
            </div>
            <div className={styles.skillSections}> 
                <div className={styles.focus}>
                    <h1>Focus</h1>
                    <ol>
                        <li>UI</li>
                        <li>Web</li>
                        <li>Mobile App</li>
                    </ol>
                </div>
                <div className={styles.technologies}>
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Skills