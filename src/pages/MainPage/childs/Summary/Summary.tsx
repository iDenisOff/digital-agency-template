import React from "react";
import styles from "./Summary.style.css";
import { ArrowIcon } from "../../../../components/Icons/ArrowIcon";

export const Summary: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.summary}>
                <p className={styles.label}>{"A place where "}</p>
                <p className={styles.header}>{"A creative agency for redemptive brands"}</p>
                <p className={styles.text}>
                    {"Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises."}
                </p>
                <p>
                    <ArrowIcon />
                    <span className={styles.link} onClick={onClick}>
                        {"Get in touch"}
                    </span>
                </p>
            </div>
        </div>
    );
};
