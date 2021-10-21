function show_console_commands() {
	/*
	 * State all console commands
	 * Example:
	 * 	console.log()
	*/
	console.log("Welcome to the console prompt! \n\
Please note the following functions for the various logging methods \
	");
	console.log("console.log(\"<your message here\"); => Log message");
	console.warn("console.warn(\"<your warning here\"); => Log warning");
	console.debug("console.debug(\"<your debug message here\"); => Log Debug message");
	console.error("console.error(\"<your error message here\"); => Log error");
	console.exception("console.exception(\"<your exception message here\"); => Log Exception encountered");
	console.info("console.info(\"<your information here\"); => Log Information");
	console.trace("console.trace(\"<trace message here\"); => Log trace");
}