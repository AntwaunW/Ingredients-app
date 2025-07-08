import '../styles/login.scss';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import Email from '../components/Email';
import Password from "../components/Password";
import Submit from "../components/Submit";
import {useState} from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const handleEmailChange = (value) => {
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const validatePassword = (password) => password.length >= 8; // or any rule you want
    const handlePasswordChange = (value) => {
        setPassword(value);
        setIsPasswordValid(validatePassword(value));
  };

const handleSubmit = () => {
    if (!isEmailValid || !isPasswordValid) {
      alert('Please enter a valid email and password (Min 8 chars).');
    } else {
      alert(`Email submitted: ${email} \nPassword submitted: ${password}`);
    }
};

    return (
    <div className="login-pg">
        <div className="background">
            <Background />
        </div>
            <Header />
        <div className="footer">
            <Footer />
        </div>
            <>
            <h1 className="login_title">Login</h1>
            </> 
            <div className="login_info">
            <Email email={email} onEmailChange={handleEmailChange}/>
            <Password password={password} onPasswordChange={handlePasswordChange}/>
            </div>
            <Submit onClick={handleSubmit}/>
        <div className="Remember_forgot">
            <input type="checkbox" />
            <label className="remember" htmlFor="Remember_Me">Remember Me</label>
            <input type="checkbox" />
            <label className="remember" htmlFor="Forgot_password">Forgot Password</label>
        </div> 
    </div>
    )
  
};

export default Login;