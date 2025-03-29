import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const anchorVariants = tv({
	base: 'px-4 py-2 rounded flex items-center gap-2',
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

type AnchorProps = LinkProps &
	VariantProps<typeof anchorVariants> & {
		children: ReactNode
		className?: string
	}

export function Anchor({
	children,
	variant,
	className,
	...props
}: AnchorProps) {
	return (
		<Link className={anchorVariants({ variant, className })} {...props}>
			{children}
		</Link>
	)
}
