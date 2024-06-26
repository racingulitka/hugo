import React from 'react'

export const HeartIcon = ({
    isActive,
    width = 22,
    height = 20,
}: {
    isActive: boolean,
    width?: number,
    height?: number,
}) => {

    const fill = isActive ? '#9C3131' : '#8D8D8D'

    return (
        <svg
            width={width} height={height} viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M23.671 28.59L23.0603 27.8592L23.671 28.59C24.0923 28.2379 24.5348 27.8777 24.9905 27.5067C29.3044 23.995 34.805 19.5173 34.805 11.7863C34.805 7.45449 32.493 3.67186 29.1139 2.0345C25.8801 0.467587 21.8821 0.958924 18.3271 4.38406C14.7719 0.958925 10.7739 0.467585 7.54022 2.0345C4.16112 3.67186 1.84912 7.45449 1.84912 11.7863C1.84912 19.5173 7.34975 23.995 11.6636 27.5067C12.1194 27.8777 12.5618 28.2379 12.9832 28.59C13.7772 29.2535 14.6197 29.9524 15.4714 30.48C16.3212 31.0064 17.2842 31.4299 18.3271 31.4299C19.3699 31.4299 20.3329 31.0064 21.1827 30.48C22.0345 29.9524 22.8769 29.2535 23.671 28.59Z" fill={fill} />
        </svg>
    )
}

export default HeartIcon