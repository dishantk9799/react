import React, { useState } from 'react'
import Login from './components/Login';
import Register from './components/Register';

const App = () => {

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12 sm:px-6 lg:px-8">
        {toggle ? <Register setToggle={setToggle} /> : <Login setToggle={setToggle} />}
      </div>
    </>
  )
}

export default App
