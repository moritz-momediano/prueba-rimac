import styles from "./tag.module.scss";

export default function Tag({ text }: { text: string }) {
    return (
        <div className={styles["rimac-tag"]}>
            <span>{text}</span>
        </div>
    )
}