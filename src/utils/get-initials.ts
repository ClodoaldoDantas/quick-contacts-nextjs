/**
 * Generates initials from a given name.
 *
 * @param name - The full name to convert to initials
 * @returns A string containing up to two uppercase initials
 * @example
 * getInitials('John Doe') // Returns 'JD'
 * getInitials('Alice Bob Charlie') // Returns 'AB'
 */
export function getInitials(name: string): string {
	const words = name.split(' ')

	const initials = words.map(word => word.charAt(0).toUpperCase())
	return initials.join('').slice(0, 2)
}
