import React from 'react'
import {useDispatch} from 'react-redux'
import {login, logout} from '../features/user'
function Login() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => 
            (dispatch(login({name : "Kris", age : 20, email : "kiki@gmail.com"})))}>
                         Login
      <p>Kada god se klikne na dugme  ispunice se value 
        of state 
        behind the scenes
        name : "Kris", age : 20, email : "kiki@gmail.com"
      </p>
        </button>
        <button onClick={() => 
            (
              dispatch(logout())
              )}>Logout</button>
    </div>
  )
}

export default Login