import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body,
  input,
  textarea,
  button,
  p,
  h1,
  h2,
  h3,
  h4,
  span,
  select,
  option {
    font-family: "Lato", sans-serif !important;
    -webkit-font-smoothing: antialiased;
  }

  body{
    background: #ededed;
  }

  html {
    scroll-behavior: smooth;
    font-size: 100%;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 780px) {
      font-size: 87.5%;
    }
  }

  button{
    cursor: pointer;
  }
  button[disabled]{
    opacity: 0.8;
    cursor: not-allowed;
  }

  :root {
    --max_width: 1220px;
    //Azul para itens importantes, cor principal
    --global_primary: #5b74f9;

    //Branco para utilização geral
    --global_white: #ffffff;

    //azul escuro para títulos e textos marcantes
    --text_title: #19367b;

    //Preto para utilização em textos
    --text_black: #424242;

    //Cinza para textos
    --text_gray: #858e93;

    //Azul claro para detalhes do sistema
    --system_details_blue: #0ba0ff;

    //Cinza para bordas e outros detalhes
    --system_details_gray: #a1acb2;

    //Azul para seleção de itens
    --system_details_selected: #d4d7e7;

    //Azul para bordas
    --system_details_border: #cbdeea;

    //Laranja de erros do sistema
    --system_notification_error: #ff5216;

    //Verde para sucesso no sistema
    --system_notification_success: #0da84e;

    //Amarelo para avisos no sistema
    --system_notification_yellow: #edb900;

    //Roxo para avisos no sistema
    --system_notification_purple: #500fdb;

    //Cinza para desabilitar itens e textos
    --system_notification_disabled: #dddddd;

    //Cinza para background
    --system_bg_gray: #f0f1ff;

    //Amarelo para background de avisos
    --system_bg_yellow: #fff1d6;

    //Fundo vermelho para tags
    --system_bg_red1: #ff494966;

    //Fundo vermelho para avisos
    --system_bg_red2: #ff52161a;

    //Fundo para avisos de sucesso
    --system_bg_green: #06dcaa1a;

    //Fundo roxo para avisos
    --system_bg_purple: #500fdb1a;

    //Fundo para utilização dos dialogs
    --system_bg_dialog: #00000066;
  }
`;

export default GlobalStyle;
