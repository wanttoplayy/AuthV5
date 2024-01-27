/**An array of routes that are accessible to the public
 * This route do not require auth
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**An array of routes that are accessible to the public
 * This route will redirect logged in user to /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The Prefix for API  authentication routes
 * Routes that start with this prefix are used for API authenticatin purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path  after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";