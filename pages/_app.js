import '../styles/globals.scss';
import styles from '../styles/globals.scss'
import  { motion, AnimatePresence } from 'framer-motion';
import {useRouter} from 'next/router';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {


  const router = useRouter();
  return (
    <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
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
    </>
  )
}

export default MyApp
