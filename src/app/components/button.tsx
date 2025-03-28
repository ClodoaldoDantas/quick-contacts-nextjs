import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
	return (
		<button
			className={cn(
				'px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-500 w-full cursor-pointer disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}
