import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    
    state = {
        credentials: {
            username: '',
            password: '',
        }, 
        error: '',
    }

    changeHandler = (evt) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [evt.target.name]: evt.target.value,
            },
            error: '',
        });
    };

    submitHandler = (evt) => {
        evt.preventDefault();
        axiosWithAuth() 
            .post('/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/FriendsList')
            })
            .catch(err => {
                this.setState({
                    error: err.response.data.error,            
                })
            })
    }

    render() {
        return (
            <div className='sign-in-form'>
                <form onSubmit={this.submitHandler}>
                    <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.credentials.username}
                    onChange={this.changeHandler}
                    className='sign-input'
                    />
                    <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.credentials.password}
                    onChange={this.changeHandler}
                    className='sign-input'
                    />
                <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;