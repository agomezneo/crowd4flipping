import React, {useState, useEffect} from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Steper from '../stepers/MaterialHorizontal';
import Vsteper from '../stepers/VerticalMUI';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import { RiWhatsappLine } from 'react-icons/ri'

function HomeSection() {
  const [screen, setScreen] = useState(false)
  useEffect(() => {
    let document = window.screen.width;
    if(document < 991){
        setScreen(true)
        return
    }
  }, [])

  return (
    <div className={styles.page_section}> 
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <br/>
              <h1> ¿Cómo <span>funciona</span>? </h1>
            </div>
            <div className={styles.page_section_body}>
                <div className={styles.empty_div_s3_owner}>
                </div>
                <div className={styles.horizontal_steper_container}>
                {!screen ? 
                (
                  <Steper data={MaterialHorizontalData} /> 
                )
                  :

                (
                  <Vsteper data={MaterialHorizontalData} />
                )
                }
                </div>
            </div>
            <div className={styles.page_section_footer}>
              <a 
                href={`https://wa.me/34671246091?text=Hola, estoy interesad@ en ofrecer mi propiedad para ver que posibilidades tengo. ¿Podrías darme más información?`}
                className={styles.whatsApp_cta}
              > 
                <span>¡Contactanos!</span>
              </a>
            </div>
        </div>
    </div>
  )
}

export default HomeSection  