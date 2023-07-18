import { ClientService } from "..";

export const handleError = async (error) => {
  const errorResponse = await error.response;
  if (errorResponse.status === 404) {
    error.status = 404;
    error.message = "Not Found!";

    return error;
  }

  const { response } = error;
  const errorFormat = await response.body.json();
  if (response && response.body) {
    error.statusCode = errorFormat.statusCode;
    error.message = errorFormat.message;
  } else {
    error.statusCode = 404;
    error.message = "Not Found!";
  }
  return error;
};

const options = {
  prefixUrl: import.meta.env.VITE_BASE_URL,
  timeout: 90 * 1000, // 90s
  retry: {
    limit: 2,
    backoffLimit: 1000,
    maxRetryAfter: 3000,
  },
  hooks: {
    beforeRequest: [],
    beforeRetry: [],
    beforeError: [(error) => handleError(error)],
  },
};

export const HttpClient = new ClientService(options);
