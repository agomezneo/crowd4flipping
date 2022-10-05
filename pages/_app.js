import '../styles/globals.scss';
import styles from '../styles/globals.scss'
import  { motion, AnimatePresence } from 'framer-motion';
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.back_ground_traslate}
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            backgroundImage: 'inherit'
          },
          exitState: {
            opacity: 0,
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
