import React from 'react'
import styles from '../../styles/BlockLoader.module.scss'



function BlocksLoader() {
  return (
    <div className={styles.boxes}>
        <div className={styles.box}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={styles.box}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={styles.box}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={styles.box}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default BlocksLoader

export function BlocksLoaderLittle() {
    return (
      <div className={`${styles.boxes} ${styles.little_boxes}`}>
          <div className={styles.box}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div className={styles.box}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div className={styles.box}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div className={styles.box}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
    )
  }
