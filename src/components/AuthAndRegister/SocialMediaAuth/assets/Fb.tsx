import React, { useState } from 'react'

export default function Fb() {

    const [fill, setFill] = useState("#949494")

    return (

        <svg style={{ cursor: 'pointer' }} width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setFill('#9C3131')} onMouseLeave={() => setFill('#949494')}>
            <path id="Vector" d="M7.46128 3.96792H9.11026V1.09594C8.82577 1.05681 7.84737 0.96875 6.70791 0.96875C4.3304 0.96875 2.70174 2.4642 2.70174 5.21275V7.74229H0.078125V10.9529H2.70174V19.0315H5.91842V10.9537H8.43592L8.83556 7.74304H5.91767V5.5311C5.91842 4.60313 6.16829 3.96792 7.46128 3.96792Z" fill={fill} />
        </svg>
    )
}