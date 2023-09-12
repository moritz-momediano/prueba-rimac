import Image from "next/image";
import Grid from "../grid/grid";
import styles from "./progress-bar.module.scss";
import { useState } from "react";

interface ProgressBarProps {
    stepNumber: 1 | 2;
}

export default function ProgressBar({ stepNumber }: ProgressBarProps) {

    const [stepOneActive] = useState(stepNumber === 1);
    const [stepTwoActive] = useState(stepNumber === 2);

    function getActiveClass(active: boolean) {
        return active ? styles.active : null;
    }

    return <div className={styles["rimac-progress-bar"]}>
        <Grid>
            <div className={styles.container}>
                <div className={`${styles.step} ${getActiveClass(stepOneActive)}`} >
                    <span className={styles.number}> 1 </span>
                    <span className={styles.text}>Planes y coberturas</span>
                </div>
                <div className={`${styles["next-step"]} ${getActiveClass(stepOneActive)}`}>
                    <span className={styles["round-3"]}></span>
                    <span className={styles["round-4"]}></span>
                    <span className={styles["round-4"]}></span>
                    <span className={styles["round-3"]}></span>
                </div>
                <div className={`${styles.step} ${getActiveClass(stepTwoActive)}`}>
                    <span className={styles.number}> 2 </span>
                    <span className={styles.text}>Resumen</span>
                </div>
            </div>
        </Grid >
    </div >
}