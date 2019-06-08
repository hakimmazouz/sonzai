export function $(query) {
	const result = document.querySelectorAll(Array.slice(0, 1)[0] === '@' ? `[role=${query}]` : query);
	if (!result) {
		throw `No element found for ${query} selector`
	}

	return result.length > 1 ? result : result[0]
}

export function map(value, minX, maxX, minY, maxY) {
	const amountX = maxX - minX;
	const amountY = maxY - minY;
	const progress = value / amountX
	return ((value - minX) / amountX) * (amountY)+minY
	// return minY + amountY*progress
	console.log(progress)
	// return (maxY - minY) * (value / (maxX - minX))
}

export function constrain(value, min, max) {
	return Math.min(max, Math.max(min, value));
}

export function mapConstrain(value, minX, maxX, minY, maxY) {
	return constrain(map(...arguments), minY, maxY);
}

export function withinRange(value, min, max) {
	return value >= min && value <= max ? value : false
}