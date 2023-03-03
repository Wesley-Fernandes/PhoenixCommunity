import styled from "styled-components";

export const CreatePlataformPage = styled.main`
    height: 100%;
    background-color: black;
    overflow-y: scroll;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const FormOptionsBar = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

export const ButtonOption = styled.button`
    border: none;
    border-radius: 5px;

    background-color: #4BB4CC;
    color: #fff;

    width: 130px;
    height: 50px;
    font-size: 2rem;
    font-weight: bold;

`

export const ButtonNew = styled.button`
    border: none;
    border-radius: 5px;
    transition: all ease-in-out 0.5s;

    background-color: ${(props)=>props.color};
    color: #fff;

    width: 50px;
    height: 50px;
    font-size: 2rem;
    font-weight: bold;

    &:hover{
       background-color: #2f7281;
    }
`
export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: black;
    border: none;
    margin-top: -2rem;
    background-color: #4BB4CC;
    height: 70px;

`

export const Input = styled.input`
    width: 95%;
    height: 40px;
    border: none;
    outline: none;
    margin-bottom: 0.2rem;
    text-indent: 10px;
`

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 150px;
    max-height: 150px;
    text-indent: 10px;

    margin-top: 0.2rem;

    border: none;
    outline: none;
`

export const FormFooter = styled.footer`
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #4BB4CC;
`
