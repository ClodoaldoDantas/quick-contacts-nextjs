import { AlertCircleIcon } from 'lucide-react'

type AlertProps = {
	message: string
}

export function Alert({ message }: AlertProps) {
	return (
		<div className="p-4 mb-4 bg-zinc-50 border border-zinc-300 rounded-md flex items-center gap-2">
			<AlertCircleIcon size={20} className="text-zinc-600" />
			<p className="text-zinc-600 text-sm">{message}</p>
		</div>
	)
}
