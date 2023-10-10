import React from 'react'
import '../App.css'
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

  const handleLogin = (response) => {
    if (response.status === 'connected') {
      // The user is logged in with Facebook.
      const { accessToken } = response.authResponse;

      // You can now perform actions with the access token,
      // such as fetching user data or making API requests.

      // For example, you can fetch the user's name and email:
      fetch('https://graph.facebook.com/me?fields=name,email', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('User Info:', data);
          // Redirect to the like page after successful login.
          navigate.push('/like');
        })
        .catch((error) => {
          console.error('Error fetching user info:', error);
        });
    } else {
      // Handle the case when the user cancels or encounters an error during login.
      console.log('Facebook login canceled or encountered an error.');
    }
  };


  return (
    <div className='home'>HomePage
    <h1>Facebook Login</h1>
      <FacebookLogin
        appId="684486596946256"
        onClick={handleLogin}
        fields="name,email,picture"
      />
    </div>
  )
}

export default HomePage