import React from "react";

type PropsType = {
    counterValue: number
}

export const Screen = (props: PropsType) => {

    let styleForScreen = props.counterValue === 5 ? 'RedScreen' : '';

    return (
        <div className={`Screen ${styleForScreen}`}>
            {props.counterValue}
        </div>
    )
}