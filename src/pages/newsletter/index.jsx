import "./style.css";
import React, { useState } from "react";
import { CustomTextField } from "../../components/textFields/customTextField";

export default function Newsletter() {
  // states para gerenciar os valores dos inputs
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  // Função para selecionar imagem
  const handleImageSelection = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Cria uma URL temporária para a imagem (ver com Gusta forma mais sólida de guardar imagem)
    }
  };

  return (
    <div className="newsletter-partner-container">
      
      {/* Formulário de criação da newsletter */}
           
      <div className="newsletter-form-left"> {/* Divisão criada para diferenciação de lado de containers */}

        <h1 className="newsletter-title">Nova notícia</h1>

        <CustomTextField
          label="Título"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          slotProps={{
            htmlInput: {
              maxLength: 30, // Definindo o limite de caracteres
            },
          }}
        />

        <CustomTextField
          label="subtítulo"
          type="text"
          value={subtitle}
          multiline
          onChange={(e) => setSubtitle(e.target.value)}
          slotProps={{
            htmlInput: {
              maxLength: 100, // Definindo o limite de caracteres
            },
          }}
        />

        <CustomTextField
          label="texto"
          value={text}
          onChange={(e) => setText(e.target.value)}
          slotProps={{
            htmlInput: {
              maxLength: 400, // Definindo o limite de caracteres
            },
          }}
          variant="outlined"
          multiline //define a permissão de mais de uma linha
          maxRows={10} //define a quantidade de linhas permitidas
        />

        <input
          type="file"
          className="newsletter-button"
          onChange={handleImageSelection}
        />

      </div>

      {/* Pré-visualização da newsletter */}    

      <div className="newsletter-preview-right"> {/* // Divisão de containers - direita */}

        {/* Título fora da pré visualização */}

        <h2 className="newsletter-title">Pré-visualização</h2>

        {/* Início do container de pré visuailização   */}

        <div className="newsletter-preview-finish">

          <h1 className="newsletter-title">Novas notícias</h1>

          {/* Primeiro Card e/ou primeira notícia  */}

          <div className="newsletter-card">

            {image && <img src={image} className="newsletter-image" alt="preview" />} {/* Exibe a imagem selecionada*/}
            
            {/* Divisão criada para estilização e mudança de sentido (esquerda) do conteúdo do Card */}
            
            <div className="newsletter-preview-text-one">
            
              <h1 className="newsletter-title-preview">{title}</h1>
             
                <p className="newsletter-subtitle-preview">{subtitle}</p>

            </div>

          </div>

          {/* Segundo Card e/ou segunda notícia */}

          <div className="newsletter-card">
                        
          {/* Divisão criada para estilização e mudança de sentido (direita) do conteúdo do Card            */}
            
            <div className="newsletter-preview-text-two">

              <h1 className="newsletter-title-preview">{title}</h1>
              
                <p className="newsletter-subtitle-preview">{subtitle}</p> 

            </div>

            {image && <img src={image} className="newsletter-image-two" alt="preview" />}

          </div>

        </div>
      </div>
    </div>
  );
}