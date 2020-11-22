import styled, { css } from 'styled-components';
import { TitleConstructor } from '../systemConstructor';

export const Title = styled(TitleConstructor)`
  ${props => css`
    ${props.textTransform && `text-transform: ${props.textTransform};`}
    ${props.cursor && `cursor: ${props.cursor};`}
    ${props.textDecoration && `text-decoration: ${props.textDecoration};`}
    ${props.textDecorationColor && `text-decoration-color: ${props.textDecorationColor};`}

    ${
      props.withHover &&
      css`
        &:hover {
          ${props.hoverColor && `color: ${props.hoverColor};`};
          opacity: .8;
        }

        &:active {
          opacity: .6;
        }
      `
    }
  `}
`;
