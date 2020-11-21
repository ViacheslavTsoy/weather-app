import React from 'react';

type StyleFunction = (provided: React.CSSProperties, state: { [prop: string]: any }) => {};

interface StyleObject {
    [prop: string]: StyleFunction;
}

const baseOptions: StyleObject = {
    container: provided => {
        return {
            ...provided,
            width: '100%',
        };
    },
    control: provided => {
        return {
            ...provided,
            fontFamily: 'Inter',
            fontSize: '12px',
            color: '#898DA1',
            fontWeight: '500',
            width: '100%',
            minWidth: '115px',
            boxSizing: 'border-box',
            cursor: 'pointer',
            border: 'none',
            minHeight: '33px',
            height: '100%',
            ':hover': {
                boxShadow: 'none',
            },
        };
    },
    multiValue: (provided) => {
        return {
            ...provided,
            background: 'rgba(46, 156, 219, 0.15)',
            borderRadius: '4px',
            margin: '2px 4px',
            'div:nth-of-type(2)': {
                borderRadius: '3px',
                background: '#2E9CDB',
                margin: '5px',
                width: '17px',
                height: '17px',
                fontSize: '44px',
                color: 'white',
                position: 'relative',
                'svg': {
                    display: 'none',
                },
                ':after': {
                    content: `""`,
                    position: 'absolute',
                    width: '7px',
                    height: '7px',
                    top: 5,
                    right: 5,
                    mask: `url('/static/image/close_icon.svg') no-repeat center`,
                    background: '#fff',
                },
            },
            'div:first-of-type': {
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                color: '#131C44',
            },
        };
    },
    menuList: provided => {
        return {
            ...provided,
            maxHeight: '200px',
            overflowY: 'auto',
            '&::-webkit-scrollbar': { width: '4px' },

            '&::-webkit-scrollbar-track': {
                borderRadius: '',
                backgroundColor: '#E4E9EE',
                marginTop: '4px',
                marginBottom: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#2E9CDB',
                borderRadius: '4px',
                marginTop: '4px',
                marginBottom: '4px',
            },
        };
    },
    option: (provided, state) => {
        return {
            ...provided,
            fontFamily: 'ArialMT, sans-serif',
            width: '96%',
            fontSize: '12px',
            lineHeight: '26px',
            maxWidth: '100%',
            paddingLeft: '18px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            borderBottom: '1px solid #F8F8F8',
            cursor: 'pointer',
            backgroundColor: state.isSelected ? '#2E9CDB' : 'transparent',
            color: state.isSelected ? '#fff' : '#333',
            '&:hover': { backgroundColor: state.isSelected ? '#2E9CDB' : 'rgb(242, 242, 242)' },
        };
    },
    singleValue: provided => {
        return {
            ...provided,
            fontSize: '12px',
            color: '#373C43',
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'ArialMT, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '18px',
        };
    },
    valueContainer: provided => {
        return {
            ...provided,
            paddingLeft: '15px',
            fontSize: '12px',
            color: '#373C43',
            fontFamily: 'ArialMT, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '18px',
        };
    },
    indicatorsContainer: provided => {
        return {
            ...provided,
            'div': {
                color: '#2E9CDB',
                ':hover': {
                    color: '#2E9CDB',
                },
            },
        };
    },
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transition: 'all .1s ease',
        transaction: '.1s',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
        padding: '0 5px',
    }),
    placeholder: provided => ({
        ...provided,
        fontSize: '12px',
        color: '#898DA1',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
    }),
    indicatorSeparator: () => ({ display: 'none' }),
};

export const BaseSelectStyles: StyleObject = {
    ...baseOptions,
};

export const SelectFontSize14: StyleObject = {
    ...baseOptions,
    placeholder: provided => ({
        ...provided,
        fontSize: '14px',
        color: '#898DA1',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
    }),
    singleValue: provided => {
        return {
            ...provided,
            fontSize: '14px',
            color: '#373C43',
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'ArialMT, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '18px',
        };
    },
    valueContainer: provided => {
        return {
            ...provided,
            paddingLeft: '15px',
            fontSize: '14px',
            color: '#373C43',
            fontFamily: 'ArialMT, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '18px',
        };
    },
};
