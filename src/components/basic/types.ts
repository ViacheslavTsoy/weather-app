import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  BordersProps,
  FlexboxProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';

/**
 * @desc this type applies Box, Button, Title, Text.
 */
interface GeneralProps extends FlexboxProps, PositionProps, ColorProps {
  cursor?: 'pointer' | 'default';
}

/**
 * @desc this type applies Title and Text.
 */
interface GeneralStringProps extends TypographyProps {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: 'line-through' | 'overline' | 'underline';
  textDecorationColor?: string;
  withHover?: boolean;
  hoverColor?: boolean;
  fontSizeTablet?: string;
}

/**
 * @desc BoxProps used for only Box.
 * @desc used for components.
 */
export interface BoxProps extends GeneralProps, LayoutProps, SpaceProps, BordersProps {
  withHover?: boolean;
}
export type BoxType = Omit<BoxProps, 'color'>;

/**
 * @desc used for only Button.
 */
export interface ButtonProps extends GeneralProps, LayoutProps, BordersProps {}

/**
 * @desc used for only Input.
 */
export interface InputProps extends GeneralProps, GeneralStringProps, LayoutProps, BordersProps {}

/**
 * @desc used for only Image.
 */
export interface ImageProps extends FlexboxProps, PositionProps, LayoutProps, BordersProps {
  objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
}

/**
 * @desc used for only Text.
 */
export interface TextProps extends GeneralProps, GeneralStringProps {}

/**
 * @desc used for only Title.
 */
export interface TitleProps extends GeneralProps, GeneralStringProps {}
