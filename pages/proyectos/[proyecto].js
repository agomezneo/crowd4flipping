import React, { useState, useEffect } from 'react';
import styles from '../../styles/project_page.module.scss';
import {MdLocationPin} from 'react-icons/md'
import Carousel from 'react-material-ui-carousel' 
import Image from 'next/image';
import Link from 'next/link';
import Map from '../../components/maps';
import Modal from '../../components/modals/ProjectModal';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import SimpleHorizontal from '../../components/stepers/SimpleHorizontal';

function Index({project}) { 

    const [modalVisible, setModalVisible] = useState(false);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const height = document.getElementById('main').offsetHeight;
          setDivHeight(height);
          if (window.scrollY >= divHeight) {
            setModalVisible(true);
          } else {
            setModalVisible(false);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [divHeight]);

    console.log(project.timeline)
    
  return (
    <div className={styles.project_page}>

        <div className={styles.project_page_header}>
            <div>
                <h1> {project?.name} </h1>
                <span> <MdLocationPin />{project?.address?.city}</span>
            </div> 

            <SimpleHorizontal 
                data={project.timeline}
            />
        </div>

        <div className={styles.carousel_container}>
            <Carousel
                className={styles.carousel}
                autoPlay
                navButtonsAlwaysVisible
                duration={100}

            >   
                {project.projectMedia.map((item, key) => (
                    <Image 
                        key={key}
                        src={item.link}
                        layout='fill'
                        objectFit='contain'
                        className={styles.img}
                    />
                ))}
            </Carousel>
        </div>

        <div className={styles.main} >
            <div className={styles.project_page_sub_header} id='main'>
                <h2>Descripción y ubicación del proyecto</h2>
            </div>
            <div className={styles.main_container}>   
                <div className={styles.description}>
                    <p>{project.description}</p>
                </div>
                <div className={styles.map_container}>
                        <Map 
                            lat={project.address.positions.latitude ? parseFloat(project.address.positions.latitude) : 39.57766747597557}
                            lng={project.address.positions.longitude ? parseFloat(project.address.positions.longitude) : 2.6414387504611745}
                        />
                </div>
            </div>
        </div>
        
        {modalVisible && (
            <Modal>
               <div className={styles.modal_container}>
                    <div className={styles.footer_logo_container}>
                        <Image src={Logo} width={350} height={140} alt='logo crowd4flipping' />
                    </div>
                    <h1>Para ver la información detallada de este proyecto <span>debes iniciar sesión</span>.<br/> Si aún no tienes una cuenta, <span>¿a qué estás esperando?</span></h1>
                    <h2></h2>
                    <Link href={`https://app.crowd4flipping.com/proyectos/${project.id}`}>
                        <div className={styles.button}>
                            <span>Acceso a Crowd4Flipping</span>
                        </div>
                    </Link>
               </div>
            </Modal>
        )}

    </div>
  )
}

export default Index

export async function getServerSideProps(context){

    const proyectoId = context.query.proyecto;
    const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/get-projects/${proyectoId}`
    const project = await fetch(`${api}`).then((res) => res.json());
  
    return{
        props: {
          project,
        }
    }
  
  }
  
 