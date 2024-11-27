/** @format */

'use client'
import { MainTable } from './components/table/MainTable'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserDetail } from './components/userDetail/UserDetail'
import { Button, Col } from 'react-bootstrap'
import { useUser } from './hooks/useUser'
import { UserForm } from './components/userForm/UserForm'
import { useState } from 'react'
import useForm from './hooks/useForm'
import { StateProvider } from './context/formContext'

export default function Home() {
  const { users, deleteUser, selectUser, selectedUser } = useUser()
  return (
    <StateProvider>
      <Container fluid='md'>
        <UserForm />
        <Row>
          <Col>User List</Col>
          <Col>
            <Button type='button'>Save</Button>
          </Col>
        </Row>
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
