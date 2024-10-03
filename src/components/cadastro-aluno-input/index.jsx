import './style.css';

function CadastroAlunoInput({ name }) {
  return (
    <div className="aluno-input">
      <p>{name}</p>
      <input type="text" />
    </div>
  );
}

export default CadastroAlunoInput;
