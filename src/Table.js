import { getData } from './data';
import Group from './Group';

const countElements = section=> {
    let quantity = 0
    section.map(item=> {
        quantity++
        if (typeof item == "number") quantity++
        else if (typeof item == "object")
            quantity += countElements(Object.values(item))
    })
            return quantity
}

export default ()=> {
    let padding = 10
    let data = getData()
    let inner = (<tbody>
        {
            Object.keys(data).map(sectionName=> {
                return (<>
                    <td rowSpan={countElements(Object.values(data[sectionName]))}>{sectionName}</td>
                    {
                        Object.keys(data[sectionName]).map(groupName=> {
                            const group = data[sectionName][groupName]
                            return (
                                <Group groupName={groupName} group={group} padding={padding} />
                            )
                        })
                    }
                </>)
            })
        }
    </tbody>)
    
    return inner
}