import React from "react";

type PropsType = {
    title: string
    disabled: boolean
    onClickHandler: () => void
}

export const Button = (props: PropsType) => {
    return (
        <button onClick={props.onClickHandler} disabled={props.disabled} >{props.title}</button>
    )
}