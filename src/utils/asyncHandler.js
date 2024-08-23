const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// const asyncHandler1 = () => {};
// const asyncHandler2 = (fnc) => () => {};
// const asyncHandler3 = (fnc) => async () => {};

//Method-2
// const asyncHandler = (fnc) => async (req, res, next) => {
//   try {
//     await fnc(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export { asyncHandler };
