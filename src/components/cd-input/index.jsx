import './style.css';

export default function CadastroInput({ name }) {
  return (
    <div className="aluno-input">
      <p>{name}</p>
      <input type="text" />
    </div>
  );
}
