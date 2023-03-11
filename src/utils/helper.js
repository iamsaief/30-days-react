/**
 * Generate a random UUID string
 *
 * @see https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
 *
 */

export const randomUUID = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');
