// import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi There, Myself Rajeev</h1>
                <p className={styles.description}>

                    I am a final year undergraduate skilled in MERN stack development, with knowledge of machine learning algorithms and foundational AWS expertise. Ready to contribute to innovative projects with creativity and efficiency. Let us craft brilliance together!!! 

                </p>
                <a href="rajeev20010702@gmail.com" className={styles.contactBtn}>
                    Connect To Me!!
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage2.jpeg")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};