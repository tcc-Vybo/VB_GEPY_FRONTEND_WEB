import React, { useState } from 'react';
import './style.css';

export default function CadastrarAlunos() {

  const [stateStudentNewName, setStateStudentNewName] = useState("")
  const [stateStudentNewDtBorn, setStateStudentNewDtBorn] = useState("")
  const [stateStudentNewCityBorn, setStateStudentNewCityBorn] = useState("")
  const [stateStudentNewUFBorn, setStateStudentNewUFBorn] = useState("")
  const [stateStudentNewNacionality, setStateStudentNewNacionality] = useState("")
  const [stateStudentNewGender, setStateStudentNewGender] = useState("")
  const [stateStudentNewEthnicity, setStateStudentNewEthnicity] = useState("")
  const [stateStudentNewEspecialNeeds, setStateStudentNewEspecialNeeds] = useState("")
  const [stateStudentNewCEP, setStateStudentNewCEP] = useState("")
  const [stateStudentNewAddress, setStateStudentNewAddress] = useState("")
  const [stateStudentNewAddressNumber, setStateStudentNewAddressNumber] = useState("")
  const [stateStudentNewAddressComplement, setStateStudentNewAddressComplement] = useState("")
  const [stateStudentNewNeighborhood, setStateStudentNewNeighborhood] = useState("")
  const [stateStudentNewMunicipality, setStateStudentNewMunicipality] = useState("")
  const [stateStudentNewUF, setStateStudentNewUF] = useState("")
  const [stateStudentNewRG, setStateStudentNewRG] = useState("")
  const [stateStudentNewCPF, setStateStudentNewCPF] = useState("")
  const [stateStudentNewDtIssuance, setStateStudentNewDtIssuance] = useState("")
  const [stateStudentNewIssuingAuthority, setStateStudentNewIssuingAuthority] = useState("")
  const [stateStudentNewTelStudent, setStateStudentNewTelStudent] = useState("")
  const [stateStudentNewParentName, setStateStudentNewParentName] = useState("")
  const [stateStudentNewParentCPF, setStateStudentNewParentCPF] = useState("")
  const [stateStudentNewRelation, setStateStudentNewRelation] = useState("")
  const [stateStudentNewParentTel, setStateStudentNewParentTel] = useState("")
  
  
  const handleIsertNewStudent = async (e) => {
    e.preventDefault()

    const insertNewStudentUrl = `https://vb-gepy-backend-web.onrender.com/aluno`

    try {
      const response = await fetch(insertNewStudentUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeCompleto: stateStudentNewName,
          dataNascimento: stateStudentNewDtBorn,
          cidadeNascimento: stateStudentNewCityBorn,
          ufNascimento: stateStudentNewUFBorn,
          nacionalidade: stateStudentNewNacionality,
          genero: stateStudentNewGender,
          corRaca: stateStudentNewEthnicity,
          necessidades: stateStudentNewEspecialNeeds,
          cep: stateStudentNewCEP,
          endereco: stateStudentNewAddress,
          numeroEndereco: stateStudentNewAddressNumber,
          complemento: stateStudentNewAddressComplement,
          bairro: stateStudentNewNeighborhood,
          municipio: stateStudentNewMunicipality,
          uf: stateStudentNewUF,
          numeroRegistro: stateStudentNewRG,
          cpf: stateStudentNewCPF,
          dataEmissao: stateStudentNewDtIssuance,
          orgaoExpedidor: stateStudentNewIssuingAuthority,
          telefoneAluno: stateStudentNewTelStudent,
          nomeResponsavel: stateStudentNewParentName,
          cpfResponsavel: stateStudentNewParentCPF,
          relacao: stateStudentNewRelation,
          telefoneResponsavel: stateStudentNewParentTel,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (err) {
      console.error("ERROR FETCHING DATA:", err);
    }
  }



  return (
    <form className='container-alunos' onSubmit={handleIsertNewStudent} method='POST'>
      <div className='container-secundario'>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-um'>
            <p>Nome Completo</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewName(e.target.value)
              }}/>
          </div>
          <div className='input-cadastro tipo-dois  '>
            <p>Data de Nasc</p>
            <input type='text' 
              onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewDtBorn(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Cidade de Nasc</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewCityBorn(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>UF de Nasc</p>
            <input type='text' 
             onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewUFBorn(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='inputs-identificacao '>
          <div className='input-cadastro'>
            <p>Nacionalidade</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewNacionality(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Gênero</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewGender(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Cor/Raça</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewEthnicity(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Necessidades Especiais</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewEspecialNeeds(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-dois'>
            <p>CEP</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewCEP(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Endereço</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewAddress(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Nº</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewAddressNumber(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Complemento</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewAddressComplement(e.target.value)
              }}
              />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-um'>
            <p>Bairro</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewNeighborhood(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Município</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewMunicipality(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>UF</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewUF(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-dois'>
            <p>RG</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewRG(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>CPF</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewCPF(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Dt de Emissão</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewDtIssuance(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Orgão Expeditor</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewIssuingAuthority(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='inputs-identificacao'>
          <div className='input-cadastro tipo-dois'>
            <p>Tel. Aluno</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewTelStudent(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>Nome do Responsavel</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewParentName(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-um'>
            <p>CPF do Responsavel</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewParentCPF(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Relação</p>
            <input type='text' 
            onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewRelation(e.target.value)
              }}
            />
          </div>
          <div className='input-cadastro tipo-dois'>
            <p>Tel. Responsavel</p>
            <input type='text' onChange={(e) => {
              console.log(e.target.value)
              setStateStudentNewParentTel(e.target.value)
              }}/>
          </div>
        </div>
      </div>
      <div className='alunos-button'>
        <button>Voltar</button>
        <input type='submit' value="Gravar"/>
      </div>
    </form>
  );
}
