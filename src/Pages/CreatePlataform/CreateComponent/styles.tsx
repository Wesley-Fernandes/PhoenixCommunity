import styled from "styled-components";

export const CreatePlataformPage = styled.main`
    height: 100%;
    width: 100%;
    background-color: black;
    overflow-y: scroll;
    padding: 0;
`

export const FormContainer = styled.form`
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

export const Input = styled.input`
    width: 95%;
    height: 40px;
    border: none;
    outline: none;
    margin-bottom: 10px;
    text-indent: 10px;
`

export const TextArea = styled.textarea`
    width: 95%;
    min-height: 150px;
    max-height: 150px;
    text-indent: 10px;


    border: none;
    outline: none;
`
