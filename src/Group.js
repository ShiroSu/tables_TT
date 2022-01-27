import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import Item from "./Item"

const countGroupPrice = group=> {
    let localPrice = 0
    group.map(item=> {
        if (typeof item == "number") localPrice += +item
        else if (typeof item == "object")
            localPrice += countGroupPrice(Object.values(item))
    })
    return localPrice
}

export default props=> {
    const groupPrice = countGroupPrice(Object.values(props.group))

    return (
        <>
        <tr>
            <td style={{paddingLeft: props.padding+"px"}}><span style={{marginRight: "5px"}}><Icon icon={faChevronDown} size="xs" /></span>{props.groupName}</td>
            <td>{(groupPrice)? groupPrice : "-"}</td>
        </tr>
        {
            Object.keys(props.group).map(itemName=> {
                return (
                    <Item name={itemName} value={props.group[itemName]} padding={props.padding} />
                )
            })
        }</>
    )
}