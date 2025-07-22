import '../styles/signup.scss';
import Background from '../components/Background';
import Footer from '../components/Footer';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp(){

    //LOCAL STORAGE FOR USER SIGN UP INPUT
    //STATE FOR REGISTRATION
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');

    //Variable for Navigates page to select ingredints page
    const navigate = useNavigate();

    //Show and Hide password
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    //FUNCTION THAT ENSURES FIRST, LAST NAME AND EMAIL FILEDS ARE FILLED IN AND CHECKED WHEN FORM IS SUBMITTED
    const handleSignUp = () => { 
        if (firstName.trim() === '' || lastName.trim() === '' || signUpEmail.trim() === '') {  //.trim clears out white space entered in the text boxes. Where the original if statement my not track it the same way and may think the fild is empty.
            alert('Please fill in first and last name, as well as email.');
            return;
        }

        alert(`Welcome, ${firstName} ${lastName}!`);

        if (handleSignUp) {
                navigate('/SelectIngredients');
        }

    //CLEARS INPUT FIELD AFTER SUBMIT
    setFirstName('');
    setLastName('');
    setSignUpEmail('');

};
    //CODE THAT HANDLES THE EMAIL STORING
    const handleEmail = (event) => {
        setSignUpEmail(event.target.value)
    }
     

    useEffect(() => {
        localStorage.setItem('firstName', firstName); //storimg the variable firstName as a string to be used in useEffect
        localStorage.setItem('lastName', lastName);
        localStorage.setItem("signUpEmail", signUpEmail)
    }, [firstName, lastName, signUpEmail]);

    return(
        <>
            <div className="signUpPg" >
                <h1 className="SignUpTitle">Sign Up</h1>
                    <div className="SignUpForm">
                        <input className="FN" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                            <label htmlFor="First Name"></label>
                        
                        <input className="LN" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                            <label htmlFor="Last Name"></label>
                        
                        <input className="signUpEmail" value={signUpEmail} onChange={handleEmail} type="text" placeholder="Email" />
                            <label htmlFor="Email"></label>
        
                        <input className="signUpPassword" 
                               type={showPassword ? 'text' : 'password'}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="Password" />
                            <span onClick={() => setShowPassword(prev => !prev)} className="eye-icon1">
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                                <label htmlFor="Password"></label>
                        
                        <input className="ConfirmPass" 
                               type={showConfirmPassword ? 'text' : 'password'}
                               value={confirmPassword}
                               onChange={(e) => setConfirmPassword(e.target.value)}
                               placeholder="Confirm Password" />
                            <span onClick={() => setShowConfirmPassword(prev => !prev)} className="eye-icon2">
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                                <label htmlFor="Confirm Password"></label>

                        <button className="signUpBtn" onClick={handleSignUp}>Sign Up</button>
                    </div>
                        <div className="signUpBackground"> 
                            <Background />
                        </div>
                        <div className="signUpFooter">
                            <Footer />
                        </div>
            </div>
        </>
    )
}

export default SignUp;


/*
TODO:   validate users password and confirm passwords as well as store it when backend is created
*/
