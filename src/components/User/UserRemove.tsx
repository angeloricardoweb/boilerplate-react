import React from 'react'
import useUserStore from '../../stores/user'

export default function UserRemove({ id }: { id: number }) {
  const removeUser = useUserStore(state => state.removeUser)
  return (
    <button className='btn btn-error' onClick={() => removeUser(id)}>Remover</button>
  )
}
