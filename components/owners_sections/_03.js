import React, {useState, useEffect} from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Steper from '../stepers/MaterialHorizontal';
import Vsteper from '../stepers/VerticalMUI';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import { RiWhatsappLine } from 'react-icons/ri'

function HomeSection() {


  const [active, setActive] = useState(false);
  const [divHeight, setDivHeight] = useState(0);
  const [screen, setScreen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const height = document.getElementById('ownerS3').offsetTop;
      console.log(height)
      setDivHeight(height);
      if (window.scrollY >= divHeight) {
        console.log('Y--->', window.scrollY)
        setActive(true);
      } else {
        setActive(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [divHeight]);

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
                <div id='target_element' className={styles.horizontal_steper_container} >
                  <Steper data={MaterialHorizontalData} activeEffect={active} active={active}/> 
                </div>
            </div>
            <div className={styles.page_section_footer}>
              <a 
                href={`https://wa.me/34672126268?text=Hola, estoy interesad@ en ofrecer mi propiedad para ver que posibilidades tengo. ¿Podrías darme más información?`}
                className={styles.whatsApp_cta}
              > 
                <span>¡Contáctanos!</span>
              </a>
            </div>
        </div>
    </div>
  )
}

export default HomeSection  