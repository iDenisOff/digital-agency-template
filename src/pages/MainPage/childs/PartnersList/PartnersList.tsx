import React from "react";
import styles from "./PartnersList.style.css";
import partner_1 from "./images/partner_1.png";
import partner_2 from "./images/partner_2.png";
import partner_3 from "./images/partner_3.png";
import partner_4 from "./images/partner_4.png";
import partner_5 from "./images/partner_5.png";

export const PartnersList: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src={partner_1} alt={"partner_1"} className={styles.image} />
            <img src={partner_2} alt={"partner_2"} className={styles.image} />
            <img src={partner_3} alt={"partner_3"} className={styles.image} />
            <img src={partner_4} alt={"partner_4"} className={styles.image} />
            <img src={partner_5} alt={"partner_5"} className={styles.image} />
        </div>
    );
};
