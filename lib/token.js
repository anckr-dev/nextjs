/**
 * * Remove stored token
 * It should remove the Token into the SessionStorage or LocalStorage
 *
 * @returns {void}
 */
export function removeToken() {
  window.localStorage.removeItem("anckr_token");
  window.sessionStorage.removeItem("anckr_token");
}

/**
 * * Get the Token if presents.
 *
 * @returns {string | undefined}
 */
export function getToken() {
  return window.localStorage.getItem("anckr_token") || window.sessionStorage.getItem("anckr_token");
}
