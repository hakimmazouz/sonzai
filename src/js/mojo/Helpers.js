export function $(query) {
	const result = document.querySelectorAll(Array.slice(0, 1)[0] === '@' ? `[role=${query}]` : query);
	if (!result) {
		throw `No element found for ${query} selector`
	}

	return result.length > 1 ? result : result[0]
}