import { useRef, useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const emailState = useState("");
    const [error, setError] = useState({
        name: "",
        email: ""
    })

    const handleNameChange = (e) => {
        setName(e.target.value);
        setError({ ...error, name: "" })
    }
    const handleEmailChange = (e) => {
        emailState[1](e.target.value);
        setError({ ...error, email: "" })
    }

    const handleSubmit = () => {
        const errorClone = { ...error };
        let foundError = false;
        if (!name) {
            errorClone.name = "name is required";
            foundError = true;
        }
        if (!emailState[0]) {
            errorClone.email = "email is required";
            foundError = true;
        }
        if (foundError) {
            setError(errorClone);
            return;
        }

        console.log({ name, email: emailState[0] })
    }
    return <div style={{ padding: "20px" }}>
        <h1>Form</h1>
        <input style={{ minWidth: 200, borderRadius: "10px", padding: "8px", borderColor: error.name ? "red" : "black" }} placeholder="Enter name " value={name} onChange={handleNameChange} />
        <br />
        {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        <br />
        <br />
        <input style={{ minWidth: 200, borderRadius: "10px", padding: "8px", borderColor: error.email ? "red" : "black" }} placeholder="Enter email " value={emailState[0]} onChange={handleEmailChange} />
        <br />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        <br />
        <br />
        <button style={{ cursor: "pointer" }} onClick={handleSubmit}>Submit</button>
    </div>
}


export const UncontrolledForm = () => {
    const emailRef = useRef();
    const handleSubmit = () => {
        const name = document.getElementById("name")
        console.log({ name: name.value, email: emailRef.current.value })
    }

    return <div style={{ padding: "20px" }}>
        <h1>Uncontrolled Form</h1>
        <input id="name" style={{ minWidth: 200, borderRadius: "10px", padding: "8px", }} placeholder="Enter name " />
        <br />

        <br />
        <input ref={emailRef} style={{ minWidth: 200, borderRadius: "10px", padding: "8px", }} placeholder="Enter email " />
        <br />

        <br />
        <button style={{ cursor: "pointer" }} onClick={handleSubmit}>Submit</button>
    </div>
}

export default Form;