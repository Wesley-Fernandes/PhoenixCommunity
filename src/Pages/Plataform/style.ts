import styled from "styled-components";

export const PlataformPage = styled.main`
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
    background-color: black;
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

export const PlataformNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    max-width: 100%;
    background-color: black;
    min-height: 60px;
    max-height: 60px;
    overflow: hidden;
    margin-bottom: 2rem;
    border-bottom: 1px solid #4BB4CC;
`

export const PlataformButton = styled.button`
    background-color: black;
    width: fit-content;
    padding: 0rem 0.4rem;
    color: #fff;
    border: none;
    height: 100%;
    font-size: 2rem;
    transition: all ease-in-out 0.5s;
    &:hover{
        color: #4BB4CC;
    }
`

export const PlataformTitle = styled.h1`
    display: flex;
    align-items: center;
    color: #fff;
    flex: 1;
    text-indent: 1rem;
    font-weight: bold;
    margin: 0;
    font-size: 1.3rem;
    overflow: hidden;
`
export const PlataformFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    max-width: 100%;
    background-color: black;
    min-height: 60px;
    max-height: 60px;
    overflow: hidden;
    border-top: 1px solid #4BB4CC;;
`
export const PlataformEnding = styled.h2`
    text-align: center;
    color: #ffffff7e;
    flex: 1;
    text-align: center;
    font-weight: normal;
    margin: 0;
    font-size: 1.3rem;
    overflow: hidden;
`
