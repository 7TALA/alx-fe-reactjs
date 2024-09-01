import React, { useState } from 'react'

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({username: '', email: '', password: ''})

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const validateForm = () => {
        const newErrors = {};
    
        if (!username) {
          newErrors.username = 'Username is required';
        }
    
        if (!email) {
          newErrors.email = 'Email is required';
        }
    
        if (!password) {
          newErrors.password = 'Password is required';
        }
    
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        if( username.length > 0 && email.length > 0 && password.length > 0) {
            console.log('Form Submitted:', { username, email, password });
        } else if (!username && !email && !password){
            console.log('All input fields are empty');
        }
            
        }
        

  return (
    <>
        <form onSubmit={handleSubmit}
        style={{
            display: "flex", 
            flexDirection: "column",
            gap: "2rem"   
        }}>
            <h2> User Registration Form</h2>
            <input 
            type="text" 
            name="username" 
            value={username}
            placeholder="Enter Username"
            onChange={handleUsernameChange}
            />
            {!username ? <div>{errors.username}</div> : null}
            <input 
            type="email" 
            name="email" 
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
            />

            <input 
            type="password" 
            name="password" 
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            />

            <button type="submit">Submit</button>
            
        </form>
            <div style = {{
                display: "block",
                textAlign: "left",
                marginTop: "2rem"
            }}>
            <p>Username is : {username}</p>
            <p>Email is : {email}</p>
            <p>password is : {password}</p>
            </div>
            
        
    </>
  )
}

export default RegistrationForm;