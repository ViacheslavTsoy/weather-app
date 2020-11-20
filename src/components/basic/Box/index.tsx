import styled, { css } from 'styled-components';
import { BoxConstructor } from '../systemConstructor';

export const Box = styled(BoxConstructor)`
  ${props => css`
    ${props.cursor && `cursor: ${props.cursor};`}

    ${props.withHover &&
    css`
      &:hover {
        opacity: 0.5;
      }

      &:active {
        opacity: 0.6;
      }
    `}
  `}
`;

Box.defaultProps = {
  width: '100%',
  display: 'flex',
};
