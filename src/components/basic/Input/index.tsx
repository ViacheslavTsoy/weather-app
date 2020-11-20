import * as React from 'react';
import styled, {css} from "styled-components";
import {forwardRef, useState} from "react";
import {theme} from "../../../styles/theme";

const eyeUrl = `url('/static/image/eye.svg')`;
const eyeClosedUrl = `url('/static/image/eye_closed.svg')`;

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: any;
    label?: string;
    isPassword?: boolean;
    hint?: boolean;
    inputType?: string;
    indicator?: boolean;
    withDollar?: boolean;
    value?: string;
    indicatorClick?: VoidFunction;
};

export const Input: React.FC<Props> = forwardRef(({error, label, isPassword, hint, inputType, withDollar, indicator, value, indicatorClick,  ...props}) => {
    const initType = isPassword ? 'password' : inputType || 'text';
    const [type, setType] = useState<string>(initType);
    const [showHint, setShowHint] = useState(false);
    return (
        <InputContainer withDollar={withDollar && !!value}>
            {label && <LabelInput>{label}</LabelInput>}
            <StyledInput
                {...props}
                value={value}
                error={!!error}
                type={type}
                isPassword={!!isPassword}
                autoComplete='off'
                indicator={!!indicator}
                withDollar={withDollar && !!value}
            />
            {indicator && <NumberIndicatorIcon onClick={indicatorClick} src={'/static/image/select_arrows.svg'}/>}
            {error && <ErrorBox>{error.message || 'Field is required'}</ErrorBox>}
            {isPassword && (
                <EyeIcon
                    onClick={() => setType(type === 'password' ? 'text' : 'password')}
                    type={type}
                />
            )}
            {hint &&
            <HintBox onClick={() => setShowHint(!showHint)}>
                <HintIcon>?</HintIcon>
                {showHint &&
                <HintText>
                    At least 8 characters<br/>
                    A mixture of both uppercase and lowercase letters<br/>
                    A mixture of letters and numbers<br/>
                    Inclusion of at least one special character
                </HintText>
                }
            </HintBox>
            }
        </InputContainer>
    );
});

const NumberIndicatorIcon = styled.img`
width: 16px;
height: 16px;
position: absolute;
top: 8px;
right: -8px;
`;

const ErrorBox = styled.div`
position: absolute;
right: 0;
bottom: -15px;
`;

const InputContainer = styled.div<{ withDollar?: boolean }>`
    position: relative;
    width: 100%;
    ${props => props.withDollar && css`
      ::before{
        content: '$';
        position: absolute;
         left: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 50px;
       font-style: normal;
       font-weight: 500;
       font-size: 14px;
       line-height: 17px;
    }
`}
`;


const HintBox = styled.div`
    position: absolute;
    top: 16px;
    right: -30px;
    cursor: pointer;
`;

const HintIcon = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid ${theme.colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
`;

const HintText = styled.div`
    width: 300px;
    right: 29px;
    bottom: 36px;
    padding: 10px;
    line-height: 22px;
    height: 136px;
    border-radius: 8px;
    position: absolute;
    color: ${theme.colors.white};
`;

const EyeIcon = styled.div<{ type: string }>`
    position: absolute;
    top: 13px;
    right: 0;
    width: 48px;
    height: 25px;
    background: ${props => props.type === 'password' ? eyeUrl : eyeClosedUrl} no-repeat center center;
    border-left: 1px solid ${theme.colors.blue};
    cursor: pointer;
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

export const StyledInput = styled.input<{ error: boolean, isPassword: boolean, indicator: boolean, withDollar?: boolean }>`
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

