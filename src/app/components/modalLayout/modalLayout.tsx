
'use client'

import {useState,useEffect, Children} from 'react'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from "./UserDetail.module.css";
import { User } from '@/app/types/user';
import { modalLayout } from './modalLayout';

type props = {
  onSuccess?:(event: React.FormEvent<HTMLFormElement>)=> void;
  onClose:(condition:boolean)=>void;
  title:string;
  modalShow:boolean;
  children: React.ReactNode

}
export const ModalLayout = ({onSuccess,onClose,title,children,modalShow}:props) => {
  
  
  return (
    <>
    <Modal
    show={modalShow}
    onHide={()=>{ onClose(false)}}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
    <Modal.Footer>
      {/* {onSuccess && <Button onClick={()=>{ onSuccess()}}>save</Button>}
      <Button onClick={()=>{ onClose(false)}}>Close</Button> */}
    </Modal.Footer>
  </Modal>
  </>
  )
}

