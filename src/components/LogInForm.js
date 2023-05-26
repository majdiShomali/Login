import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   import { useState } from "react";
  export default function Example() {
let user ={}
    if(localStorage.auth != null){
user = JSON.stringify(localStorage.auth)
    }
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let x=JSON.parse(localStorage.auth)
       console.log(x)
      // Perform registration logic here
      const userData = {
        username,
        email,
        password
      };
      event.preventDefault();
      let user=JSON.parse(localStorage.auth)
      
if(user.email==email && user.password==password){
alert("welcome")
}else{
  alert("please enter a valid email and password")
  console.log()
}
      // Clear the form fields
      // setUsername(user.username);
      // setEmail(user.password);
      // setPassword(user.email);

  
      // Clear the form fields
      setUsername('');
      setEmail('');
      setPassword('');
    };
  
  
  
  
  
    return (
  
      <div className="SignUpContainer">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
         
            <Input size="lg" label="Email" 
              value={email}
              onChange={handleEmailChange}
            
            />
            <Input type="password" size="lg" label="Password"
            
            value={password}
            onChange={handlePasswordChange}
            />
          </div>
        
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
      
        </form>
      </Card>
      </div>
    );
  }