import '../styles/LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <img src="/form-logo.png" alt="Medi-Caps Form Logo" className="form-logo" />
      <p>20th K.M. Baroli, Indore | Medi-Caps University, Indore</p>
      <form>
        <input type="text" placeholder="Login name" className="form-control" />
        <input type="password" placeholder="Password" className="form-control" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
