import ContactForm from 'react-mail-form';

import styled, { mainColor } from '@constants/styles';

export const Form = styled(ContactForm)`
  text-align: center;
  font-size: 20px;

  input,
  textarea {
    display: block;
    padding: .25em .5em;
    width: 100%;
    line-height: 1.5;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.chipColor};
    border-radius: 5px;
    font-size: 20px;

    & {
      color: ${(props) => props.theme.color};
      background-color: ${(props) => props.theme.inputBackgroundColor};
    }

    &::placeholder {
      color: ${(props) => props.theme.placeholderColor};
    }
  }

  textarea {
    margin: 24px 0 36px;
  }

  a {
    display: inline-block;
    padding: .7em 1em;
    border-radius: 10px;
    background: ${mainColor};
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all .3s;
    text-decoration: none;

    &:hover,
    &:active {
      background: rgba(255, 54, 54, .8);
    }

    &::before {
      content: '✉️ ';
    }
  }
`;
