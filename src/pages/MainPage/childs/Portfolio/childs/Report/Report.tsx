import React from "react";
import styles from "./Report.style.css";
import { ArrowIcon } from "../../../../../../components/Icons/ArrowIcon";

type ReportProps = {
    header: string;
    textFirst: string;
    textSecond: string;
    link: string;
};

export const Report: React.FC<ReportProps> = (props) => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.header}>{props.header}</p>
            <p className={styles.text}>{props.textFirst}</p>
            <p className={styles.text}>{props.textSecond}</p>
            <p style={{ paddingTop: "70px" }}>
                <ArrowIcon color={"#d4d6d4"} />
                <span className={styles.link} onClick={onClick}>
                    {props.link}
                </span>
            </p>
        </div>
    );
};
