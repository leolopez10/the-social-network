import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'


const Register = ({ setAlert, register }) => { //setAlert is destructred from props (i.e. props.setAlert())

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value })

    const onSubmit = async event => {
        event.preventDefault();
        if (password !== password2) {
            // console.log('Passwords do match');
            setAlert('Passwords do not match', 'danger');
        } else {
            // console.log(formData);
            // console.log('Success')
            register({ name, email, password })

            // Moved all this code to the actions folder
            // const newUser = {
            //     name,
            //     email,
            //     password
            // }

            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     }
            //     const body = JSON.stringify(newUser);

            //     const response = await axios.post('/api/users', body, config);
            //     console.log(response.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }
        }
    }



    return (
        <Fragment>
            <h1 className='large text-primary'>Sign Up</h1>
            <p className='lead'><i className='fas fa-user'></i> Create Your Account</p>
            <form className='form' onSubmit={event => onSubmit(event)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={event => onChange(event)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={event => onChange(event)}
                        required
                    />
                    <small className='form-text'
                    >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
                    >
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={event => onChange(event)}
                        minLength='6'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={event => onChange(event)}
                        minLength='6'
                    />
                </div>
                <input type='submit' className='btn btn-primary' value='Register' />
            </form>
            <p className='my-1'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>

        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);