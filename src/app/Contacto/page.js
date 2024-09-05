"use client";
import React from 'react';
import Input from "../componente/Input/index.jsx";
import Button from "../componente/button_form/index.jsx";
import styles from "../styles/page.module.css";

const page = (props) => {
  var labels = props.labels;

  return (
    <div className={styles.section} id="mod6">
      <div className={styles.containerNarrow}>
        <div className={styles.textCenter}>
          <h2 className={`${styles.markermodu4} ${styles.markerCenter}`}>Contacto</h2>
        </div>
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className={`${styles.bgLight} my-2 p-3 pt-2`}>
              <form method="POST">
                <div className={styles.inputContainer}>
                  <label>Email</label>
                  <Input type="text" placeholder="Ingrese su email" />
                </div>
                <div className={styles.inputContainer}>
                  <label>Asunto</label>
                  <Input type="text" placeholder="Ingrese el asunto" />
                </div>
                <div className={styles.inputContainer}>
                  <label>Mensaje</label>
                  <textarea placeholder="Ingrese su mensaje"></textarea>
                </div>
                <Button>Enviar</Button>
              </form>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
            <div className={styles.mt3}>
              <div className={styles.h5}>Sigamos en contacto!</div>
              <p>Comunícate con nosotros a través del formulario.</p>
              <p>¡Gracias por visitar nuestro sitio web!</p>
            </div>
            <div className={styles.mt53}>
              <div className="row">
                <div className="col-sm-2">
                  <div className={styles.pb1}>Email:</div>
                </div>
                <div className="col-sm-10">
                  <div className={`${styles.pb1} ${styles.fwBolder}`}>yaesaroka@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;