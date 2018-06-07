import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

import { logIn, register, returningUser, logOut } from '../../actions/userActions';

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

  logOut = () => {
    window.localStorage.removeItem('user')
    this.props.dispatch(logOut());
  }

  register = (e) => {
  e.preventDefault();
  console.log(process.env);
  console.log(window.location.origin);
  const registration = {
    first_name: document.getElementById('firstName').value,
    last_name: document.getElementById('lastName').value,
    birthdate: document.getElementById('birthdate').value,
    email: document.getElementById('email').value,
    pass: document.getElementById('password').value,
    passConf: document.getElementById('passwordConf').value,
  }
  axios.post(`http://localhost:3000/user/register`, { registration })
    .then(res => {
      console.log(res);
      if (res.data.success == true) {
        window.localStorage.setItem('user', res.data.user);
        this.props.dispatch(register(res.data));
        this.setState({registerModal: false});
      }
    })
  }

  login = (e) => {
    e.preventDefault();
    const loginData = {
      email: document.getElementById('loginEmail').value,
      password: document.getElementById('loginPassword').value,
    }
    axios.post(`http://localhost:3000/user/login`, { loginData })
      .then(res => {
        console.log(res);
        if (res.data.success == true) {
          window.localStorage.setItem('user', res.data.user);
          this.props.dispatch(logIn(res.data));
          this.setState({loginModal: false});
        }
      })
  }

  componentDidMount() {
    if (window.localStorage.user) {
      this.props.dispatch(returningUser({user: window.localStorage.user}));
    }
  }

  render() {
    return (
      <div className="navBar">
        <LoginModal toggle={this.toggleLoginModal} modal={this.state.loginModal} login={this.login}/>
        <RegisterModal toggle={this.toggleRegisterModal} modal={this.state.registerModal} register={this.register}/>
        <h3>WikiMaps</h3>
        { !this.props.user.loggedIn ?
        <div>
            <Button color="success" onClick={this.toggleLoginModal}>Login</Button>
            <Button color="success" onClick={this.toggleRegisterModal}>Register</Button>
        </div>
        :
        <div>
            <Button color="success" onClick={this.logOut}>Log Out</Button>
        </div>
        }
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