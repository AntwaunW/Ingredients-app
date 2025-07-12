import '../styles/signup.scss';
import Background from '../components/Background';
import Footer from '../components/Footer';


function SignUp(){
    return(
        <>
            <div className="signUpPg" >
                <h1 className="SignUpTitle">Sign Up</h1>
                    <div className="SignUpForm">
                        <input className="FN" type="text" placeholder="First Name" />
                            <label htmlFor="First Name"></label>
                        <input className="LN" type="text" placeholder="Last Name" />
                            <label htmlFor="Last Name"></label>
                        <input className="signUpEmail" type="text" placeholder="Email" />
                            <label htmlFor="Email"></label>
                        <input className="signUpPassword" type="text" placeholder="Password" />
                            <label htmlFor="Password"></label>
                        <input className="ConfirmPass" type="text" placeholder="Confirm Password" />
                            <label htmlFor="Confirm Password"></label>

                        <button className="signUpBtn" >Sign Up</button>
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
TODO: store users inputs from the sign up fields.
      validate users password and confirm passwords as well as store it when backend is created
      add function to sign up button that allowas users to save info and get directed to the select items page to get started
*/