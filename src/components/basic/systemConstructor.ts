import styled from 'styled-components';
import {
  space,
  layout,
  compose,
  color,
  flexbox,
  borders,
  position,
  typography,
} from 'styled-system';
import { BoxProps, ButtonProps, TextProps, TitleProps, ImageProps, InputProps } from './types';

export const BoxConstructor = styled.div<BoxProps>(
  compose(space, position, layout, flexbox, color, borders),
);

export const ButtonConstructor = styled.button<ButtonProps>(
  compose(position, layout, flexbox, color, borders),
);

export const InputConstructor = styled.input<InputProps>(
  compose(layout, flexbox, position, typography, borders, color),
);

export const ImageConstructor = styled.img<ImageProps>(compose(layout, borders, flexbox, position));

export const TextConstructor = styled.p<TextProps>(compose(typography, color, flexbox, position));

export const TitleConstructor = styled.h1<TitleProps>(
  compose(typography, color, flexbox, position),
);
