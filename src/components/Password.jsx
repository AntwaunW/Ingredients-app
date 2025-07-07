import '../styles/login.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Password_login() {

   const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(prev => !prev);
  };

  return (
    <div className="password-input">
      <input
        className="Password_log"
        type={visible ? 'text' : 'password'}
        placeholder="Password"
      />
      <span className="eye-icon" onClick={toggleVisibility}>
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
      </span>
    </div>
  );
}

export default Password_login;