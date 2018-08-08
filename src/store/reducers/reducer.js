export const count = function (state=0, action) {
	switch (action.type) {
		case "ADD":
			return state + action.payload;
		case "REDUCE":
			return state - action.payload;
		case "GET":
			return action.payload;
		default:
			return state;
	}
}

export const message = function (message="初始化", action) {
	switch (action.type) {
		case "ADD":
			return "刚刚的操作是加";
		case "REDUCE":
			return "刚刚的操作是减";
		default:
			return message;
	}
}