import React from "react";
import styles from "./Footer.style.css";
import { Contacts } from "./Contacts";

export const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <Contacts />
        </div>
    );
};
