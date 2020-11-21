import React, {ReactNode} from 'react';
import Select, {StylesConfig} from 'react-select';
import styled from 'styled-components';
import {BaseSelectStyles} from "./select-base-styles";
import {theme} from "../../styles/theme";
import {Box} from "../basic";

export interface ValueType {
    value: string;
    label: string;
}

interface SelectProps {
    children?: ReactNode;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    value?: Array<ValueType> | ValueType;
    defaultValue?: Array<ValueType> | ValueType;
    onChange: (e: ValueType | any) => void;
    options?: Array<ValueType>;
    stylesConfig?: StylesConfig;
    label?: string;
}

export const ReactSelect: React.FC<SelectProps> =  React.memo((props: SelectProps) => {
        const {
            disabled,
            onChange,
            placeholder,
            options,
            stylesConfig,
            value,
            label,
            defaultValue
        } = props;
        const selectStyles = stylesConfig || BaseSelectStyles;
    return (
            <SelectContainer>
                {label && <Label>{label}</Label>}
                <Select
                    {...props}
                    isDisabled={disabled}
                    isSearchable={true}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    options={options}
                    placeholder={placeholder}
                    styles={selectStyles}
                    hideSelectedOptions={false}
                    onBlurResetsInput={false}
                />
            </SelectContainer>
        );
    }
)

const Label= styled.div`
    font-style: normal;
    font-weight: normal;
    margin-bottom: 8px;
    color: ${theme.colors.blue};
    font-size: 14px;
    position: absolute;
    top: -20px
`;

const SelectContainer = styled(Box)`
    position: relative;
    width: 100%;
    background: ${theme.colors.white};
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid rgba(137, 141, 161, 0.2);
`;
