import { useState } from 'react';
import { getData } from './data';
import Group from './Group';

export default ()=> {
    let data = getData()
    let inner = (<tbody>
        {
            Object.keys(data).map(sectionName=> {
                return (<tr>
                    <td>{sectionName}</td>
                    {
                        Object.keys(data[sectionName]).map(groupName=> {
                            const group = data[sectionName][groupName]
                            // const [groupPrice, setGroupPrice] = useState(0)
                            
                            return (
                                <Group groupName={groupName} group={group} /> //groupPrice={groupPrice} setGroupPrice={setGroupPrice} />
                            )
                        })
                    }
                </tr>)
            })
        }
    </tbody>)
    console.log(inner)

    // Object.keys(data).map
    
    return (
        // <tbody>
                inner
        // </tbody>
    )
}