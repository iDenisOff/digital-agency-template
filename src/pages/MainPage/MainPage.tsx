import React from "react";
import styles from "./MainPage.style.css";
import bg from "./images/background.png";
import { Header } from "./childs/Header";
import { Summary } from "./childs/Summary";
import { PartnersList } from "./childs/PartnersList";

export const MainPage: React.FC = () => {
    return (
        <div className={styles.container} style={{ background: `url(${bg}) no-repeat fixed`, backgroundSize: "100%" }}>
            <Header />
            <Summary />
            <PartnersList />
        </div>
    );
};
