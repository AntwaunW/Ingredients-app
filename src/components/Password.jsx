import '../styles/login.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Password_login({password, onPasswordChange}) {

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
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <button className="eye-icon" onClick={toggleVisibility}>
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
      </button>
    </div>
  );
}

export default Password_login;