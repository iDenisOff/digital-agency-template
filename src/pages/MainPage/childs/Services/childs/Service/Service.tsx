import React from "react";
import styles from "./Service.style.css";
import { ArrowIcon } from "../../../../../../components/Icons/ArrowIcon";
import { styler } from "../../../../../../utils/styler";

type ServiceProps = {
    header: string;
    text: string;
    link: string;
    linkIsActive: boolean;
};

export const Service: React.FC<ServiceProps> = (props) => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <p className={styles.header}>{props.header}</p>
            <p className={styles.text}>{props.text}</p>
            <p>
                <ArrowIcon color={props.linkIsActive ? "#ffd723" : "#d4d6d4"} />
                <span className={styler(styles.link, [props.linkIsActive, styles.linkActive])} onClick={onClick}>
                    {props.link}
                </span>
            </p>
        </div>
    );
};
