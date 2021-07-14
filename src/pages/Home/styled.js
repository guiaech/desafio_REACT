import styled from "styled-components";


export const Container = styled.div`
 width: 100vw;
 heigth: 100vh;
 display: flex;
 justify-content: center;
 flex-direction: column
 
`;



export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: .25rem 0 0 .25rem;
  height: 2rem;
  display: block;
  width: 500px;
  text-align: center;
  color: #000;
  margin: 5px auto;
`;


export const Button = styled.button`
 height: 2.1rem;
 top: 0px;
 position: relative;
 border: 1px solid #000;
 display: block;
 width: 500px;
 text-align: center;
 background-color: #000;
 color: #fff;
 margin: 0 auto;

`;

export const Titlo = styled.h1`
 width: 100vw;
 heigth: 100vh;
 display: flex;
 justify-content: center;
`

export const ErrorMsg = styled.span`
 display: block;
 font-size: 0.80rem;
 color: red;
 font-width: 600;
 display: flex;
 justify-content: center;
`