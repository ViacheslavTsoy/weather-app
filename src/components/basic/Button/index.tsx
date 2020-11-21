import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Button = styled.button`
    &:disabled {
    opacity: .8;
    cursor: default;
    }
    &:hover:enabled {
      background-color: ${theme.colors.blue};
      opacity: .9;
    }
    &:active {
      opacity: 1;
    }
`;
