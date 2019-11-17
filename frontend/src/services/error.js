import { toast } from 'react-toastify';

export default function throwError(error) {
  const message = error.response
    ? error.response.data.error
    : 'Network Error. Check your connection.';

  toast.error(`Error: ${message}`, {
    autoClose: 5000,
  });
}
