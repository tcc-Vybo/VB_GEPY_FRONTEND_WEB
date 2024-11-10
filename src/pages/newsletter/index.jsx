import "./style.css";
import Sedutor from "../../assets/sedutores.png";
import Uniforme from "../../assets/uniforme.png";

export default function Newsletter() {
  return (
    <div className="newsletter-partner-container">
      <div className="newsletter-form-left">
        <h1 className="newsletter-title">Nova notícia</h1>

        <label>Título</label>
        <input type="text" className="newsletter-input"></input>

        <label>Subtítulo</label>
        <input type="text" className="newsletter-input"></input>

        <label>Texto</label>
        <input type="text" className="newsletter-input-text"></input>

        <button className="newsletter-button">Selecionar imagem</button>
      </div>

      <div className="newsletter-preview-right">
        <h2>Pré Visualização</h2>
        <div className="newsletter-preview-finish">
          <h1 className="newsletter-title">Novas notícias</h1>
          <div className="newsletter-news">
            <img src={Sedutor} className="newsletter-image"></img>
            <div className="newsletter-preview-text-one">
              <h1>Cuidado com os sedutores da internet</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur a laudantium delectus, inventore laborum recusandae
                blanditiis illum sequi consequatur quia impedit ex dolor, odit
                voluptate exercitationem placeat nobis, dolore deleniti!
              </p>
            </div>
          </div>

          <div className="newsletter-news">
            <div className="newsletter-preview-text-two">
              <h1>Novos uniformes disponíveis</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur a laudantium delectus, inventore laborum recusandae
                blanditiis illum sequi consequatur quia impedit ex dolor, odit
                voluptate exercitationem placeat nobis, dolore deleniti!
              </p>
            </div>
            <img src={Uniforme} className="newsletter-image"></img>
          </div>
        </div>
      </div>
    </div>
  );
}