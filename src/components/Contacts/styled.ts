import styled from '@emotion/styled';
import ContactForm from 'react-mail-form';

export const Form = styled(ContactForm)`
  text-align: center;
  font-size: 20px;

  input,
  textarea {
    display: block;
    padding: .25em .5em;
    width: 100%;
    line-height: 1.5;
    background-color: rgba(222, 222, 222, .2);
    border: none;
    border-bottom: 1px solid #e5e5e5;
    border-radius: 5px;
    font-size: 20px;
  }

  textarea {
    margin: 24px 0 36px;
  }

  a {
    display: inline-block;
    padding: .7em 1em;
    border-radius: 10px;
    background: #ff3636;
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
