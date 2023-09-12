import Image from "next/image";
import styles from "./card.module.scss";
import { useEffect, useState } from "react";

interface CardProps {
    title: string,
    description: string,
    imageSrc: string,
    checked?: boolean,
    onChange?: (isCheked: boolean) => void;
}

export default function Card({ title, description, imageSrc, checked, onChange }: CardProps) {

    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked)
    }, [checked])

    function handleChange(event: any) {
        let checked = event.target.checked;
        setIsChecked(checked)
        onChange && onChange(checked);
    }

    return (
        <div className={`${styles["rimac-card"]} ${isChecked && styles.checked}`}>
            <input type="checkbox" onChange={handleChange} checked={checked} />
            <div className={styles.container}>
                <Image src={imageSrc} alt="icon" width={48} height={48} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
