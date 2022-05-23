import React from 'react';

export function Checkbox({ visible, children }) {
	let className = 'unCheck';
	if (!visible) {
		className = 'check';
	}
	return <div className={className}>{children}</div>;
}
