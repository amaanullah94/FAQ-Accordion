
import { useState } from 'react'

export default function Function({value}) {
    const [active, setActive] = useState(false)
    return (
    <>
        <section>
            <div className>
                <h4>{value.title}</h4>
                <button onClick={() => setActive(!active)}>{active ? "-" : "+"}</button>
            </div>
            { active && <p>{value.info}</p>}
        </section>
    </>
    )
} 
