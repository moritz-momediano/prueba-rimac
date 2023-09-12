"use client";

import { useEffect } from "react";
import styles from "./sumarry.module.scss";

import { useAppContext } from "@/components/context/context";
import Grid from "@/components/grid/grid";
import Link from "@/components/link/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/progress-bar/progress-bar";


export default function Summary() {
    const { data } = useAppContext();
    const router = useRouter();

    useEffect(() => {
        if (!data?.name || !data?.documentType || !data?.documentNumber || !data?.plan || !data?.price) {
            router.push("/");
        }
    }, []);

    return (
        <div className={styles["rimac-summary"]}>
            <ProgressBar stepNumber={2} />
            <Link text="Volver" href="/plan" />
            <Grid>
                <div className={styles.container}>
                    <h1 className={styles.title}>Resumen del seguro</h1>
                    <div className={styles["detail-container"]}>
                        <div>
                            <h2 className={styles["price-title"]}>PRECIOS CALCULADOS PARA:</h2>
                            <div className={styles["container-name"]}>
                                <Image src="/gl_family.svg" alt="people" width={24} height={24} />
                                <span className={styles.name}>{data?.name} {data?.lastName}</span>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.detail}>
                            <h2 className={styles["detail-title"]}>Responsable de pago</h2>
                            <span className={styles["detail-item"]}>{data?.documentType}: {data?.documentNumber}</span>
                            <span className={styles["detail-item"]}>Celular: {data?.phoneNumber}</span>
                        </div>
                        <div className={styles.detail}>
                            <h2 className={styles["detail-title"]}>Plan elegido</h2>
                            <span className={styles["detail-item"]}>{data?.plan}</span>
                            <span className={styles["detail-item"]}>Costo del Plan: ${data?.price} al mes</span>
                        </div>
                    </div>
                </div>

            </Grid>
        </div>
    )
}