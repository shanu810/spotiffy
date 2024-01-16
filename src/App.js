import logo from './logo.svg';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import { Navigate } from 'react-router-dom';
import Signin from './pages/Signin';
import { useEffect } from 'react'
import User from './pages/User/User';
import Login from './pages/Login/Login';
import axios from'axios'
import { useState } from 'react'
import Prog1 from './pages/Prog1';
function App() {
  let isLoggedin=false
  // useEffect(() => {
  //   // console.log("first");
  // axios.get('https://jsonplaceholder.typicode.com/posts/1')
  // .then((result)=>{
  //   result.data?isLoggedin=true:isLoggedin=false
  //   console.log(result.data)
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })
  // }, [])
  axios({
    method:'put',url:'https://jsonplaceholder.typicode.com/posts/1',data:{name:"sanhar"}
  })
  .then((result)=>{console.log(result)})
  return (
    <>
    <div className="App">
      {/* <Navbar></Navbar> */}
<Routes>

  <Route path='/home' element={isLoggedin?<Home></Home>:<Navigate to='/Signin'></Navigate>}/>
  <Route path='/Contact' element={<Contact></Contact>}/>
  <Route path='/404' element={<NotFound></NotFound>}/>
  <Route path='/Signin' element={isLoggedin?<Navigate to='/Home'></Navigate>:<Signin></Signin>}/>
  <Route path='/User' element={<User></User>}/>
  <Route path='/Login' element={<Login></Login>}/>
  <Route path='*' element={<Navigate to='/404'></Navigate>}/>
  <Route path='/Prog1' element={<Prog1></Prog1>}/>



</Routes>

    
    
    
    </div>
    </>
  );
}

export default App;
