import { useState } from "react";


function Form({handleSubmit}) {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    function handleInput(e) {
        const {value, name} = e.target;

        setData({
            ...data,
            [name]: value 
        })
    }


    return <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="email" name="email" value={data.email} onInput={handleInput}/>
        <label htmlFor="password"></label>
        <input type="password" name="password" value={data.password} onInput={handleInput}/>
        <button type="submit">Login</button>
    </form>
}

export default Form;