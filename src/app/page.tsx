'use client';

import Image from "next/image";
import styles from "./home.module.scss";
import Tag from "@/components/tag/tag";
import Grid from "@/components/grid/grid";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useAppContext } from "@/components/context/context";

export default function Home() {

  const [documentType, setDocumentType] = useState("DNI")
  const [documentNumber, setDocumentNumber] = useState(30216147);
  const [documentNumberError, setDocumentNumberError] = useState<null | string>(null);
  const [phoneNumber, setPhoneNumber] = useState(5130216147);
  const [phoneNumberError, setPhoneNumberError] = useState<null | string>(null);
  const [privacy, setPrivacy] = useState(true);
  const [privacyError, setPrivacyError] = useState<null | string>(null);
  const [commercial, setCommercial] = useState(true);
  const [commercialError, setCommercialError] = useState<null | string>(null);
  const router = useRouter();
  const { setData } = useAppContext();

  const errorMessage = "*Campo requerido";

  function handleDocumentType(event: any) {
    setDocumentType(event.target.value);
    setDocumentNumberError(null);
  }

  function handleDocumentNumber(event: any) {
    setDocumentNumber(event.target.value);
    setDocumentNumberError(null);
  }

  function handlePhoneNumber(event: any) {
    setPhoneNumber(event.target.value);
    setPhoneNumberError(null);
  }

  function handlePrivacy(event: any) {
    setPrivacy(event.target.checked);
    setPrivacyError(null);
  }

  function handleCommercial(event: any) {
    setCommercial(event.target.checked);
    setCommercialError(null);
  }

  function validate() {
    if (!documentNumber || !documentType) {
      setDocumentNumberError(errorMessage);
      return false;
    }

    if (!phoneNumber) {
      setPhoneNumberError(errorMessage);
      return false;
    }

    if (!privacy) {
      setPrivacyError(errorMessage);
      return false;
    }

    if (!commercial) {
      setCommercialError(errorMessage);
      return false;
    }

    return true;
  }

  async function loadProfile(): Promise<any> {
    return await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json")
      .then(response => response.json())
      .then(({ name, lastName, birthDay }) => ({ name, lastName, birthDay }));
  }

  async function updateGlobalVariables() {
    let { name, lastName, birthDay: birthday } = await loadProfile();

    setData && setData({
      documentType, documentNumber, phoneNumber, name, lastName, birthday
    })
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (validate()) {
      updateGlobalVariables();
      router.push("/plan");
    }

  }

  const title = (
    <div>
      <Tag text="Seguro Salud Flexible" />
      <h1 className={styles.title}>Creado para ti y tu familia</h1>
    </div>
  )

  const form = (
    <div className={styles["form-container"]}>
      <p className={styles.paragraph}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles["inputs-container"]}>
          <div>
            <div className={styles["input-form"]}>
              <div className={styles.select}>
                <select value={documentType} onChange={handleDocumentType}>
                  <option value="DNI">DNI</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
                <Image className={styles.icon} src="/gl-sm-down.svg" alt="arrow down" width={20} height={20} />
              </div>
              <div className={styles.input}>
                <label htmlFor="document-number">Nro. de documento</label>
                <input id="document-number" value={documentNumber} onChange={handleDocumentNumber} placeholder="30216147" type="number"></input>
              </div>
            </div>
            <span className={styles["error-message"]}>{documentNumberError}</span>
          </div>
          <div>
            <div className={styles["input-form"]}>
              <div className={styles.input}>
                <label htmlFor="phone-number">Celular</label>
                <input id="phone-number" value={phoneNumber} onChange={handlePhoneNumber} placeholder="5130216147" type="number"></input>
              </div>
            </div>
            <span className={styles["error-message"]}>{phoneNumberError}</span>
          </div>

        </div>
        <div className={styles["checkoxs-form"]}>
          <div>
            <div className={styles["checkbox-container"]}>
              <input type="checkbox" className={styles.checkbox} checked={privacy} onChange={handlePrivacy}></input>
              <label>Acepto lo Política de Privacidad</label>
            </div>
            <span className={styles["error-message"]}>{privacyError}</span>
          </div>
          <div>
            <div className={styles["checkbox-container"]}>
              <input type="checkbox" className={styles.checkbox} checked={commercial} onChange={handleCommercial}></input>
              <label>Acepto la Política Comunicaciones Comerciales</label>
            </div>
            <span className={styles["error-message"]}>{commercialError}</span>
          </div>

          <a href="">Aplican Términos y Condiciones.</a>
        </div>
        <button type="submit" className={styles.submit}>
          Cotiza aquí
        </button>
      </form>
    </div>
  )

  return (<div className={styles["rimac-home"]}>
    <Grid>
      <div className={styles.desktop}>
        <Image className={styles.image} src="/Family.svg" alt="family" width={480} height={560}></Image>
        <div className={styles["container-right"]}>
          {title}
          {form}
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles["container-top"]}>
          {title}
          <Image className={styles.image} src="/Family.svg" alt="family" width={480} height={560}></Image>
        </div>
        <hr></hr>
        {form}
      </div>
    </Grid>
  </div>)
}