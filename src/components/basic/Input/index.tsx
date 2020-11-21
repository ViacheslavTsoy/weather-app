import React from 'react';
import styled from 'styled-components';
import { BaseSyntheticEvent } from 'react';
import { theme } from '../../../styles/theme';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    value?: string;
    type?: string;
    onChange: (e: BaseSyntheticEvent) => void
};

export const Input: React.FC<Props> = React.memo(({ label, onChange, value, type, ...props }) => {
    return (
        <InputContainer>
            {label && <LabelInput>{label}</LabelInput>}
            <StyledInput
                {...props}
                value={value}
                type={type}
                autoComplete="off"
            />
        </InputContainer>
    );
});

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const LabelInput = styled.div`
    font-style: normal;
    font-weight: normal;
    margin-bottom: 8px;
    color: ${theme.colors.blue};
    font-size: 14px;
    position: absolute;
    top: -17px
`;

export const StyledInput = styled.input`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    min-height: 50px;
    width: 100%;
    border: 1px solid rgba(136, 140, 160, 0.3);
    box-sizing: border-box;
    border-radius: 4px;
    color: ${theme.colors.blue};
    padding-left: 21px;
  
  ::placeholder,
  ::-webkit-input-placeholder {
        font-size: 14px;
        color: ${theme.colors.blue};
        font-style: normal;
        font-weight: 500;
    line-height: 47px;
  }
  :-ms-input-placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  
  /* Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type=number] {
  -moz-appearance: textfield;
}
`;

