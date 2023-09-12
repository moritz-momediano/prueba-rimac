import styles from "./grid.module.scss";

interface GridProps {
    dev?: boolean,
    children: React.ReactNode
}

export default function Grid({ dev, children }: GridProps) {
    const columns = Array.from(Array(12)).map((index) => (<div key={index} className={styles["columns"]}></div>));

    return <div className={styles["rimac-grid"]}>
        {children}
        {dev &&
            columns.map((column) => column)
        }
    </div>
}