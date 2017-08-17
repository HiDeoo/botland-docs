import { injectGlobal } from 'styled-components';
import { normalize, rgba } from 'polished';

injectGlobal`
  ${normalize()}

  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  body,
  input,
  textarea,
  keygen,
  select,
  button {
    font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: ${rgba(0, 0, 0, 0.8)};
  }

  a {
    color: ${rgba(0, 0, 0, 0.8)};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  :focus {
    outline: 0;
  }

  strong {
    font-weight: bold;
  }

  code {
    font-family: 'Roboto Mono', Menlo, Courier, monospace;
  }

  :not(pre) > code {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 3px;
    font-size: .9rem;

    &::before,
    &::after {
      content: "\\00a0";
      letter-spacing: -.2rem;
    }
  }

  pre[class*="language-"] {
    background-color: #fbfafa !important;
    border: 1px solid #eeeeee;
    font-size: 0.9rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 15px 0;
  }

  table, th, td {
    border: 1px solid #dfe2e5;
  }

  th, td {
    padding: 5px 10px;
  }

  tr:nth-child(even) td {
    background-color: #fafdfc;
  }
`;
