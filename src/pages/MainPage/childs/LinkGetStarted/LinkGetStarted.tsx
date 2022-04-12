import React from "react";
import styles from "./LinkGetStarted.style.css";
import { ArrowIcon } from "../../../../components/Icons/ArrowIcon";

export const LinkGetStarted: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.header}>{"Let’s make something amazing together."}</p>
            <p>
                <ArrowIcon color={"#d4d6d4"} />
                <span className={styles.link} onClick={onClick}>
                    {"Let's get started"}
                </span>
            </p>
        </div>
    );
};
