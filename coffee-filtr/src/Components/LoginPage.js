import React from 'react'
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <h4>Don't have an account?</h4>
                <Link to="/signup">Sign Up</Link>
            </form>
        </div>
    )
}

export default LoginPage;