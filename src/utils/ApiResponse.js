class ApiResponse {
  constructor(data, message = "Success", statusCode = 200) {
    this.statusCode = statusCode;
    this.data = data;
    this.success = statusCode < 400;
    this.message = message;
  }
}

export { ApiResponse };
