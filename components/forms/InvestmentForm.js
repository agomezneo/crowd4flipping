import React, {useState, useEffect} from 'react'
import styles from '../../styles/forms.module.scss';

function InvestmentForm({type}) {

    const [state, setState] = useState({
        name: '', 
        email: '',
        phone: '',
        type: type
    })

  return (
    <div className={styles.InvestmentForm}>
        <div className={styles.investment_form_container}>
            <div className={styles.input_container}>
                <input type='text' name='name' value={state.name} placeholder='Nombre...' />
            </div>
            <div className={styles.input_container}>
                <input type='text' name='name' value={state.email} placeholder='Email...' />
            </div>
            <div className={styles.input_container}>
                <input type='text' name='name' value={state.phone} placeholder='Número...' />
            </div>
            <div className={styles.input_container}>
                <div className={styles.button}>Enviar </div>
            </div>
        </div>
    </div>
  )
}

export default InvestmentForm
