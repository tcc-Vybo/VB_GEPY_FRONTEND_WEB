import "./style.css";
import Logo from "../../assets/Logo.png"

export default function ErrorPage() {
  return (
    <div className="error-page-message">
      <img className="logo-error-page" src={Logo}/>
      <h1>Puuuuuuuuuuuxa, não foi dessa vez que você conseguiu.</h1>
      <br />
      <p>Mas não desista!</p>
      <p>Ligue somente durante o programa, tá?</p>
      <br />
      <h1>VALEU</h1>
    </div>
  );
}
