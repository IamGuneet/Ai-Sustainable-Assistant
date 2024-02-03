import  { useState } from 'react';
import "./signin.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setUsermail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlemailChange = (event) => {
    setUsermail(event.target.value);
  };
  const handleSubmit =  async (event) => {

    event.preventDefault();
    try{
       await fetch("http://localhost:8080/signUp",
       {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({username,password,email})
      })
        .then(res =>{
          if(res.status == 200){
            console.log(res.json());
            window.location.href = 'http://127.0.0.1:5173/signUp/success'
          }else{
            console.log('error in redirection');
            window.location.href = 'http://127.0.0.1:5173/logged/bad'
          }
          
        }) 
    }catch(e){
      console.log(e);
    }
    // console.log('Username:', username);
    // console.log('Password:', password);
    setUsername('');
    setPassword('');
    setUsermail('');
  };



  return (
    <div className="login-container p-3" >
    <h1 className='display-3'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='form'>
      <div className='form-element form-group' >
        <label htmlFor="username">Username:</label>
        <input
        className='form-control input'
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div className='form-element form-group' >
        <label htmlFor="username">Email:</label>
        <input
        className='form-control input'
          type="email"
          id="email"
          value={email}
          onChange={handlemailChange}
          required
        />
      </div>
      <div className='form-element form-group'>
        <label htmlFor="password">Password:</label>
        <input
          className='form-control input'
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className='form-element form-group'>
        <label htmlFor="password">Confirm Password:</label>
        <input
        
          className='form-control input'
          type="password"
          id="confirm password"
        //   value={password}
        //   onChange={handlePasswordChange}
          required
          
        />
      </div>
      <button type="submit" className='btn btn-primary'>SignUp</button>
      </form>
    </div>
  )
}

export default Login
