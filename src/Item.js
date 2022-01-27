import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import Group from "./Group"

export default props=> {
    let {name, value, padding} = props
    let price = 0, newPadding = padding+15

    if (typeof value == "number") {
        return (
            <tr>
                <td style={{paddingLeft: newPadding+"px"}}><span style={{marginRight: "5px"}}><Icon icon={faCircle} size="xs" /></span>{name}</td>
                <td>{(value)? value : "-"}</td>
            </tr>
        )
    }
    else if (typeof value == "object") {
        return <Group groupName={name} group={value} padding={newPadding} />
    }
}