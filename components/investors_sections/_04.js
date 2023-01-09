import React, {useState, useEffect} from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import {Data} from '../../data/cards/SimpleCardData';
import Steper from '../stepers/MaterialHorizontal';
import Vsteper from '../stepers/VerticalMUI';
import Link from 'next/link';
import {motion} from 'framer-motion';

function HomeSection() {

  const [eleTarget_, setEletarget_] = useState(null);
  const [active, setActive] = useState(false);
  const [screen, setScreen] = useState(false)
  const fromWeb = 'fw'

  useEffect(()=>{
    const doc = window.document;
    setEletarget_(doc.getElementById('steps_container_2'))
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
    if(eleTarget_ === null)return
    setElementEffect(eleTarget_, setActive)
  },[eleTarget_])

  const effectVariants = {
    opened: {
        opacity: 1,
        y: 0
    },
    closed: {
        opacity: 0, 
        y: 100
    },
}

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
              <motion.div 
                id='steps_container_2'
                className={styles.steps_container}
                initial={active}
                variants={effectVariants}
                animate= {active ? "opened" : "closed"}
                transition={{delay: .5, duration: .5,  type: 'spring', stiffness: 100}}
              >
                {!screen ? 
                  (
                    <Steper 
                      data={Data}
                      active={active}
                    />
                  )
                  :
                  (
                    <Vsteper data={Data} />
                  )
                }
              </motion.div>
            </div>
            <div className={styles.page_section_footer}>
              <div className={styles.modal_button_secundary}>
                <Link href={`https://app.crowd4flipping.com/?${fromWeb}`}  >
                  <span>¡Descubrir la próxima oportunidad!</span>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection