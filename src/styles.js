import styled from "styled-components";
import bgImage from "./assets/bg image.svg";
import trash from './assets/trash.svg';

export const Container = styled.div`
    background: url("${bgImage}");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    width: 100%;
    
`

export const Imagem = styled.img`
    margin-top: 30px;


`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0 0;
    padding: 50px 36px;
    height: 100%;
`

export const H1 = styled.h1`
    color: #ffffff;
    align-self: center;
    margin-bottom: 80px;

`

export const Label = styled.label`
    color: #EEEEEE;
    font-size: 15px;
    margin-left: 25px;

`

export const Input = styled.input`
    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    outline: none;
    background: rgba(255, 255, 255, 0.25);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 36px;
`

export const Btn = styled.button`
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    width: 342px;
    height: 74px;
    color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const User = styled.li`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 27px;
    margin-top: 28px;

`

export const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`

export const Excluir = styled.button`
    background: url("${trash}");
    width: 24px;
    height: 28px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
    &:active{
        opacity: 0.5;
    }
        
    
`

