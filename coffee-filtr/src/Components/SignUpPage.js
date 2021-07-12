import React from 'react'

const SignUpPage = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Sign up" />
            </form>
        </div>
    )
}

export default SignUpPage;