import styled from "styled-components";


export const MenuPage = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        background-color: #ffffff;
        outline: none;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background: #4BB4CC;
    }
`

export const ContainerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2.5rem;
`

export const Title = styled.h2`
    color: #4BB4CC;
    font-weight: bold;
    text-transform: uppercase;
`

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4BB4CC;
    border: none;
    width: 90%;
    height: 50px;
    border-radius: 15px;
    color:  #fff ;
    font-weight: bold;
    margin: 0.3rem 0;
    cursor: pointer;
    transition: all ease-in-out 0.5s;
    text-decoration: none;


    &:hover{
        background-color: #388b9e;
    }
`
