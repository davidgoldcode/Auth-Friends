import React from 'react';

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

    render() {
        return (
            <form>
                <input
                type='text'
                name='username'
                placeholder='Username'
                value={this.state.credentials.username} 
                onChange={this.changeHandler}
                />
                <input 
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.credentials.password}
                onChange={this.changeHandler}
                />
                <button>Log In</button>
            </form>
        );
    }
}

export default Login;