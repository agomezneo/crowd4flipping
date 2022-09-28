import React, {useState, useEffect} from 'react'
import styles from '../../styles/fomrs.module.scss';

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
                <span>Nombre</span>
                <input type='text' name='name' value={state.name} />
            </div>
            <div className={styles.input_container}>
                <span>Email</span>
                <input type='text' name='name' value={state.email} />
            </div>
            <div className={styles.input_container}>
                <span>Número</span>
                <input type='text' name='name' value={state.phone} />
            </div>
            <div className={styles.input_container}>
                <div className={styles.button}>Enviar </div>
            </div>
        </div>
    </div>
  )
}

export default InvestmentForm
