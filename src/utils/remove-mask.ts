/**
 * Removes all non-digit characters from a given string.
 *
 * @param value - The input string to remove non-digit characters from
 * @returns A string containing only numeric digits
 */
export function removeMask(value: string) {
	return value.replace(/\D/g, '')
}
