import React from "react";
import styles from "./Portfolio.style.css";
import { Quote } from "./childs/Quote";
import author from "./images/authors/author.png";
import case_1 from "./images/cases/case_1.png";
import case_2 from "./images/cases/case_2.png";
import case_3 from "./images/cases/case_3.png";
import { Report } from "./childs/Report";

export const Portfolio: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>{"We Have Some Awesome Project."}</p>
                <p className={styles.headerText}>
                    {
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                </p>
            </div>
            <div className={styles.caseLeft}>
                <div className={styles.contentContainer}>
                    <img src={case_1} alt={"case_1"} className={styles.imageLeft} />
                    <Quote
                        text={
                            "“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”"
                        }
                        photo={author}
                        name={"Angel Armstrong"}
                        position={"Founder & CEO, Google"}
                        style={{ gridColumn: "6 / 12", gridRow: "1", marginTop: "83%" }}
                    />
                </div>
                <Report
                    header={"The wall new  Balenciaga.com"}
                    textFirst={"This article is floated online with an aim to help you find the best dvd printing solution."}
                    textSecond={
                        "Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs."
                    }
                    link={"See Case Study"}
                />
            </div>
            <div className={styles.caseRight}>
                <Report
                    header={"Is this the future of 3D model?"}
                    textFirst={
                        "While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space."
                    }
                    textSecond={"It is those feelings that drive our love of astronomy and our desire to learn more and more about it."}
                    link={"See Case Study"}
                />
                <div className={styles.contentContainer} style={{ alignContent: "end" }}>
                    <Quote
                        text={
                            "“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.”"
                        }
                        photo={author}
                        name={"Lina Hart"}
                        position={"Founder & CEO, Jico"}
                        style={{ gridColumn: "1 / 7", gridRow: "1", marginTop: "83%" }}
                    />
                    <img src={case_2} alt={"case_2"} className={styles.imageRight} />
                </div>
            </div>
            <div className={styles.caseLeft}>
                <div className={styles.contentContainer}>
                    <img src={case_3} alt={"case_3"} className={styles.imageLeft} />
                    <Quote
                        text={
                            "“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”"
                        }
                        photo={author}
                        name={"Eunice Oliver"}
                        position={"Founder & CEO, Zeem"}
                        style={{ gridColumn: "6 / 12", gridRow: "1", marginTop: "83%" }}
                    />
                </div>
                <Report
                    header={"Is this the future of  Online Booking"}
                    textFirst={"You should be able to find several indispensable facts about motivation in the following paragraphs."}
                    textSecond={"If there’s at least one fact you didn’t know before, imagine the difference it might make."}
                    link={"See Case Study"}
                />
            </div>
        </div>
    );
};
