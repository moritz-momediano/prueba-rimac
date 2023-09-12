import Image from "next/image";
import Tag from "../tag/tag";
import styles from "./card-detail.module.scss";

interface IDetail {
    title: string,
    price: number
}

interface CardDetailProps {
    tagText?: string,
    title: string,
    price: number,
    imageSrc: string,
    description: Array<string>,
    onClickButton?: (plan: IDetail) => void
}

export default function CardDetail({ tagText, title, price, imageSrc, description, onClickButton }: CardDetailProps) {
    function handlerClick() {
        onClickButton && onClickButton({ title, price })
    }
    return (
        <div className={`${styles["rimac-card-detail"]}`}>
            <div className={styles.tag}>
                {tagText && <Tag text={tagText} />}
            </div>
            <div className={styles.container}>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles["price-container"]}>
                        <span className={styles["price-title"]}>COSTO DEL PLAN</span>
                        <span className={styles.price}>${price} al mes</span>
                    </div>
                </div>
                <Image src={imageSrc} alt="icono" width={56} height={56} />
            </div>
            <div className={styles.description}>
                <ul>
                    {description.map((feature: string, index) => <li key={index}>{feature}</li>)}
                </ul>
            </div>
            <button className={styles.button} onClick={handlerClick}>Seleccionar Plan</button>
        </div>
    )
}