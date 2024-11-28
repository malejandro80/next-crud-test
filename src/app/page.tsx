/** @format */

'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { MainTable } from './components/table/MainTable'
import { UserDetail } from './components/userDetail/UserDetail'
import { UserForm } from './components/userForm/UserForm'
import { StateProvider } from './context/formContext'
import { useUser } from './hooks/useUser'

export default function Home() {
  const { users, deleteUser, selectUser, selectedUser } = useUser()

  return (
    <StateProvider>
      <Container fluid='md'>
        <UserForm />

        <Row>
          <MainTable
            users={users}
            deleteUser={deleteUser}
            selectUser={selectUser}
          />
        </Row>
        <UserDetail selectedUser={selectedUser} />
      </Container>
    </StateProvider>
  )
}
