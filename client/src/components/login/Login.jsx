import  { useState } from 'react';
import "./login.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit =  async (event) => {

    event.preventDefault();
    try{
       await fetch("http://localhost:8080/login",
       {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({username,password})
      })
        .then(res =>{
          if(res.status == 200){
              // let token = res.data.token
              // console.log(token);
              window.location.href = `http://127.0.0.1:5173/logged/success`
            }else{
              console.log('error in redirection');
              window.location.href = 'http://127.0.0.1:5173/error'
          }
          
        }) 
    }catch(e){
      console.log(e);
    }
    setUsername('');
    setPassword('');
  };



  return (
    <div className="login-container p-3" >
    <h1 className='display-3'>Login</h1>
      <form onSubmit={handleSubmit} className='form'>
      <div className='form-element form-group' >
        <label htmlFor="username">Username:</label>
        <input
        className='form-control'
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div className='form-element form-group'>
        <label htmlFor="password">Password:</label>
        <input
          className='form-control'
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className='buttons'>
      <button type="submit" className='btn btn-primary'>Login</button>

      <button  className='btn btn-primary'><a href='/signin' id='signin'>SignUp</a></button>
      </div>
      </form>
    </div>
  )
}

export default Login
