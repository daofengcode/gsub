import styled from '@emotion/styled'
import React from 'react'
import styles from './home.module.css';

const Wave = () => {
    return (
        <div>
            <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g className={styles.parallax}>
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"></use>
                </g>
            </svg>
        </div>
    )
}

type Props = {}

const Home = (props: Props) => {
    return (
        <div className={styles.box}>
            <div className={styles.block}>
                <p className={styles.title}>郭文贵视频｜字幕搜索</p>
                <div className={styles.formBlock}>
                    <input type="text" maxLength={30} />
                    <button>搜索</button>
                </div>
            </div>
            <div className={styles.paternLayerTwo}></div>
            {/* <div className={styles.patternLayerOne}></div> */}
            <div className={styles.patternLayerThree}></div>
            {/* <Wave></Wave> */}
            <div className={styles.footerBottom}>
                <p> Copyright ©2023  Himalaya Washington DC</p>
                <a href="#">喜马拉雅华盛顿DC农场</a>
            </div>
        </div>
    )
}

export default Home