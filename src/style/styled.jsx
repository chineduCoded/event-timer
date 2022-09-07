import styled from 'styled-components'

// Home styles

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
background-color: #282c34;
color: #fff;
`

export const HomeTitle = styled.h2`
color: #fff;
margin-block-end: 1.25rem;
`

export const Form = styled.form`

`
export const FormInput = styled.input`
margin-block-end: 1.25rem;
width: 400px;
max-width: 280px;
padding: 10px;
border-radius: 5px;
outline: none;
color: gray;
font-size: 1.0625rem;
`
export const ButtonContainer = styled.div`
display: flex;
gap: 10px;

`
export const Button = styled.button`
width: 100%;
padding: 10px;
border-radius: 5px;
border: 0;
background-color: ${({ clr }) => clr ? "teal" : "crimson"};
color: #fff;
font-size: 1.0625rem;
font-weight: bold;
cursor: pointer;
`

// For CoutDownTimer 
export const CountDown = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
background-color: #282c34;
color: #fff;
`

export const Container = styled.div`
width: fit-content;
height: 100px;
display: flex;
align-items: center;
border: 2px solid gray;
border-radius: 10px;
padding: 1.25rem;
gap: 20px;
`

export const DisplayBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 5px;
padding: 10px;
border: 2px solid gray;
border-radius: 10px;
`
export const Time = styled.span`
font-size: 1.875rem;
font-weight: bold;
// color: crimson;
`
export const Title = styled.span`
font-size: 1.875rem;
font-weight: bold;
// color: crimson;
`

export const Colon = styled.span`
margin-inline: 5px;
font-size: 1.875rem;
font-weight: bold;
// color: crimson;
`