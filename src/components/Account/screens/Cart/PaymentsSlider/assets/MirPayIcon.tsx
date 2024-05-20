import React from 'react'

export default function MirPayIcon({ isActive }: { isActive: boolean }) {

    const fillColor = isActive ? '#111111' : '#5F6368'

    return (

        <svg width="91" height="50" viewBox="0 0 91 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="iconm/mir">
                <g id="Vector">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.8245 15V15.0087C29.8161 15.0087 27.1683 15 26.4622 17.6288C25.815 20.0393 23.9909 26.6943 23.9405 26.8777H23.4362C23.4362 26.8777 21.5701 20.0742 20.9144 17.6201C20.2084 14.9913 17.5521 15 17.5521 15H11.5V35H17.5521V23.1223H18.0565L21.5869 35H25.7898L29.3202 23.131H29.8245V35H35.8767V15H29.8245Z" fill={fillColor} />
                    <path fillRule="evenodd" clipRule="evenodd" d="M51.9316 15C51.9316 15 50.158 15.1659 49.3258 17.0961L45.0389 26.8777H44.5345V15H38.4824V35H44.1983C44.1983 35 46.056 34.8253 46.8882 32.9039L51.091 23.1223H51.5954V35H57.6475V15H51.9316Z" fill={fillColor} />
                    <path fillRule="evenodd" clipRule="evenodd" d="M60.3333 24.0825V34.9996H66.3855V28.624H72.9419C75.7999 28.624 78.2207 26.7288 79.1202 24.0825H60.3333Z" fill={fillColor} />
                    <path fillRule="evenodd" clipRule="evenodd" d="M72.9435 15H59.4859C60.1584 18.8079 62.9071 21.8646 66.4627 22.8603C67.2696 23.0873 68.1186 23.2096 68.9928 23.2096H79.3655C79.458 22.7555 79.5 22.2926 79.5 21.8122C79.5 18.048 76.5664 15 72.9435 15Z" fill={fillColor} />
                </g>
            </g>
        </svg>
    )
}
