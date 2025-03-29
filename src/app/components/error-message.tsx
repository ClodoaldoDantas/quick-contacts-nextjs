import type { FieldError } from 'react-hook-form'

type ErrorMessageProps = {
	error?: FieldError
}

export function ErrorMessage(props: ErrorMessageProps) {
	if (!props.error) {
		return null
	}

	return <span className="text-red-500 text-sm">{props.error.message}</span>
}
