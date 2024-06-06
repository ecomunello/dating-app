import React from "react";

interface Props {
    type: string
    placeholder: string
    label: string
    value: string
  }

const Input = (props: Props) =>{
    return (
        <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{props.label}</span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <input type={props.type} placeholder={props.placeholder} defaultValue={props.value} className="input input-bordered w-full max-w-xs" />
        <div className="label">
          {/* <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span> */}
        </div>
      </label>
    )
}

export default Input 