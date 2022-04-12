import React from "react";
import styles from "./Quote.style.css";

type QuoteProps = {
    text: string;
    photo: string;
    name: string;
    position: string;
    style: React.CSSProperties;
};

export const Quote: React.FC<QuoteProps> = (props) => {
    return (
        <div className={styles.container} style={props.style}>
            <p className={styles.text}>{props.text}</p>
            <div className={styles.authorContainer}>
                <img src={props.photo} alt={props.photo} className={styles.image} />
                <div style={{ marginTop: "0" }}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.position}>{props.position}</p>
                </div>
            </div>
        </div>
    );
};
