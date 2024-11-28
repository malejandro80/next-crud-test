/** @format */

'use client'

import { CONFIRM_DELETE, USER_DELETED } from '@/app/constants'
import { useStateContext } from '@/app/context/formContext'
import { deleteUser } from '@/app/services/user.service'
import { User } from '@/app/types/user'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'

type Props = {
  users: User[] | null
  selectUser: (id: number) => void
}

export const MainTable = ({ users, selectUser }: Props) => {
  const { setUserData, setIsFormOpen, setNotification } = useStateContext()

  const handleDelete = (e: React.MouseEvent, userId: number) => {
    e.stopPropagation()
    const confirmed = window.confirm(CONFIRM_DELETE)
    if (confirmed) {
      deleteUser(userId)
      setNotification(USER_DELETED)
      setTimeout(() => {
        setNotification(null)
      }, 2000)
    }
  }

  return (
    <>
      <Button
        className='mt-4'
        type='button'
        onClick={() => {
          setIsFormOpen(true)
        }}
      >
        add new
      </Button>
      <Table striped bordered hover className='mt-5'>
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
                  <Button
                    variant='danger'
                    onClick={e => handleDelete(e, user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  )
}
