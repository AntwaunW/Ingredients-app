import '../styles/login.scss';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import Email from '../components/Email';
import Password from "../components/Password";
import Submit from "../components/Submit";
import {useState, useEffect} from 'react';

function Login() {

  //code that lets users input email and store it. 
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const handleEmailChange = (value) => {
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  //allows users to put in password and ensure it meets character limit
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const validatePassword = (password) => password.length >= 8; // or any rule you want
    const handlePasswordChange = (value) => {
        setPassword(value);
        setIsPasswordValid(validatePassword(value));
  };

  //once submit is clicked email and password is validated and stored if remembered me is also checked. Also alerts if email and password meets standards
    const handleSubmit = () => {
      if (!isEmailValid || !isPasswordValid) {
        alert('Please enter a valid email and password (Min 8 chars).');
      } else {
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('email', email);
        } else {
          localStorage.removeItem('rememberMe');
          localStorage.removeItem('email');
        }

        alert(`Email submitted: ${email} \nPassword submitted: ${password}`);
      }

      //clears input fields after submit has been executed
      setEmail('');
      setPassword('');
      setIsEmailValid(false);
      setIsPasswordValid(false);
   };

    const [rememberMe, setRememberMe] = useState(false);
    

    const handleRememberMe = (event) => {
      const isChecked = event.target.checked;
      setRememberMe(isChecked)
    };

    const [forgotPassword, setForgotPassword] = useState(false);
    

    const handleForgotPassword = (event) => {
      const isChecked = event.target.checked;
      setForgotPassword(isChecked)
    };

      //code that stores email for next login if remember me has been checked
    useEffect(() => {
      const remembered = localStorage.getItem('rememberMe') === 'true';
      const savedEmail = localStorage.getItem('email');

      if (remembered && savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    }, []);
    
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
            <input type="checkbox" checked={rememberMe} onChange={handleRememberMe}/>
            <label className="remember" htmlFor="Remember_Me">Remember Me</label>
            <input type="checkbox" checked={forgotPassword} onChange={handleForgotPassword} />
            <label className="remember" htmlFor="Forgot_password">Forgot Password</label>
        </div> 
    </div>
    )
  
};

export default Login;