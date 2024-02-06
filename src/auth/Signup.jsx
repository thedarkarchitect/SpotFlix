import React from 'react'
import { Card, Input, Button, Typography } from "@material-tailwind/react"

function Signup() {
    
    

    return (
        <div className="h-screen flex justify-center items-center">
            
            <Card color='transparent' shadow={ true }>
                <Typography color='yellow' className='text-yellow-500' >Please SignUp for an account</Typography>
                <form  className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                    
                    <div className='mb-1 flex flex-col gap-6'>

                    <Typography color='yellow' className='text-yellow-500' > Your Email</Typography>

                    <Input
                        size="lg"
                        placeholder="name@gmail.com"
                        className="border-5 border-yellow-500/30"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />

                        <Typography color='yellow' className='text-yellow-500' > Your Name</Typography>

                        <Input
                            size="lg"
                            placeholder="Name..."
                            className="border-5 border-yellow-500/30"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />

                        <Typography  color='yellow' className='text-yellow-500'>
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            color='yellow'
                            className="border-5 border-yellow-500/30"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />

                        <div className='border-2 border-yellow-500 p-5 flex justify-center items-center gap-5 rounded-2xl cursor-pointer hover:bg-yellow-500' >
                            <h1 color='slate' className='text-slate-50'>SignUp</h1>
                        </div>

                        <Typography color="slate" className=" text-slate-50 mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a href="/login" className="font-medium text-yellow-500">
                                Login
                            </a>
                        </Typography>

                    </div>

                </form>

            </Card>
            
        </div>
    )
}

export default Signup