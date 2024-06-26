import React, { useState } from 'react'

export default function Google() {

    const [fill, setFill] = useState("#949494")

    return (

        <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => { setFill('#9C3131') }}
            onMouseLeave={() => setFill('#949494')}
        >
            <g id="Vector">
                <path d="M16.7344 4.875V2.625H15.5469V4.875H13.1719V6H15.5469V8.25H16.7344V6H19.1094V4.875H16.7344Z" fill={fill} />
                <path d="M6.04688 4.875V7.125H9.40631C8.91588 8.4345 7.59538 9.375 6.04688 9.375C4.08275 9.375 2.48438 7.86075 2.48438 6C2.48438 4.13925 4.08275 2.625 6.04688 2.625C6.89831 2.625 7.71769 2.91412 8.35419 3.4395L9.91456 1.743C8.84581 0.861 7.47306 0.375 6.04688 0.375C2.77294 0.375 0.109375 2.89838 0.109375 6C0.109375 9.10163 2.77294 11.625 6.04688 11.625C9.32081 11.625 11.9844 9.10163 11.9844 6V4.875H6.04688Z" fill={fill} />
            </g>
        </svg>
    )
}
