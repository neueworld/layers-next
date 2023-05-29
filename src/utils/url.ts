const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_HOST}/api/v1`;
export default BASE_URL;

const APP_URL = process.env.NEXT_PUBLIC_BASE_HOST;

const AUTH_URL = `${process.env.NEXT_PUBLIC_BASE_HOST}/api/auth`;

const AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN;

export { APP_URL, AUTH_URL, AUTH_DOMAIN };
