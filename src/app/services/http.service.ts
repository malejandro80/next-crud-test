/** @format */

const urlBase = 'https://reqres.in/api';

const readUrl = (url: string = ''): string =>
  url.startsWith('http://') || url.startsWith('https://')
    ? url
    : `${urlBase}/${url}`;

type Headers = Record<string, string>;
type Body = Record<string, unknown>;

const get = async <T>(url: string = '', headers: Headers = {}): Promise<T> =>
  fetch(readUrl(url), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then((response) => response.json());

const post = async <T>(
  url: string = '',
  body: Body = {},
  headers: Headers = {}
): Promise<T> =>
  fetch(readUrl(url), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then((response) => response.json());

const put = async <T>(
  url: string = '',
  body: Body = {},
  headers: Headers = {}
): Promise<T> =>
  fetch(readUrl(url), {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then((response) => response.json());

const del = async <T>(url: string = '', headers: Headers = {}): Promise<T> =>
  fetch(readUrl(url), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then((response) => response.json());

export { get, post, put, del };
