import '../styles/login.scss';

function Email_login() {

    return (
        <div className="Email">
            <label  htmlFor="Email"></label>
            <input className="Email_input" type="email" placeholder="example@gmail.com" />
        </div>
    )
}

export default Email_login;