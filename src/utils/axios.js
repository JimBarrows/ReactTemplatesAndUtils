/**
 * Created by JimBarrows on 12/18/16.
 */

export function checkHttpStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		var error      = new Error(response.statusText);
		error.response = response;
		throw error
	}
}

export function parseJSON(response) {
	return response.data
}

export function convertErrorToString(error) {
	if (error.response) {
		if (error.response.status === 400) {
			let errorMessage = '';
			for (var k in error.response.data.error) {
				errorMessage += `The ${k} field ${error.response.data.error[k]}`;
			}
			return errorMessage;
		} else {
			return `The ${error.response.config.method} request to ${error.response.config.url} returned a ${error.response.status} - ${error.response.statusText}`;
		}
	} else {
		return error.toString();
	}
}