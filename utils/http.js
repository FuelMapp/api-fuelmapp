exports.createError = (status = 500, msg = 'Unexpected error') => {
    const error = new Error(msg)
    error.status
    return error
}

exports.normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
