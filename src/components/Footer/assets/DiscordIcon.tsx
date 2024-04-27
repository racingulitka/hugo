import React, { useState } from 'react'

export default function DiscordIcon() {
    const [color, setColor] = useState<string>('#8D8D8D')
    return (
        <svg
            onMouseEnter={() => setColor('#9c3131')}
            onMouseLeave={() => setColor('#8D8D8D')}
            width="33" height="27" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M27.9222 2.07765C25.8321 1.10916 23.5692 0.406216 21.212 7.18534e-05C21.1913 -0.000585167 21.1708 0.0032702 21.1518 0.011367C21.1327 0.0194637 21.1158 0.0316052 21.102 0.0469349C20.8191 0.562425 20.4891 1.23412 20.2691 1.74961C17.7689 1.37471 15.2262 1.37471 12.726 1.74961C12.506 1.2185 12.176 0.562425 11.8774 0.0469349C11.8617 0.0156931 11.8146 7.18534e-05 11.7674 7.18534e-05C9.41023 0.406216 7.16303 1.10916 5.05725 2.07765C5.04154 2.07765 5.02582 2.09327 5.01011 2.10889C0.735707 8.46661 -0.442897 14.6525 0.138547 20.7759C0.138547 20.8071 0.154262 20.8384 0.185691 20.854C3.01434 22.9159 5.73299 24.1656 8.4202 24.9935C8.46735 25.0091 8.51449 24.9935 8.53021 24.9623C9.15879 24.1031 9.72452 23.1971 10.2117 22.2442C10.2431 22.1818 10.2117 22.1193 10.1488 22.1037C9.25308 21.76 8.40449 21.3539 7.57161 20.8852C7.50875 20.854 7.50875 20.7603 7.55589 20.7134C7.72876 20.5884 7.90162 20.4478 8.07448 20.3229C8.10591 20.2916 8.15305 20.2916 8.18448 20.3073C13.5903 22.7597 19.4205 22.7597 24.7635 20.3073C24.7949 20.2916 24.8421 20.2916 24.8735 20.3229C25.0464 20.4635 25.2192 20.5884 25.3921 20.729C25.455 20.7759 25.455 20.8696 25.3764 20.9008C24.5592 21.3851 23.6949 21.7756 22.7992 22.1193C22.7363 22.1349 22.7206 22.213 22.7363 22.2599C23.2392 23.2127 23.8049 24.1188 24.4178 24.9779C24.4649 24.9935 24.5121 25.0091 24.5592 24.9935C27.2621 24.1656 29.9808 22.9159 32.8094 20.854C32.8409 20.8384 32.8566 20.8071 32.8566 20.7759C33.548 13.6996 31.7094 7.56059 27.985 2.10889C27.9693 2.09327 27.9536 2.07765 27.9222 2.07765ZM11.0288 17.0425C9.41023 17.0425 8.05877 15.5585 8.05877 13.7309C8.05877 11.9032 9.3788 10.4192 11.0288 10.4192C12.6946 10.4192 14.0146 11.9188 13.9989 13.7309C13.9989 15.5585 12.6789 17.0425 11.0288 17.0425ZM21.982 17.0425C20.3634 17.0425 19.0119 15.5585 19.0119 13.7309C19.0119 11.9032 20.332 10.4192 21.982 10.4192C23.6478 10.4192 24.9678 11.9188 24.9521 13.7309C24.9521 15.5585 23.6478 17.0425 21.982 17.0425Z" fill={color} />
        </svg>
    )
}