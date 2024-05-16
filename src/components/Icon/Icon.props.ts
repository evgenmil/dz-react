import { ImgHTMLAttributes } from 'react';

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
	srcImage: string;
}