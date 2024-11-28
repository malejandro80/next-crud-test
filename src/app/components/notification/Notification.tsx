/** @format */

import { useStateContext } from '@/app/context/formContext'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

export const Notification = () => {
  const { notification } = useStateContext()
  return (
    <ToastContainer className='position-static'>
      <Toast>
        <Toast.Header>
          <strong className='me-auto'>Notification</strong>
        </Toast.Header>
        <Toast.Body>{notification}.</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}
