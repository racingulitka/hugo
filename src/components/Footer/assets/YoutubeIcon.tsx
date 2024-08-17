import React, { useState } from 'react'

export default function YouTubeIcon() {
    const [color, setColor] = useState<string>('#8D8D8D')
    return (
        <svg
            onMouseEnter={() => setColor('#9c3131')}
            onMouseLeave={() => setColor('#8D8D8D')}
            width="38" height='100%'/*"27"*/ viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M15.2 19.2857L25.061 13.5L15.2 7.71429V19.2857ZM37.164 4.185C37.411 5.09143 37.582 6.30643 37.696 7.84929C37.829 9.39214 37.886 10.7229 37.886 11.88L38 13.5C38 17.7236 37.696 20.8286 37.164 22.815C36.689 24.5507 35.587 25.6693 33.877 26.1514C32.984 26.4021 31.35 26.5757 28.842 26.6914C26.372 26.8264 24.111 26.8843 22.021 26.8843L19 27C11.039 27 6.08 26.6914 4.123 26.1514C2.413 25.6693 1.311 24.5507 0.836 22.815C0.589 21.9086 0.418 20.6936 0.304 19.1507C0.171 17.6079 0.114 16.2771 0.114 15.12L0 13.5C0 9.27643 0.304 6.17143 0.836 4.185C1.311 2.44929 2.413 1.33071 4.123 0.848572C5.016 0.597857 6.65 0.424285 9.158 0.308571C11.628 0.173571 13.889 0.115714 15.979 0.115714L19 0C26.961 0 31.92 0.308572 33.877 0.848572C35.587 1.33071 36.689 2.44929 37.164 4.185Z" fill={color} />
        </svg>
    )
}
