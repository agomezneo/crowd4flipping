import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';
import SettingsIcon from '@mui/icons-material/Settings'; 
import {motion} from 'framer-motion';


import Typography from '@mui/material/Typography';

export default function VerticalLinearStepper({data, active}) {

  const verticalEffectVariants = {
    opened: {
        opacity: 1,
        x: 0
    },
    closed: {
        opacity: 0, 
        x: -700
    },
}

  return (
    <Box className={styles.vertical_steper_container}>
      <Stepper activeStep={10} orientation="vertical">
        {data.map((step, key) => (
          <Step key={key} className={ key === data.length - 1 ? `${styles.vertical_step} ${styles.step_no_border_v}` : styles.vertical_step}>
            <motion.div
               initial={active}
               variants={verticalEffectVariants}
               animate= {active ? "opened" : "closed"}
               transition={{delay: `.${key+1}`, duration: `.${key+2}`,  type: 'spring', stiffness: 100}}
            >
              <div className={styles.v_step_imagen_container}>
                  <Image src={step.image} width={50} height={50} alt={`${step.title} - Imagen`} className={styles.image}/>
              </div>
              <StepLabel
              >
                <h1 className={styles.step_title} >{step.title}</h1>
                <p className={styles.step_p_v} >{step.text}</p>
              </StepLabel>
            </motion.div>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
