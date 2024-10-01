import './style.css';

function Login() {
  return (
    <div className='login-container'>
      <form action=''>
        <h1>Login de Usuários</h1>
        <input
          type='text'
          name='usuario'
        />
        <input
          type='password'
          name='senha'
        />
        <button type='button'>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
