import React from 'react'

export default function YoolaPayIcon({ isActive }: { isActive: boolean }) {

    const fillColor = isActive ? '#111111' : '#5F6368'

    return (

        <svg width="91" height="50" viewBox="0 0 91 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="iconm/yoola">
                <path id="Vector" d="M50.1674 12C43.236 12 37.6785 17.625 37.6785 24.5C37.6785 31.4375 43.2985 37 50.1674 37C57.0362 37 62.6562 31.375 62.6562 24.5C62.6562 17.625 57.0362 12 50.1674 12ZM50.1674 29.0625C47.6071 29.0625 45.484 26.9375 45.484 24.375C45.484 21.8125 47.6071 19.6875 50.1674 19.6875C52.7276 19.6875 54.8507 21.8125 54.8507 24.375C54.7882 27.0625 52.7276 29.0625 50.1674 29.0625ZM37.616 15.5625V33.75H33.1824L27.5 15.5625H37.616Z" fill={fillColor} />
            </g>
        </svg>
    )
}