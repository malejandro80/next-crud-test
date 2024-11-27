
'use client'

import {useState,useEffect} from 'react'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from "./UserDetail.module.css";
import { User } from '@/app/types/user';
import { ModalLayout } from '../modalLayout/modalLayout';

type props = {selectedUser:User}
export const UserDetail = ({selectedUser}:props) => {
  
  console.log(selectedUser,'selectedUser')

  const [modalShow, setModalShow] = useState(false);
  
  useEffect(() => {
    if(selectedUser){
      setModalShow(true)
    }
  }, [selectedUser])

  
  
  return (
    <>
    <ModalLayout title='user detail' modalShow={modalShow} onClose={setModalShow}>
      {selectedUser && <>
        <div className={style.userInfo}>
        <Image src={selectedUser.avatar} alt="" roundedCircle />
        <h4>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h4>
        </div>
        <div className={style.userInfo}>
          <h6>email:</h6>
          <p>{selectedUser.email}</p>
        </div>
      </>}
    </ModalLayout>
  </>
  )
}

