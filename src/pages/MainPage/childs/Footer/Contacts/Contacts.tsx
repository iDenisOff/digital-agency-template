import React from "react";
import styles from "./Contacts.style.css";

export const Contacts: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <p className={styles.text}>{"Phone"}</p>
                <p className={styles.header}>{"+32 50 31 28 32"}</p>
            </div>
            <div>
                <p className={styles.text}>{"Address"}</p>
                <p className={styles.header}>{"491 Merlin Crest Suite 963"}</p>
            </div>
        </div>
    );
};
