import React, { useContext } from 'react'

function Login() {
    
    

    return (
        <div className="h-screen flex justify-center items-center">
            <div className='border-2 border-yellow-500/30 p-5 flex justify-center items-center gap-5 rounded-2xl cursor-pointer hover:bg-black' onClick={GoogleLogin}>
                
            </div>
        </div>
    )
}

export default Login