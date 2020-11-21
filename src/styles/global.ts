import {createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    div,
    span,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    abbr,
    address,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    samp,
    small,
    strong,
    sub,
    sup,
    var,
    b,
    i,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    button,
    input,
    textarea {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      background: transparent;
      box-sizing: border-box;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }

    nav ul {
      list-style: none;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }

    a {
      margin: 0;
      padding: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      color: inherit;
      text-decoration: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    h1 {
      font-weight: inherit;
    }
    
    button,
    input,
    textarea {
      font-family: inherit;
      color: inherit;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      outline: none;
    }

    body {
      line-height: 1;
      font-weight: 300;
      font-style: normal;
      text-rendering: optimizeLegibility;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
      width: 100%;
    }
`;