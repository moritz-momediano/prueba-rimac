import Image from "next/image"
import styles from "./footer.module.scss";
import Grid from "../grid/grid";

export default function Footer() {
    return (
        <footer className={styles["rimac-footer"]}>
            <Grid>
                <picture className={styles.logo}>
                    <source media="(max-width:385px)" srcSet="/Logo-inverse-horizontal.svg" width={138} height={20} />
                    <Image src={"/Logo-inverse.svg"} alt="logo rimac" width={85} height={42} />
                </picture>
                <hr></hr>
                <span className={styles.text}>© 2023 RIMAC Seguros y Reaseguros.</span>
            </Grid>
        </footer>
    )
}