import React from 'react'
import { useNavigate } from 'react-router'


const Login = () => {

    const navigate = useNavigate()

    const handleUser = () => {
        const name1 = 'abc'
        const dob = 1234

        if (name1 === '' && dob === '') {
            alert('wrong user')
        }
        else {
            navigate("/planet")

        }
    }
    return (
        <div className='flex-container'>
            <div className="flex">
                <label className='label-login' htmlFor="username">Name </label>
                <input id="username" type="text" />
            </div>
            <br />
            <div className="flex">
                <label className='label-password' htmlFor="password">Password </label>
                <input id="password" type="password" />
            </div>
            <br />
            <div>
                <button onClick={handleUser}>Submit</button>
            </div>
        </div>
    )

}

export default Login