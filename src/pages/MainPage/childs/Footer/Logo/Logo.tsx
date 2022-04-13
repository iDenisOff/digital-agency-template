import React from "react";
import styles from "./Logo.style.css";
import logo from "./images/logo.png";

export const Logo: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt={"logo"} />
            <p className={styles.logoText}>{"webovio."}</p>
            <p className={styles.text}>{"© 2020@webovio. All Rights Reserved."}</p>
        </div>
    );
};
