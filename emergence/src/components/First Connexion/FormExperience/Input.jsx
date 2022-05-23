import React from 'react';

export function Input({ visible, sv }) {
	let bool = false;
	if (!visible) {
		bool = true;
	}

	return <input type="month" onChange={(e) => sv(e.target.value)} disabled={bool} />;
}
