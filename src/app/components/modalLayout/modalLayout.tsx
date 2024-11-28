/** @format */

'use client'

import Modal from 'react-bootstrap/Modal'

type props = {
  onClose: (condition: boolean) => void
  title: string
  modalShow: boolean
  children: React.ReactNode
}
export const ModalLayout = ({ onClose, title, children, modalShow }: props) => {
  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => {
          onClose(false)
        }}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  )
}
