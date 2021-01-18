import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const BackgroundCapa = styled.div`
    img {
      width: 800px;
      height: 350px;
      margin-top: -80px;
      border-radius: 7px;
    }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: -100px;
  width: 800px;

  img {
   padding-left: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    background-color: #c4c4c4;
    padding: 10px;
    border-radius: 10px;

    a {
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  background-color: #3C639E;
  overflow: auto;
  border-radius: 7px;

  a {
    background: #fff;
    border-radius: 10px;
    padding: 2px;
    display: block;
    text-decoration: none;
    margin: 5px;
    width: 700px;
    min-height: 60px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(13px);
    }

    & + a {
      margin-top: 7px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #3d3d4d;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`
