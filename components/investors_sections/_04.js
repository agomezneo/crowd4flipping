import React, {useState, useEffect} from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import {Data} from '../../data/cards/SimpleCardData';
import Steper from '../stepers/MaterialHorizontal';
import Vsteper from '../stepers/VerticalMUI';
import Link from 'next/link';
function HomeSection() {

  const [screen, setScreen] = useState(false);
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
                <h1>¿Por qué <strong>invertir en inmuebles con  <span>Crowd</span>4<span>Flipping</span></strong>?</h1>
            </div>
            <div className={styles.page_section_body_01}>
              <div className={styles.empty_div_s4} />
              <div className={styles.steps_container}>
                {!screen ? 
                  (
                    <Steper 
                      data={Data}
                    />
                  )
                  :
                  (
                    <Vsteper data={Data} />
                  )
                }
              </div>
            </div>
            <div className={styles.page_section_footer}>
              <div className={styles.modal_button_secundary}>
                <Link href={'https://c4f.vercel.app/'} >
                  <span>¡Descubrir la próxima oportunidad!</span>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection
