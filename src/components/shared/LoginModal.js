import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginModal = props => (
  <div>
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <Form>
        <ModalHeader toggle={props.toggle}>Login</ModalHeader>
        <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="loginEmail"/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="loginPassword"/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.login}>Login</Button>{' '}
          <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  </div>
)

export default LoginModal;