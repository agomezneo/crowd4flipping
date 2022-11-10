import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/forms.module.scss';
import axios from 'axios';
import Router from 'next/router'
import EllipsisLoader from '../loaders/ellipsisLoaderWhite';
import ReCAPTCHA from "react-google-recaptcha";

function InvestmentForm({type}) {

    const api = 'https://us-central1-c4f-backend-c3e81.cloudfunctions.net/app/api';
    /* const api = 'http://localhost:5000/c4f-backend-c3e81/us-central1/app/api'; */
    const [sendData, setSendData] = useState(false);
    const [captchaa, setCaptchaa] = useState(false);
    const captcha = useRef(null);
    const [state, setState] = useState({
        name: '',  
        email: '',
        phone: '',
        comments: '',
        termsAndConditions: false,
        type: type
    });
    
    const handleChange = (e) =>{
        e.preventDefault();
        console.log(e.target.type)
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name] : value
        })
    };

    const onChangeCaptcha = () =>{
        if(captcha.current.getValue()){ 
            setCaptchaa(true)
        }
    };

    const sendContact = async (data) =>{
        try {
            let res = await axios.post(`${api}/investor-contact`, data);
            if(res.data.status === 200){
                setSendData(false)
                Router.push('/thanks-investment')
            }
        } catch (error) {
            setSendData(false)
        }
    }

    const handleSubmit = () =>{
        if(!captchaa || !state.termsAndConditions){
            alert('Debe validar su información')
            return setSendData(false);
        }
        setSendData(true)
    }

    useEffect(()=>{
        if(!sendData)return
        sendContact(state);
    },[sendData])

  return (
    <div className={styles.InvestmentForm}>
        <div className={styles.investment_form_container}>
            <div className={styles.input_container}>
                <input type='text' name='name' value={state.name} placeholder='Nombre' onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <input type='text' name='email' value={state.email} placeholder='Email' onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <input type='text' name='phone' value={state.phone} placeholder='Teléfono' onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <textarea type="text"  name='comments' value={state.comments} onChange={handleChange} placeholder='Déjanos tus comentarios'/> 
            </div>
            <div className={`${styles.input_container} ${styles.input_container_checkbox}`}>
                <input 
                    type="checkbox" 
                    name='termsAndConditions' 
                    value={state.termsAndConditions} 
                    onChange={handleChange} 
                />
                <p>Autorizo el tratamiento de mis datos para recibir una respuesta a mi consulta según la <a href='#8'>Política de Privacidad</a>    
                    
                </p>    
            </div>
            <div className={`${styles.input_container} ${styles.input_container_checkbox}`}>
            <ReCAPTCHA
                ref={captcha}
                sitekey="6LeW0vYiAAAAABvzPB2SSZrvaz3d7ptD70HNJak4"
                onChange={onChangeCaptcha}
            />,
            </div>
            <div className={styles.input_container}>
                <div className={styles.button} onClick={() => handleSubmit()} >
                    {!sendData ? 
                        'Enviar' 
                    : 
                    <>
                        <EllipsisLoader/>
                    </>
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default InvestmentForm
