/** @format */

'use client'

import { User } from '@/app/types/user'
import { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { ModalLayout } from '../modalLayout/modalLayout'
import style from './UserDetail.module.css'

type props = { selectedUser: User[] | null }
export const UserDetail = ({ selectedUser }: props) => {
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    if (selectedUser) {
      setModalShow(true)
    }
  }, [selectedUser])

  return (
    <>
      <ModalLayout
        title='user detail'
        modalShow={modalShow}
        onClose={setModalShow}
      >
        {selectedUser && (
          <>
            <div className={style.userInfo}>
              <Image src={selectedUser.avatar} alt='' roundedCircle />
              <h4>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h4>
            </div>
            <div className={style.userInfo}>
              <h6>email:</h6>
              <p>{selectedUser.email}</p>
            </div>
          </>
        )}
      </ModalLayout>
    </>
  )
}
