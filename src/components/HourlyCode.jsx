import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faSun, faCloudRain, faCloud, faSnowflake, faSmog, faThunderstorm } from '@fortawesome/free-solid-svg-icons'
export default function HourlyCode(props) {
    if (props.code === 0)
        return <FontAwesomeIcon className='mb-2' icon={faSun} />

    else if (props.code === 1 || props.code === 2)
        return <FontAwesomeIcon className='mb-2' icon={faCloudSun} />
    else if (props.code === 3)
        return <FontAwesomeIcon className='mb-2' icon={faCloud} />
    else if (props.code === 45 || props.code === 48)
        return <FontAwesomeIcon className='mb-2' icon={faSmog} />
    else if (props.code === 51 || props.code === 53 || props.code === 55 || props.code === 56 || props.code === 57 || props.code === 80 || props.code === 81 || props.code === 82)
        return <FontAwesomeIcon className='mb-2' icon={faCloudRain} />
    else if (props.code === 61 || props.code === 63 || props.code === 65 || props.code === 66 || props.code === 67)
        return <FontAwesomeIcon className='mb-2' icon={faCloudRain} />
    else if (props.code === 71 || props.code === 73 || props.code === 75 || props.code === 85 || props.code === 86)
        return <FontAwesomeIcon className='mb-2' icon={faSnowflake} />
    else if (props.code === 95 || props.code === 96 || props.code === 99)
        return <FontAwesomeIcon className='mb-2' icon={faThunderstorm} />
}
