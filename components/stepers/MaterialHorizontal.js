import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';
import SettingsIcon from '@mui/icons-material/Settings';


export default function HorizontalLabelPositionBelowStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={10} alternativeLabel>
        {MaterialHorizontalData.map((item, key) => {
            return(
                <Step 
                    key={key}
                >

                    <div className={styles.step_image}>
                        <Image src={item.image} width={100} height={100} alt={item.text} />
                    </div>

                    <StepLabel >
                        {item.text}
                    </StepLabel>

                </Step>
            )
        })}
      </Stepper>
    </Box>
  );
}