import React from "react";
import styles from "./Services.style.css";
import { Service } from "./childs/Service";

export const Services: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.header}>
                {"Deation & Evaluation - Best Way"} <br /> {"to Kick off Your Product Idea"}
            </p>
            <div className={styles.servicesContainer}>
                <Service
                    header={"Product Design Sprint"}
                    text={"A five-day workshop that will help you answer crucial business questions."}
                    link={"Read More"}
                    linkIsActive={true}
                />
                <Service
                    header={"Scoping Session"}
                    text={"A workshop aimed at shaping your business idea, answering questions regarding project planning."}
                    link={"Read More"}
                    linkIsActive={false}
                />
                <Service
                    header={"UX Review"}
                    text={"An evaluation which will help you radically improve your product."}
                    link={"Read More"}
                    linkIsActive={false}
                />
                <Service
                    header={"Code Review"}
                    text={"Do you know what one of the key secrets of success  is what makes people successful in business."}
                    link={"Read More"}
                    linkIsActive={false}
                />
            </div>
        </div>
    );
};
