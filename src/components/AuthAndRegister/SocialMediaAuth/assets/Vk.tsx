import React, { useState } from 'react'

export default function Vk() {

    const [fill, setFill] = useState("#949494")

    return (

        <svg style={{ cursor: 'pointer' }} width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setFill('#9C3131')} onMouseLeave={() => setFill('#949494')}>
            <path id="Vector" d="M15.004 6.77393C14.7119 6.40515 14.7955 6.24108 15.004 5.91143C15.0077 5.90767 17.4184 2.57659 17.6667 1.44692L17.6682 1.44617C17.7916 1.03448 17.6682 0.731934 17.0714 0.731934H15.0965C14.5938 0.731934 14.362 0.991586 14.2378 1.2821C14.2378 1.2821 13.2323 3.68896 11.8099 5.24913C11.3508 5.69995 11.1385 5.84445 10.8879 5.84445C10.7645 5.84445 10.5726 5.69995 10.5726 5.28827V1.44617C10.5726 0.95245 10.4318 0.731934 10.0156 0.731934H6.91034C6.59499 0.731934 6.40759 0.962234 6.40759 1.17673C6.40759 1.64486 7.11881 1.75248 7.19257 3.06956V5.92724C7.19257 6.55341 7.07892 6.66856 6.8268 6.66856C6.15546 6.66856 4.52605 4.25192 3.56044 1.48605C3.36552 0.949439 3.1751 0.732686 2.66859 0.732686H0.692979C0.12927 0.732686 0.015625 0.992338 0.015625 1.28285C0.015625 1.79613 0.686958 4.34825 3.13747 7.71997C4.77065 10.0215 7.07064 11.2686 9.16291 11.2686C10.4205 11.2686 10.5741 10.9916 10.5741 10.5152C10.5741 8.31604 10.4604 8.10832 11.0904 8.10832C11.3824 8.10832 11.8851 8.25282 13.0592 9.36293C14.4011 10.6793 14.6216 11.2686 15.3727 11.2686H17.3476C17.9106 11.2686 18.1958 10.9916 18.0317 10.4452C17.6562 9.29595 15.1184 6.93198 15.004 6.77393Z" fill={fill} />
        </svg>
    )
}