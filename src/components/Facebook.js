import FacebookLogin from 'react-facebook-login';
import {useState} from "react";

const Facebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState('');

  const componentClicked = () => console.log('Clicked!');
  const responseFacebook = (res) => console.log(res);

let fbContent;
if (isLoggedIn) {
  fbContent = null;
} else {
  fbContent = (
    <FacebookLogin
    appId="257879462784452"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />);
}
  return fbContent;
}

export default Facebook;