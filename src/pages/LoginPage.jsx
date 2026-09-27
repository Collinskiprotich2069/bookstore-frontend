function Login() {
  return (
    <>
      <form className="login" action="submit">
        <div className="username">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="email" >
          <label>Email</label>
          <input placeholder="e.g collins123@gmail.com" type="email" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="login-btn">login</button>
      </form>
    </>
  );
}

export default Login;
