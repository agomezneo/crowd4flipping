import React, {useState, useEffect} from 'react'
import styles from '../../styles/forms.module.scss';
import axios from 'axios';
import Router from 'next/router'
import EllipsisLoader from '../loaders/ellipsisLoaderWhite';

function InvestmentForm({type}) {

    const api = 'https://us-central1-c4f-backend-c3e81.cloudfunctions.net/app/api';
    /* const api = 'http://localhost:5000/c4f-backend-c3e81/us-central1/app/api'; */
    const [sendData, setSendData] = useState(false);
    const [state, setState] = useState({
        name: '', 
        email: '',
        phone: '',
        investmentRange: '',
        type: type
    });
    
    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name] : value
        })
    };

    const sendContact = async (data) =>{
        try {
            let res = await axios.post(`${api}/investor-contact`, data);
            console.log(res)
            if(res.data.status === 200){
                setSendData(false)
                Router.push('/thanks-investment')
            }
        } catch (error) {
            console.log(error.message);
            setSendData(false)
        }

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
                <input type="text" list="range_list" name='investmentRange' value={state.investmentRange} onChange={handleChange} placeholder='¿Qué cantidad te gustaría invertir?'/> 
                <datalist id="range_list">
                    <option value="500€ - 999€" />
                    <option value="1.000€ - 1.999€" />
                    <option value="2.000€ - 4.999€" />
                    <option value="5.000€ - 10.000€" />
                    <option value="10.000€ - o más" />
                </datalist>
            </div>
            <div className={styles.input_container}>
                <div className={styles.button} onClick={() => setSendData(true) } >
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
