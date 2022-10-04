import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';
import SettingsIcon from '@mui/icons-material/Settings';


export default function HorizontalLabelPositionBelowStepper({data}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={10} alternativeLabel>
        {data.map((item, key) => {
            return(
                <Step 
                    key={key}
                    className={key === data.length - 1 ? `${styles.step} ${styles.step_no_border}` : styles.step}
                >

                    <div className={styles.step_image}>
                        <Image src={item.image} width={100} height={100} alt={item.text} />
                    </div>
                   
                    <StepLabel >
                        <span className={styles.step_title}> {item.title} </span><br/>
                        <p className={styles.step_p}> {item.text} </p>
                    </StepLabel>

                </Step>
            )
        })}
      </Stepper>
    </Box>
  );
}