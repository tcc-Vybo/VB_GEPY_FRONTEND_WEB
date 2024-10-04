import './style.css';

export default function Login() {
  return (
    <div className="login-container">
      <form
        action=""
        className="login-form"
      >
        <h1>Acesso</h1>
        <label>Usuário</label>
        <input
          type="text"
          name="usuario"
        />
        <label>Senha</label>
        <input
          type="password"
          name="senha"
        />
        <span>Esqueceu sua senha?</span>
        <button type="button">Entrar</button>
      </form>
    </div>
  );
}
