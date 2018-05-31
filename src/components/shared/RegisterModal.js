import React from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RegisterModal = props => (
  <div>
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <Form id='registerForm'>
        <ModalHeader toggle={props.toggle}>Register</ModalHeader>
        <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">First Name</Label>
              <Input type="text" name="firstName" id="firstName"/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Last Name</Label>
              <Input type="email" name="lastName" id="lastName"/>
            </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Birthdate</Label>
                <Input type="date" name="birthdate" id="birthdate" placeholder="birthdate"/>
              </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email"/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="password"/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Confrim Password</Label>
              <Input type="password" name="passwordConf" id="passwordConf"/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={props.register}>Register</Button>{' '}
          <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
      </Form>
    </Modal>
  </div>
)

export default RegisterModal;