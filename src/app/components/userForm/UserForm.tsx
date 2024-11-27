/** @format */

'use client'

import { useEffect, useState } from 'react'
import { ModalLayout } from '../modalLayout/modalLayout'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { useStateContext } from '@/app/context/formContext'

export const UserForm = () => {
  const [modalShow, setModalShow] = useState(true)
  const { userData } = useStateContext()

  const [formData, setFormData] = useState({
    name: '',
    job: ''
  })

  useEffect(() => {
    if (userData) {
      console.log(userData, 'userData')
      setFormData({ ...formData, name: userData.first_name })
    }
  }, [userData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const saveUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, job } = formData

    if (!name.trim() || !job.trim()) {
      alert('Please fill out all fields.')
      return
    }

    console.log({ name, job })

    alert(`User saved: Name: ${name}, Job: ${job}`)
    setModalShow(false)
  }

  return (
    <>
      <ModalLayout
        title='Add User'
        modalShow={modalShow}
        onClose={setModalShow}
      >
        <Form onSubmit={saveUser}>
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
