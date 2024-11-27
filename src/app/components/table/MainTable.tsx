/** @format */

'use client'

import { useStateContext } from '@/app/context/formContext'
import { User } from '@/app/types/user'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

type props = { users: User[] | null; selectUser: (id: number) => void }

export const MainTable = ({ users, selectUser }: props) => {
  const { setUserData } = useStateContext()

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map(user => (
            <tr
              key={user.id}
              onClick={() => {
                selectUser(user.id)
              }}
            >
              <td>
                <Image src={user.avatar} roundedCircle />
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant='primary'
                  onClick={e => {
                    setUserData(user)
                    e.stopPropagation()
                  }}
                >
                  Update
                </Button>
                <Button variant='danger'>Delete</Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
