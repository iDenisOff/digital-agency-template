import React from "react";
import styles from "./Paragraph.style.css";
import { ArrowIcon } from "../../../../../../components/Icons/ArrowIcon";

export const Paragraph: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.label}>{"What we do for you"}</p>
            <p className={styles.header}>{"Strategy. Design  Content. Technology Development  "}</p>
            <p className={styles.text}>
                {
                    "There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration."
                }
            </p>
            <p>
                <ArrowIcon color={"#d4d6d4"} />
                <span className={styles.link} onClick={onClick}>
                    {"More know About us"}
                </span>
            </p>
        </div>
    );
};
