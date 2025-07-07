import '../styles/login.scss';
import Header from '../components/Header';
import Background from '../components/Background';
import Footer from '../components/Footer';
import Email from '../components/Email';
import Password from "../components/Password";
import Submit from "../components/Submit";

function Login() {

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
            <Email />
            <Password />
            </div>
            <Submit />
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