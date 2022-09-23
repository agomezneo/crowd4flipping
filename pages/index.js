import Image from "next/image"
import C4F from '../public/images/brand/c4f.png'
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Image src={C4F} width={600} height={200} alt='crowd4flipping logo' />
    </div>
  )
}
