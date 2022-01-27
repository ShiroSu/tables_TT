import { useState } from "react"

export default props=> {
    let {name, value, groupPrice, setGroupPrice} = props
    let anythingElse = (<></>), numPrice = 0, price

    if (typeof value == "string") {
        if (+value) numPrice = value
        price = value
    }
    else if (typeof value == "object") {
        // const [subgroupPrice, setSubgroupPrice] = useState(0)
        let subgroupPrice = 0
        
        Object.keys(value).map(subgroupItemName=> {
            const subgroupItem = value[subgroupItemName]
            if (+subgroupItem) subgroupPrice += +subgroupItem
        })
        // setGroupPrice(+subgroupPrice+groupPrice)
        price = (+subgroupPrice)? subgroupPrice : "-"
        // setSubgroupPrice(localSubPrice)
        anythingElse = (
            <tr>
            {
                Object.keys(value).map(subgroupItemName=> {
                    return (
                            <tr>
                            <td>{subgroupItemName}</td>
                            <td>{value[subgroupItemName]}</td>
                            </tr>
                    )
                })
            }
            </tr>
        )
    }
    numPrice += groupPrice
    setGroupPrice(numPrice)
    
    return (
        <tr>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
            <tr>{anythingElse}</tr>
        </tr>
    )
}