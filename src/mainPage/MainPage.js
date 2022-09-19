import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNameAction, createUserAction, deleteNameAction } from '../action/action';

function MainPage() {
  

    const dispatch = useDispatch();
    const name = useSelector(state => state.users.name)
    const users = useSelector(state => state.users.users)

    const createUser = () => {
        dispatch(createUserAction(name))
        dispatch(deleteNameAction(" "))
    }

    const changeInput = (e) => {
        dispatch(addNameAction(e.target.value))
    }

  return (
    <div>
        <div className='add'>
        <input className='inp' type="text" onChange={changeInput} value={name}/>
        <button className='btn' onClick={createUser}>OK</button>
        </div>

        <div>
            {users.map((user, id)=> <li className='none' key={id}>{user}</li>)}
            
        </div>
     
    </div>

   
  )
}

export default MainPage;