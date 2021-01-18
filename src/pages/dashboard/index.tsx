import React, {useEffect, useState} from 'react';

import Api from '../../services'

import {FiChevronRight} from 'react-icons/fi'


import imgCapa from '../../assets/capa.png'
import imgPerfil from '../../assets/Foto.png'
import imgLinkedin from '../../assets/Linkedin.svg'
import imgGithub from '../../assets/Github.svg'
import imgInstagram from '../../assets/Instagram.svg'
import imgWhatsapp from '../../assets/WhatsApp.svg'


import { Container, Content, BackgroundCapa, Header, Projects } from './styles'

interface Repository {
  id: number
  full_name: string
  description: string
  private: boolean
  html_url: string
}

const Dashboard: React.FC = () => {

  const [repositories, setRepositories] = useState<Repository[] >([])

  useEffect(() => {
    Api.get('users/xthiagosant/repos')
      .then((response) =>{
        setRepositories(response.data)
      })
  }, [])

  return (
    <>
      <Container>
        <Content>
          <BackgroundCapa>
            <img src={imgCapa} alt="Imagem de Capa"/>
          </BackgroundCapa>
          <Header>
            <img src={imgPerfil} alt="Foto de Perfil"/>
            <div>
              <a
              href="https://www.linkedin.com/in/thiago-sant-anna-800a9a33/"
              rel="noreferrer"
              target="_blank">
                <img src={imgLinkedin} alt="Linkedin" />
              </a>

              <a
              href="https://github.com/xThiagoSant"
              rel="noreferrer"
              target="_blank">
                <img src={imgGithub} alt="Github"/>
              </a>

              <a
              href="https://www.instagram.com/xthiagosant"
              rel="noreferrer"
              target="_blank">
                <img src={imgInstagram} alt="Instagram"/>
              </a>

              <a
              href="https://bit.ly/3nWLOqk"
              rel="noreferrer"
              target="_blank">
                <img src={imgWhatsapp} alt="WhatsApp"/>
              </a>
            </div>
          </Header>
          <div style={{ color: "#3d3d4d" }}>
            <h1>Bem-Vindo(a), Eu sou Thiago Sant'anna</h1>
            <p>Meus projetos no Github</p>
          </div>

          <Projects>

          {repositories.map((repo) => (
              <a key={repo.id} href={repo.html_url}>
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
            ))}

          </Projects>
        </Content>
      </Container>
    </>
  )
}

export default Dashboard
