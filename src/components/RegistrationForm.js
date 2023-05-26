import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 import { useState } from "react";
 import axios from 'axios';
//  import { Link } from "react-router-dom";
import jwt from 'jwt-decode' // import dependency
import { Link } from "react-router-dom";
export default function Example() {

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

    // Perform registration logic here
    const userData = {
      username,
      email,
      password
    };

    // Send userData to the backend for registration
    axios
      .post('http://localhost:4000/Register', userData)
      .then(response => {
        console.log(response.data);
        const token = response.data.token;
         const user = jwt(token); // decode your token here
        // Handle the response from the server
        localStorage.setItem("auth", JSON.stringify(user));
        location.replace("/Login")
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occur during the request
      });

    // Clear the form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };





  return (

    <div className="SignUpContainer">
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name"
            value={username}
            onChange={handleUsernameChange}
          />
          <Input size="lg" label="Email" 
            value={email}
            onChange={handleEmailChange}
          
          />
          <Input type="password" size="lg" label="Password"
          
          value={password}
          onChange={handlePasswordChange}
          />
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the terms and conditions
      
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to="/Login"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
  );
}