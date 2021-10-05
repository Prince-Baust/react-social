import FacebookLogin from 'react-facebook-login';
import {useState} from "react";

const Facebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState('');

  const componentClicked = () => console.log('Clicked!');
  const responseFacebook = (res) => {
    setIsLoggedIn(true);
    setUserID(res.id);
    setName(res.name);
    setEmail(res.email);
    setPicture(res.picture.data.url);
  }

let fbContent;
if (isLoggedIn) {
  fbContent = (
    <div style={{width: '400px',
    margin: 'auto',
    background: '#f4f4f',
    padding: '20px'}}>
      <img src={picture} alt={name}/>
      <h2>Welcome {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
} else {
  fbContent = (
    <FacebookLogin
    appId="215663660498963"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />);
}
  return fbContent;
}

export default Facebook;