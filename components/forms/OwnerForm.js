import React, {useState, useEffect} from 'react';
import styles from '../../styles/forms.module.scss';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GreenRadio from './inputs/InputRadio';
import {motion} from 'framer-motion';

const OwnerForm =  () => {

    const [state, setState] = useState({
        name: '', 
        email: '',
        phone: '',
        saleDate: '',
        step: 0
    })

    const handleChange = (e) =>{
        let value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
            step: state.step === 0 ? state.step + 1 : state.step
        })

    }

    console.log(state)

  

switch(state.step){

    case 0: 
    return(
        <div className={styles.OwnerForm}>
            <h1> ¿Cuando quieres <span>vender</span>?</h1>
            <motion.div 
                className={styles.radio_group}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.2,
                duration: 0.75,
                }}
            >
                <RadioGroup 
                    aria-label="saleDate"               
                    name="saleDate" 
                    value={state.saleDate} 
                    onChange={handleChange}
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "left",
                        gap: "1rem",
                    }}
                >
                    <FormControlLabel
                        className={state.saleDate === "1" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="1"
                        control={<GreenRadio/>} 
                        label="Ya está a la venta"
                    />
                    <FormControlLabel
                        className={state.saleDate === "2" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="2"
                        control={<GreenRadio/>} 
                        label="Lo antes posible"
                    />
                    <FormControlLabel
                        className={state.saleDate === "3" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="3"
                        control={<GreenRadio/>} 
                        label="En 3 meses"
                    />
                    <FormControlLabel
                        className={state.saleDate === "4" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="4"
                        control={<GreenRadio/>} 
                        label="En 6 meses o más"
                    />
                    <FormControlLabel
                        className={state.saleDate === "5" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="5"
                        control={<GreenRadio/>} 
                        label="Quisiera asesorarme primero"
                    />
                </RadioGroup>
            </motion.div>
        </div> 

    );
    case 1:
        return (
            <motion.div 
                className={styles.OwnerForm}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.2,
                duration: 0.75,
                }}
            >
                <h1> ¿Cómo podemos <span>contactar</span>? </h1>
                <div className={styles.owner_form_container}>
                    <div className={styles.input_container}>
                        <input type='text' name='name' value={state.name} placeholder='Nombre...'/>
                    </div>
                    <div className={styles.input_container}>
                        <input type='text' name='name' value={state.email} placeholder='Email...'/>
                    </div>
                    <div className={styles.input_container}>
                        <input type='text' name='name' value={state.phone} placeholder='Número...'/>
                    </div>
                    <div className={styles.input_container}>
                        <div 
                            className={styles.button} 
                            onClick={() => setState({...state, step: 0}) } 
                        >
                                Enviar
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

}

export  default OwnerForm;

