import React from "react";
import styles from "./AboutUs.style.css";
import { Paragraph } from "./childs/Paragraph";
import { Quote } from "./childs/Quote";

export const AboutUs: React.FC = () => {
    return (
        <div className={styles.container}>
            <Paragraph />
            <Quote />
        </div>
    );
};
