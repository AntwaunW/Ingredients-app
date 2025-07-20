import '../styles/signup.scss';
import Background from '../components/Background';
import Footer from '../components/Footer';
import {useState, useEffect} from 'react';             


function SignUp(){

    //LOCAL STORAGE FOR USER SIGN UP INPUT
    //STATE FOR REGISTRATION
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');

    //FUNCTION THAT ENSURES FIRST, LAST NAME AND EMAIL FILEDS ARE FILLED IN AND CHECKED WHEN FORM IS SUBMITTED
    const handleSignUp = () => { 
        if (firstName.trim() === '' || lastName.trim() === '' || signUpEmail.trim() === '') {  //.trim clears out white space entered in the text boxes. Where the original if statement my not track it the same way and may think the fild is empty.
            alert('Please fill in first and last name, as well as email.');
            return;
  }

  alert(`Welcome, ${firstName} ${lastName}!`);

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
                        
                        <input className="signUpPassword" type="text" placeholder="Password" />
                            <label htmlFor="Password"></label>
                        
                        <input className="ConfirmPass" type="text" placeholder="Confirm Password" />
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
        add function to sign up button that allowas users to save info and get directed to the select items page to get started
        add toggle switch from password being able to be seen and unseen when being entered OR add password component
*/
