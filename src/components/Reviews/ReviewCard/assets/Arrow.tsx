import React from 'react'

export default function Arrow({
    isOpened,
}:{
    isOpened:boolean | null,
}) {
    const fill = isOpened ? '#8E8E8E' : '#9C3131'
    return (
        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector 6" d="M1 0.991455L5.5 4.99146L10 0.991455" stroke={fill} />
        </svg>
    )
}