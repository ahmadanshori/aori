export default error => {
  return error.response
    ? error?.response?.data?.message
    : 'Ada masalah dengan koneksi.';
};
