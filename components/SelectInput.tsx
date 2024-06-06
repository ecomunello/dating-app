import React from "react";

interface Props {
    items: any[]
    label: string
    id: string
  }

const SelectInput = (props: Props) =>{
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{props.label}</span>
            </div>
            <select id={props.id} name={props.id} className="select select-bordered">
            {
            props.items.map(item => {
              return (<option value={item.id}>{item.name}</option>)
            })
            }
            </select>
        </label>
    )
}

export default SelectInput 








