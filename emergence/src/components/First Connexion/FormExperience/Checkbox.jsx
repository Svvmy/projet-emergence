import React from 'react';

export function Checkbox({ visible, children }) {
	let className = "nonCoche";
	if (visible) {
		className = "coche";
	}
		return (
		<div className={className}>{children}</div>
	)
}
