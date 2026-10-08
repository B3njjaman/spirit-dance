import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...clases: ClassValue[]) => twMerge(clsx(clases));
