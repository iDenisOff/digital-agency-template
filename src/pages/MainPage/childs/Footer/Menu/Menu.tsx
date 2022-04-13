import React from "react";
import styles from "./Menu.style.css";
import { FacebookIcon } from "../Contacts/icons/FacebookIcon";
import { TwitterIcon } from "../Contacts/icons/TwitterIcon";
import { GooglePlusIcon } from "../Contacts/icons/GooglePlusIcon";
import { LinkedInIcon } from "../Contacts/icons/LinkedInIcon";

export const Menu: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.header}>{"Services"}</p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Strategy Design"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Product Design"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Content Strategy"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Brand Strategy"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Development"}
                    </span>
                </p>
            </div>
            <div>
                <p className={styles.header}>{"Help And Advice"}</p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"How it works"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Contact Support"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Privacy Policy"}
                    </span>
                </p>
                <p className={styles.text} onClick={onClick}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"FAQ"}
                    </span>
                </p>
            </div>
            <div>
                <p className={styles.header}>{"Company"}</p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"About"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Blog"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Contact"}
                    </span>
                </p>
                <p className={styles.text}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        {"Jobs"}
                    </span>
                </p>
            </div>
            <div className={styles.feedback}>
                <p className={styles.header}>{"Get in Touch"}</p>
                <p className={styles.text} style={{ lineHeight: "26px" }}>
                    {"Feel free to contact us via email or other means"}
                </p>
                <p className={styles.mail}>{"info.webovio@gmail.com"}</p>
                <div className={styles.iconsContainer}>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        <FacebookIcon />
                    </span>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        <TwitterIcon />
                    </span>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        <GooglePlusIcon />
                    </span>
                    <span style={{ cursor: "pointer" }} onClick={onClick}>
                        <LinkedInIcon />
                    </span>
                </div>
            </div>
        </div>
    );
};
