import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'>

export function Label({ className, ...props }: LabelProps) {
	return <label className={cn('text-sm font-semibold', className)} {...props} />
}
