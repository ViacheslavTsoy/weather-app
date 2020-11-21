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
background: linear-gradient(0deg, rgba(8,255,57,1) 0%, rgba(25,25,126,0.029983108108108114) 50%, rgba(0,179,255,1) 100%);
`;

const Content = styled(Box)`
flex-direction: column;
max-width: 1024px;
padding: 20px;
`;
