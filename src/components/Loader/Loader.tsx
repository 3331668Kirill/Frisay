import React, {CSSProperties} from 'react'
import {ReactComponent as LoaderIcon} from "../../assets/images/loader.svg";

import s from './Loader.module.css'

type LoaderPropsTypes = {
    wrapperStyles?: CSSProperties
    svgStyles?: CSSProperties
};
export const Loader = ({wrapperStyles, svgStyles}: LoaderPropsTypes) => {
    return (
        <div className={s.loader} style={wrapperStyles}>
            <LoaderIcon className={s.svg} style={svgStyles} />
        </div>
    )
}
