import type { ComponentProps } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const buttonVariants = tv({
	base: 'px-4 py-2 rounded flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50',
	variants: {
		variant: {
			primary: 'text-white bg-blue-600 hover:bg-blue-500',
			outline:
				'text-zinc-600 border border-input bg-transparent hover:bg-zinc-600 hover:text-white',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
})

type ButtonProps = ComponentProps<'button'> &
	VariantProps<typeof buttonVariants>

export function Button({ variant, className, ...props }: ButtonProps) {
	return (
		<button className={buttonVariants({ variant, className })} {...props} />
	)
}
