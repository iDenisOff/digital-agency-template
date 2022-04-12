import React from "react";
import styles from "./Quote.style.css";
import selfie from "./images/selfie.png";

export const Quote: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                {
                    "With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed"
                }
            </div>
            <div className={styles.authorContainer}>
                <img src={selfie} alt={"selfie"} />
                <div style={{ marginTop: "35px" }}>
                    <p className={styles.authorName}>{"Genevieve Rodriquez"}</p>
                    <p className={styles.authorPosition}>{"Founder & CEO, Webovio"}</p>
                </div>
            </div>
        </div>
    );
};
