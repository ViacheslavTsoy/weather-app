import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { Box } from '../basic';
import { theme } from '../../styles/theme';

export const LanguageSelect: React.FC = React.memo(() => {
    const { i18n } = useTranslation();
    const [active, setActive] = useState(i18n.language);
    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
        setActive(lang);
    };
    return (
        <Wrapper>
            <LangButton onClick={() => changeLang('ru')} active={active === 'ru'}>RU</LangButton>
            <LangButton onClick={() => changeLang('en')} active={active === 'en'}>EN</LangButton>
        </Wrapper>
    );
});

const Wrapper = styled(Box)`
justify-content: flex-end;
width: 100%;
height: 20px;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #898DA1;
`;

const LangButton = styled(Box)<{ active: boolean }>`
width: 40px;
transition: .3s;
align-items: center;
justify-content: center;
cursor: pointer;
background: ${theme.colors.gray};
color: ${theme.colors.white};
border-radius: 4px;
:first-of-type {
margin-right: 10px;
}
${props => props.active && css`
background: #2E9CDB;
`}
`;
