import {CONSTANTS} from 'static/constant';

interface FetchOptions extends Omit<RequestInit, 'body'> {
  body?: BodyInit | object;
}

export async function fetchApiData<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions?.headers,
      ...options?.headers,
    },
  };

  const url = await new URL(path, CONSTANTS.baseUrl);

  try {
    const response = await fetch(url.toString(), mergedOptions as RequestInit);

    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    throw error;
  }
}
