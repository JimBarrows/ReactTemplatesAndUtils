/**
 * Created by JimBarrows on 12/18/16.
 */

import React from "react";
export {checkHttpStatus, parseJSON, convertErrorToString} from "./axios";

export function createConstants(...constants) {
	return constants.reduce((acc, constant) => {
		acc[constant] = constant;
		return acc;
	}, {});
}

export function createReducer(initialState, reducerMap) {
	return (state = initialState, action) => {
		const reducer = reducerMap[action.type];

		return reducer
				? reducer(state, action.payload)
				: state;
	};
}

