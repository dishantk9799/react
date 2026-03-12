import React from 'react'
import Cards from './pages/Cards'

function App() {
  return (
    <>
      <div className='main'>
        <h1 style={{ textAlign: "center" }}>OUR PRODUCT</h1>
        <div className="container">
          <Cards price="3000" name="Headphones" img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjGOjPL4DpqSFkDp7wh9RbN_YjSHyr5fuEgW2ZZLgIPt4QoQ3Jxt56lZ9ECMmnAThCSLXj19omfYQV_E5zsOHbfpdsoyOlpvlrw91I-roq5Ey6rB3l_UoD4bs" />
          <Cards price="1000" name="Smart Watch" img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRUdsvKrdcWzIKaOQwf06tK-TJQuyCN4qG2oaT73VMny6XMX9eZWBMtdKmthRigxbisbOJHWPj_0sl0u2E-caw4WvYAi0l57QabJhEqk_ds7vCM_62Ms8SMxXR1hHnmXI0pY9Wra9XeWQ&usqp=CAc"/>
          <Cards price="80000" name="Shoes" img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZd7MjfZRIgXeF-e5zoCG01AUH8blTDRPbQX0fqKwks_qyA-nr0VlCqivcaBIKDic5XLbnmmA_Nh9NNGoXIh2KtyJiHj4IjfaUzJWcldb6fGt1nPJ4CQbzXe0" />
        </div>
      </div>
    </>
  )
}

export default App