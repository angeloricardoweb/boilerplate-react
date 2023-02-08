import React from 'react';
import useUserStore from '../../stores/user';
import UserRemove from './UserRemove';

export default function UserList() {
  const users = useUserStore((state) => state.users);

  return (
    <div>
      <h2>Listagem de usuários</h2>
      {
        users?.map((user) => (
          <div key={user.id} className="flex items-center gap-4">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <UserRemove id={user.id} />
          </div>
        ))
      }
    </div>
  );
}
