import React, {useState} from 'react'

export default function Discord(){

    const [fill, setFill] = useState("#949494")

    return (
        <svg style={{ cursor: 'pointer' }} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setFill('#9C3131')} onMouseLeave={() => setFill('#949494')}>
            <path id="Vector" d="M16.9339 1.68154C15.6672 1.10033 14.3088 0.672096 12.8886 0.42681C12.8627 0.422075 12.8369 0.433914 12.8235 0.457554C12.6488 0.768285 12.4553 1.17361 12.3198 1.49223C10.7922 1.26351 9.27247 1.26351 7.77622 1.49223C7.64067 1.16655 7.44014 0.768285 7.26465 0.457554C7.25134 0.43469 7.22549 0.422851 7.19963 0.42681C5.78017 0.671281 4.4218 1.09951 3.15426 1.68154C3.14328 1.68627 3.13388 1.69415 3.12763 1.7044C0.551105 5.55371 -0.154747 9.30841 0.191503 13.0165C0.193055 13.0347 0.203264 13.052 0.217355 13.063C1.91728 14.3114 3.56398 15.0693 5.18005 15.5717C5.20591 15.5796 5.23331 15.5701 5.24977 15.5488C5.63204 15.0268 5.97282 14.4763 6.26499 13.8974C6.28223 13.8635 6.26577 13.8233 6.23052 13.8099C5.68999 13.6049 5.17532 13.3548 4.6802 13.071C4.64104 13.0481 4.63789 12.9921 4.67396 12.9653C4.77814 12.8872 4.88236 12.806 4.98185 12.7239C4.99986 12.709 5.02494 12.7058 5.0461 12.7152C8.29866 14.2003 11.82 14.2003 15.0341 12.7152C15.0553 12.705 15.0804 12.7082 15.0992 12.7231C15.1987 12.8051 15.3029 12.8872 15.4078 12.9652C15.4439 12.992 15.4415 13.0481 15.4024 13.0709C14.9073 13.3603 14.3926 13.6048 13.8513 13.8091C13.816 13.8225 13.8003 13.8635 13.8176 13.8974C14.1161 14.4754 14.4569 15.0259 14.8321 15.548C14.8477 15.5701 14.8759 15.5796 14.9018 15.5716C16.5257 15.0693 18.1724 14.3114 19.8723 13.063C19.8872 13.052 19.8966 13.0354 19.8982 13.0173C20.3126 8.73027 19.2041 5.00635 16.9597 1.70514C16.9543 1.69415 16.9449 1.68627 16.9339 1.68154ZM6.75079 10.7587C5.77155 10.7587 4.96466 9.85966 4.96466 8.75554C4.96466 7.65143 5.75587 6.75242 6.75079 6.75242C7.75348 6.75242 8.55257 7.65934 8.53689 8.75554C8.53689 9.85966 7.74564 10.7587 6.75079 10.7587ZM13.3546 10.7587C12.3754 10.7587 11.5685 9.85966 11.5685 8.75554C11.5685 7.65143 12.3598 6.75242 13.3546 6.75242C14.3574 6.75242 15.1564 7.65934 15.1408 8.75554C15.1408 9.85966 14.3574 10.7587 13.3546 10.7587Z" fill={fill} />
        </svg>
    )
}

