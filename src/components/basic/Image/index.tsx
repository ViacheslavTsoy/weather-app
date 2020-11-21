import styled, { css } from 'styled-components';
import { ImageConstructor } from '../systemConstructor';

export const Image = styled(ImageConstructor)`
  ${props => css`
    ${props.objectFit && `object-fit: ${props.objectFit};`}
  `}
`;

Image.defaultProps = {
    width: '100%',
    height: '100%',
    display: 'flex',
};
