import './style.css';

export default function CadastroInput({ name, required }) {
  return (
    <div className="aluno-input">
      <p>{name}</p>
      <input
        required={required}
        type="text"
      />
    </div>
  );
}
