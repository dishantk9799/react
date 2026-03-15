import React from 'react'

const Register = ({ setToggle }) => {
    return (
        <div className='w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl border border-slate-200/50 p-8 sm:p-10'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-bold text-slate-900 mb-2'>Create account</h1>
                <p className='text-sm text-slate-600'>Join us today</p>
            </div>
            <form className='space-y-5'>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Full Name</label>
                    <input className='w-full px-4 py-3 border border-slate-300 rounded-xl text-sm' required type="text" placeholder='John Doe' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Email</label>
                    <input className='w-full px-4 py-3 border border-slate-300 rounded-xl text-sm' required type="email" placeholder='you@example.com' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>Password</label>
                    <input className='w-full px-4 py-3 border border-slate-300 rounded-xl text-sm' required type="password" placeholder='••••••••' />
                </div>
                <button className='w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md'>Sign up</button>
                <p className='text-center text-sm text-slate-600'>
                    Already have an account? &nbsp;
                    <button onClick={() => {
                        setToggle(prev => !prev)
                    }} className='font-semibold text-slate-900 hover:text-slate-700'>Sign in</button>
                </p>
            </form>
        </div>
    )
}

export default Register
