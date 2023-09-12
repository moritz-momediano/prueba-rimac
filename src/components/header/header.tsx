import Image from "next/image"
import styles from "./header.module.scss"
import Grid from "../grid/grid"

export default function Header() {
    return (
        <header className={styles["rimac-header"]}>
            <Grid>
                <Image className={styles.logo} src="/Logo.svg" alt="logo rimac" width={73} height={36} />
                <div className={styles["telephone-container"]}>
                    <span className={styles.text}>¡Compra por este medio!</span>
                    <div className={styles.telephone}>
                        <Image src="/GlTelephoneSolid.svg" alt="telephone" width={20} height={20} />
                        <span>(01) 411 6001</span>
                    </div>
                </div>
            </Grid>
        </header>
    )
}
