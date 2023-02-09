import styles from '../../styles/Investor&Owner_pages.module.scss';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ProjectCard from '../cards/ProjectCard';

function HomeSection({projectsInStudy, projectsFinished}) {

  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
              <h1>Algunos de los <span> proyectos realizados </span></h1>
            </div> 
            <div className={styles.page_section_body_flex}>
              <div className={styles.swiper_container}>
                  {projectsFinished?.map((item) => (
                    <ProjectCard 
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      imgs={item.projectMedia}
                      location={item.address.city}
                      quantityFunded={item.fund.quantityFunded}
                      estimatedRentability={item.fund.estimatedRentability}
                      finalProfit={item.fund.finalProfit}
                    />
                  ))}
              </div>
            </div>
        </div>

      {/*   <div className={styles.page_section_container}> 
            <div className={styles.page_section_header}>
              <h1>Algunos de los <span> proyectos en estudio </span></h1>
            </div> 
            <div className={styles.page_section_body_flex}>
              <div className={styles.swiper_container}>
                  {projectsInStudy?.map((item) => (
                    <ProjectCard 
                      key={item.id}
                      name={item.name}
                      img={item.projectMedia[0].link}
                      location={item.address.city}
                      quantityFunded={item.fund.quantityFunded}
                      estimatedRentability={item.fund.estimatedRentability}
                      finalProfit={item.fund.finalProfit}
                    />
                  ))}
              </div>
            </div>
        </div> */}
    </div>
  )
}

export default HomeSection;








 