
function setAccessTokenCookie(value: string, days: number) {
  if (typeof document === "undefined") {
    return undefined;
  }
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = "accessToken=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getAccessToken() {
  if (typeof document === "undefined") {
    return undefined;
  }
  const nameEQ = "accessToken=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i] || "";
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to remove a cookie
function removeAccessToken() {
  if (typeof document === "undefined") {
    return undefined;
  }
  document.cookie =
    "accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export const useCurrentUser = () => {
  const token = getAccessToken();

  const actions = {
    setAccessToken: (accessToken: string) => {
      setAccessTokenCookie(accessToken, 1);
      return accessToken;
    },
    logout: () => {
      removeAccessToken();
      return null;
    },
  };

  if (token) {
    const data = undefined // jwt.decode(token);
    return data ? [data, actions] : [null, actions];
  }

  return [null, actions];
};
