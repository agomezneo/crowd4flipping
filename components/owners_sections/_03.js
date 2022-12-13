import React, {useState, useEffect} from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Steper from '../stepers/MaterialHorizontal';
import Vsteper from '../stepers/VerticalMUI';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import { RiWhatsappLine } from 'react-icons/ri'

function HomeSection() {


  const [screen, setScreen] = useState(false)
  const [eleTarget, setEletarget] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(()=>{
    const doc = window.document;
    setEletarget(doc.getElementById('target_element'))
  },[]);

  const setElementEffect = (ele, setActive) =>{
    let ele_hight = ele?.offsetTop;
    window.addEventListener("scroll", ()=>{
      if(window.scrollY < ele_hight){return setActive(false)}
      if(window.scrollY > ele_hight - 200){
        return setActive(true);
      }
    })
  }

  useEffect(()=>{
    if(eleTarget === null)return
    setElementEffect(eleTarget, setActive)
  },[eleTarget])

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
                {!screen ? 
                (
                  <Steper data={MaterialHorizontalData} activeEffect={active} active={active}/> 
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