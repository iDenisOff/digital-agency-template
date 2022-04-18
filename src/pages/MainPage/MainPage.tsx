import React from "react";
import styles from "./MainPage.style.css";
import bg from "./images/background.png";
import { Header } from "./childs/Header";
import { Summary } from "./childs/Summary";
import { PartnersList } from "./childs/PartnersList";
import { AboutUs } from "./childs/AboutUs";
import { Portfolio } from "./childs/Portfolio";
import { Services } from "./childs/Services";
import { LinkGetStarted } from "./childs/LinkGetStarted";
import { Footer } from "./childs/Footer";

export const MainPage: React.FC = () => {
    return (
        <div
            className={styles.container}
            style={{
                background: `url(${bg}) no-repeat fixed`,
                backgroundSize: "100%",
                backgroundPosition: "top",
                backgroundAttachment: "local",
            }}
        >
            <Header />
            <Summary />
            <PartnersList />
            <AboutUs />
            <Portfolio />
            <Services />
            <LinkGetStarted />
            <Footer />
        </div>
    );
};
