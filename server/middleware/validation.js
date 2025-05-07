const validation = (req, res, next) => {
	console.log("validation middleware");
	next();
};

const testNext = (req, res, next) => {
	console.log("test next");
	next();
};

export { validation, testNext };
