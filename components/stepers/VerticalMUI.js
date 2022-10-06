import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';
import SettingsIcon from '@mui/icons-material/Settings';


import Typography from '@mui/material/Typography';

export default function VerticalLinearStepper({data}) {

  return (
    <Box className={styles.vertical_steper_container}>
      <Stepper activeStep={10} orientation="vertical">
        {data.map((step, index) => (
          <Step key={step.index} className={ index === data.length - 1 ? `${styles.vertical_step} ${styles.step_no_border_v}` : styles.vertical_step}>
            <div className={styles.v_step_imagen_container}>
                <Image src={step.image} width={70} height={70} alt={`${step.title} - Imagen`} className={styles.image}/>
            </div>
            <StepLabel
            >
              <h1 className={styles.step_title} >{step.title}</h1>
              <p className={styles.step_p_v} >{step.text}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
