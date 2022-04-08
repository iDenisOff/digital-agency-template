import React from "react";
import styles from "./Menu.style.css";
import { MenuIcon } from "../../../../../../components/Icons/MenuIcon";

export const Menu: React.FC = () => {
    const onClick = (): void => {
        location.reload();
    };

    return (
        <div className={styles.container} onClick={onClick}>
            <MenuIcon />
        </div>
    );
};
