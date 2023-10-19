function handleError(req, res) {
  res.json({ message: "Something went wrong" });
}
function getErrorMessage(errMsg) {
  console.log(errMsg);
}

// Export the controller function
export default {
  handleError: handleError,
  getErrorMessage: getErrorMessage,
};
