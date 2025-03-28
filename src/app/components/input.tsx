import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
	return (
		<input
			className={cn(
				'py-2 px-3 w-full rounded-md border border-zinc-300 text-sm text-zinc-900 placeholder:text-zinc-500',
				className,
			)}
			{...props}
		/>
	)
}
