import React, {useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import styles from '../styles/propiedades_form.module.scss';
import Header from '../components/headers/header_pages_form';
import Footer from '../components/footers/index';
import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';
import EllipsisLoader from '../components/loaders/ellipsisLoaderWhite';

function Index() {

    const [captchaa, setCaptchaa] = useState(false);
    const captcha = useRef(null);
    const [sendData, setSendData] = useState(false);
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        M2:'',
        floor: '',
        rooms:'',
        bathrooms: '',
        state: ''
    })

    const handleStateChange = (e) =>{
        const {value, name} = e.target
        setState({
            ...state,
            [name] : value
        })
    }

    const onChangeCaptcha = () =>{
        if(captcha.current.getValue()){ 
            setCaptchaa(true)
        }
    };

    const handleSubmit = () =>{
        setSendData(true)
        alert(`Hello form ${state.name}`)
    }

  return (
    <div className={styles.form_page}>
        <Head>
            <title>Descubre la forma más rentable de sacar provecho de tu propiedad.</title>
            <meta name="description" content="Con unos simples clicks podrás acceder a las oportunidades que ofremos en Crowd4Flipping para tu propiedad." />  
        </Head>
        <Header 
        />
       <div className={styles.body}>
            <div className={styles.form_container}>
                <h1>  
                    Solicita información y <span>descubre la forma más rentable</span> de sacar provecho de tu propiedad 
                </h1>
                <div
                    className={styles.input_container}
                >
                    <span>Nombre</span>
                    <input 
                        type="text"
                        required
                        value={state.name}
                        name='name'
                        onChange={handleStateChange}
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Email</span>
                    <input 
                        type="email" 
                        required
                        value={state.email}
                        name='email'
                        onChange={handleStateChange}
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Teléfono</span>
                    <input 
                        type="tel" 
                        inputmode="numeric"
                        required
                        value={state.phone}
                        name='phone'
                        onChange={handleStateChange}
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Dirección de la propiedad</span>
                    <input 
                        type="text" 
                        required
                        value={state.address}
                        name='address'
                        onChange={handleStateChange}
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Dimenciones de la propiedad</span>
                    <input 
                        type="number" 
                        inputmode="numeric"
                        required
                        value={state.M2}
                        name='M2'
                        onChange={handleStateChange}
                        placeholder='Metros cuadrados'
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Planta</span>
                    <input 
                        type="number" 
                        inputmode="numeric"
                        required
                        value={state.floor}
                        name='floor'
                        onChange={handleStateChange}
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Número de habitaciones</span>
                    <input 
                        type="number" 
                        inputmode="numeric"
                        required
                        value={state.rooms}
                        name='rooms'
                        onChange={handleStateChange}
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Número de baños</span>
                    <input 
                        type="number"
                        inputmode="numeric"
                        required
                        value={state.bathrooms}
                        name='bathrooms'
                        onChange={handleStateChange}
                    />
                </div>
                <div
                    className={styles.input_container}
                >
                    <span>Estado de la propiedad</span>
                    <select
                        value={state.state}
                        name='state'
                        required
                        onChange={handleStateChange}
                    >
                        <option defaultValue={''}></option>
                        <option value="Buen estado">
                            Buen estado, se puede entrar a vivir
                        </option>
                        <option value="A reformar">
                            A reformar
                        </option>
                        <option value="Necesita lavado de cara">
                            Necesita solo un lavado de cara
                        </option>
                    </select>
                </div>
                <div className={styles.input_container_checkbox}>
                    <input 
                        type="checkbox" 
                        name='termsAndConditions' 
                        value={state.termsAndConditions} 
                        onChange={handleStateChange} 
                    />
                    <p>Autorizo el tratamiento de mis datos para recibir una respuesta a mi consulta según la <Link href='/docs/aviso-legal'>Política de Privacidad</Link>    
                    </p>    
                </div>
                <div className={styles.input_container_checkbox}>
                <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LeW0vYiAAAAABvzPB2SSZrvaz3d7ptD70HNJak4"
                    onChange={onChangeCaptcha}
                />,
                </div>
                <div className={styles.input_container}>
                    {!sendData ? (
                        <div className={styles.button} onClick={() => handleSubmit()} >
                            Enviar
                        </div>
                    ):
                    (
                        <div className={styles.button}>
                            <EllipsisLoader/>
                        </div>
                    )}
                </div>

            </div>
       </div>
       <Footer />
    </div>
  )
}

export default Index
