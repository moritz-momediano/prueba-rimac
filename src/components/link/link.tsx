
import Image from "next/image";
import styles from "./link.module.scss";
import Grid from "../grid/grid";
import LinkReact from "next/link";


export default function Link({ text, href }: { text: string, href: string }) {

    return (
        <div className={styles["rimac-link"]}>
            <Grid>
                <LinkReact href={href} className={styles.link}>
                    <div className={styles.icon}>
                        <Image src="/GlDown.svg" alt="left arrow" width={15} height={15} />
                    </div>
                    {text}
                </LinkReact>
            </Grid>
        </div>
    )
}