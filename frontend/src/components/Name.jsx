import { useState } from "react"


const Name = ({ person }) => {

    const [name, setName] = useState("hello")

    const setUpper = () => {
        setName(name.toUpperCase())
    }

    return (
        <>
            <h1>{person.name}</h1>
            <h2>{name}</h2>
            <h2>{person.age}</h2>
            <p>{person.job}</p>
            <button onClick={setUpper}>UPPER</button>
        </>
    )
}

export default Name
