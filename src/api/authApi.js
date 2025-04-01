const USER_KEY = "user";

// 🔐 Hardcoded credentials (mock)
const VALID_USERNAME = "test";
const VALID_PASSWORD = "pass";

export const login = (username, password) => {
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    const user = { username };
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return Promise.resolve(user);
  } else {
    return Promise.reject(new Error("Invalid username or password."));
  }
};

export const logout = () => {
  localStorage.removeItem(USER_KEY);
  return Promise.resolve();
};

export const getCurrentUser = () => {
  const stored = localStorage.getItem(USER_KEY);
  return stored ? JSON.parse(stored) : null;
};