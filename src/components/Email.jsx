import '../styles/login.scss';

function Email_login({email, onEmailChange}) {


    return (
        <div className="Email">
            <label  htmlFor="Email"></label>
            <input value={email} onChange={(e) => onEmailChange(e.target.value)} className="Email_input" type="email" placeholder="example@gmail.com" />
        </div>
    )
}

export default Email_login;