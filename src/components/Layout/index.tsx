import React from 'react';
import { LanguageSelect } from '../languageSelect';
import { Box } from '../basic';
import styled from 'styled-components';

export const Layout: React.FC = React.memo(({ children }) => {
    return (
        <Wrapper>
            <Content>
                <LanguageSelect/>
                {children}
            </Content>
        </Wrapper>
    );
});

const Wrapper = styled(Box)`
width: 100%;
min-height: 100vh;
justify-content: center;
background: linear-gradient(0deg,rgb(79 147 0 / 57%) 0%,rgb(228 171 74) 50%,rgb(96 169 255 / 59%) 100%);;
`;

const Content = styled(Box)`
flex-direction: column;
max-width: 1024px;
padding: 20px;
`;
