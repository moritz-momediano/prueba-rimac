"use client";

import { useAppContext } from "@/components/context/context";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import styles from './plan.module.scss';
import Grid from "@/components/grid/grid";
import ProgressBar from "@/components/progress-bar/progress-bar";
import Link from "@/components/link/link";
import Card from "@/components/card/card";
import CardDetail from "@/components/card-detail/card-detail";
import { getAge } from "@/utils/utils";

interface IPlan {
    name: string,
    price: number,
    description: Array<string>
}

export default function Plan() {
    const { data, setData } = useAppContext();
    const router = useRouter();

    const [cardForMe, setCardForMe] = useState(false);
    const [cardForOthers, setCardForOthers] = useState(false);
    const [plans, setPlans] = useState([]);

    async function loadPlan() {
        const plans: Array<any> = await fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json")
            .then(response => response.json())
            .then(plans => plans.list);

        if (data.birthday) {
            const age = getAge(data.birthday);
            const plansFilter = plans.filter(plan => parseInt(plan.age) >= age);
            setPlans(plansFilter);
        }
    }

    useEffect(() => {
        if (!data?.name || !data?.documentType || !data?.documentNumber) {
            router.push("/");
        }
        loadPlan();
    }, [])

    function handlerPlan(planSelected: { title: string, price: number }) {
        let price = cardForOthers ? planSelected.price * 0.95 : planSelected.price;
        setData && setData({ ...data, plan: planSelected.title, price });
        router.push("/summary");
    }

    return <div className={styles["rimac-plan"]}>
        <ProgressBar stepNumber={1} />
        <Link text="Volver" href="/" />
        <Grid>
            <div className={styles["title-container"]}>
                <div className={styles.title}>
                    <h1>{data?.name} ¿Para quién deseas cotizar? </h1>
                    <span>Selecciona la opción que se ajuste más a tus necesidades.</span>
                </div>
            </div>
            <div className={styles["card-container"]}>
                <Card
                    title="Para mí"
                    description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                    imageSrc="/IcProtectionLight.svg"
                    checked={cardForMe}
                    onChange={(isCheked) => {
                        setCardForMe(isCheked)
                        setCardForOthers(false)
                    }}
                />
                <Card
                    title="Para alguien más"
                    description="Realiza una cotización para alguien diferente a ti."
                    imageSrc="/IcAddUserLight.svg"
                    checked={cardForOthers}
                    onChange={(isCheked) => {
                        setCardForOthers(isCheked);
                        setCardForMe(false);
                    }}
                />
            </div>
            {
                (cardForMe || cardForOthers) &&
                <div className={styles["card-detail-container"]}>
                    {plans.map((plan: IPlan, index) =>
                        <CardDetail
                            key={index}
                            title={plan.name}
                            price={plan.price}
                            imageSrc={index % 2 == 0 ? "/IcHomeLight.svg" : "/IcHospitalLight.svg"}
                            description={plan.description}
                            onClickButton={handlerPlan}
                            tagText={index === 1 ? "Plan recomendado" : ""}
                        />
                    )}
                </div>
            }
        </Grid>
    </div>
}