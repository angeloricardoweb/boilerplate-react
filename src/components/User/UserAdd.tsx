import React from 'react';
import useUserStore from '../../stores/user';

export default function UserAdd() {
  const addUser = useUserStore(state => state.addUsers)

  function handleAddUser(e: React.FormEvent) {
    e.preventDefault();
    addUser({
      name: (e.target as HTMLFormElement)._name.value,
      email: (e.target as HTMLFormElement).email.value,
      id: Math.random()
    })
  }

  return (
    <div>
      <h2>Add usuário</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="_name" />
        <input type="text" name="email" />
        <button type="submit">Adicionar usuário</button>
      </form>
    </div>
  );
}
