import React from 'react'
import styles from './home.module.css'
import { Link } from "react-router-dom";

type Props = {}

const Home = (props: Props) => {
    return (
        <div className={styles.box}>
            <div className={styles.block}>
                <p className={styles.title}>郭文贵视频｜字幕搜索</p>
                <form action='/search' method='get' className={styles.formBlock} autoComplete="off">
                    <input name='q' type="text" maxLength={30} autoFocus/>
                    <button type="submit">搜索</button>
                </form>
            </div>
            <div className={styles.paternLayerTwo}></div>
            <div className={styles.patternLayerThree}></div>
            <div className={styles.footerBottom}>
                <p> Copyright ©2023  Himalaya Washington DC</p>
                <Link to="/farm">喜马拉雅华盛顿DC农场</Link>
            </div>
        </div>
    )
}

export default Home