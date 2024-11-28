/** @format */

'use client'

import { useStateContext } from '@/app/context/formContext'
import useForm from '@/app/hooks/useForm'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { ModalLayout } from '../modalLayout/modalLayout'
import { Notification } from '../notification/Notification'

export const UserForm = () => {
  const { isFormOpen, setIsFormOpen, setUserData, notification } =
    useStateContext()

  const { handleUser, handleChange, formData } = useForm()

  return (
    <>
      {notification && <Notification />}
      <ModalLayout
        title='Add User'
        modalShow={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setUserData(null)
        }}
      >
        <Form onSubmit={handleUser}>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Jhon'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Job</Form.Label>
            <Form.Control
              type='text'
              placeholder='Doctor'
              name='job'
              value={formData.job}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type='submit'>Save</Button>
        </Form>
      </ModalLayout>
    </>
  )
}
