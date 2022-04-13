import React from "react";
import styles from "./Footer.style.css";
import { Contacts } from "./Contacts";
import { Menu } from "./Menu";
import { Logo } from "./Logo";
import bgEnd from "./images/bgEnd.png";

export const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <Contacts />
            <Menu />
            <Logo />
            <img src={bgEnd} alt={"bgEnd"} className={styles.backgroundEnd} />
        </div>
    );
};
