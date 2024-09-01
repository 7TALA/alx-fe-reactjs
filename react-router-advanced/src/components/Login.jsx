const Login = () => {
    const handleLogin = () => {
      // Simulate authentication
      fakeAuth.authenticate();
      // Redirect to profile page after authentication
      window.location.href = "/profile";
    };
  
    return (
      <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };