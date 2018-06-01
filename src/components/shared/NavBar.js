import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

import { logIn, register } from '../../actions/userActions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      registerModal: false
    }
  }

  toggleLoginModal =() => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  toggleRegisterModal = () => {
    this.setState({
      registerModal: !this.state.registerModal
    });
  }

  register = (e) => {
  e.preventDefault();
  console.log(process.env);
  console.log(window.location.origin);
  const registration = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    birthdate: document.getElementById('birthdate').value,
    email: document.getElementById('email').value,
    pass: document.getElementById('password').value,
    passConf: document.getElementById('passwordConf').value,
  }
  axios.post(`http://localhost:3000/user/register`, { registration })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    console.log(registration);
    console.log("DISPATCH TIME");
    console.log(this.props.dispatch(register(registration)));
  }

  login = (e) => {
    e.preventDefault();
    const login = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value,
    }
    console.log(login);
  }


  render() {
    return (
      <div className="navBar">
        <LoginModal toggle={this.toggleLoginModal} modal={this.state.loginModal} login={this.login}/>
        <RegisterModal toggle={this.toggleRegisterModal} modal={this.state.registerModal} register={this.register}/>
        <h3>WikiMaps</h3>
        <div>
          <Button color="success" onClick={this.toggleLoginModal}>Login</Button>{' '}
          <Button color="success" onClick={this.toggleRegisterModal}>Register</Button>{' '}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(NavBar);