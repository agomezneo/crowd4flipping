import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HorizontalLabelPositionBelowStepper({data, active}) {

  const effectVariants = {
    opened: {
        opacity: 1,
        y: 0
    },
    closed: {
        opacity: 0, 
        y: -700
    },
}

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={10} alternativeLabel 
      >
        {data.map((item, key) => {
            return(
              <Step 
                  className={key === data.length - 1 ? `${styles.step} ${styles.step_no_border}` : styles.step}
                  key={key}
              >

                <motion.div
                    initial={active}
                    variants={effectVariants}
                    animate= {active ? "opened" : "closed"}
                    transition={{delay: `.${key+3}`, duration: `.${key+3}`,  type: 'spring', stiffness: 100}}
                >
                    <div className={styles.step_image}>
                        <Image src={item.image} width={100} height={100} alt={item.text} />
                    </div>
                  
                    <StepLabel >
                        <span className={styles.step_title}> {item.title} </span><br/>
                        <p className={styles.step_p}> {item.text}</p>
                    </StepLabel>
                </motion.div>

              </Step>
            )
        })}
      </Stepper>
    </Box>
  );
} 