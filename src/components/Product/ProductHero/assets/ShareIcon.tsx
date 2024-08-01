import React from 'react'

export default function ShareIcon({ isActive, isMobile }: { isActive: boolean, isMobile:boolean }) {

    const fillColor = isActive ? '#9C3131' : '#8D8D8D'
    const size = isMobile ? '12' : '18'

    return (
        <svg width={size} height={size} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="share-3-svgrepo-com 1" clipPath="url(#clip0_464_6272)">
                <path id="Vector" d="M12.5013 5.5L10.0013 3M10.0013 3L7.5013 5.5M10.0013 3V13M13.3346 8.83333H14.168C15.0885 8.83333 14.668 8.83333 15.8346 8.83333V17.1667H5.83464C4.91416 17.1667 5.18649 17.1667 4.16797 17.1667V8.83333C5.11241 8.83333 4.91416 8.83333 5.83464 8.83333H6.66797" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_464_6272">
                    <rect width="20" height="17" fill={fillColor} transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    )
}