import { useState } from "react"
import Item from "./Item"

export default props=> {
    const [groupPrice, setGroupPrice] = useState(0)
    // let groupPrice = 0

    return (
        <tr>
        <tr>
            <td>{props.groupName}</td>
            <td>{(groupPrice)? groupPrice : "-"}</td>
        </tr>
        {
            Object.keys(props.group).map(itemName=> {
                return (
                    <Item name={itemName} value={props.group[itemName]} groupPrice={groupPrice} setGroupPrice={setGroupPrice} />
                )
            })
        }</tr>
    )
}