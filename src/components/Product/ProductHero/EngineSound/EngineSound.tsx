import React, { useState, useRef } from 'react'
import styles from './EngineSound.module.scss'
import Link from 'next/link'
import { AudioVisualizer } from 'react-audio-visualize';

export default function EngineSound() {

    const [blob, setBlob] = useState<Blob>();
    const visualizerRef = useRef<HTMLCanvasElement>(null)

    return (
        <div className={styles.wrapper}>
            <p className={styles.wrapperTitle}>Звук двигателя</p>
            <div className={styles.wrapperSoundMain}>
                <div className={styles.soundVisualization}>
                    {blob && (
                        <AudioVisualizer
                            ref={visualizerRef}
                            blob={blob}
                            width={500}
                            height={75}
                            barWidth={1}
                            gap={0}
                            barColor={'#f76565'}
                        />
                    )}
                </div>
            </div>
            <Link href={'/'} className={styles.wrapperLink}>Инструкция по установке</Link>
        </div>
    )
}