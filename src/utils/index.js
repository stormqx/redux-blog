/**
 * Created on 29/04/2017.
 */

export const getQuerys = (str) => {
  if (typeof str !== 'string') return;
  const string = str[0] === '?' ? str.slice(1) : str;
  const querys = {};
  string.split('&').forEach((item) => {
    const query = item.split('=');
    querys[query[0]] = query[1];
  });
  return querys; // eslint-disable-line
};

export function isEmpty(variable) {
  return (
    (Array.isArray(variable) && variable.length === 0)
    ||
    (Object.prototype.isPrototypeOf(variable) && Object.keys(variable).length === 0) // eslint-disable-line
  );
}

export function getPathname(str) {
  return str.split('/')
    .slice(1);
}
