/*
 * Initial code:
 * try {
 *     saveUserData(user);
 *  } catch (error) {
 *     logToSnapErrors(error);
 *  }
 */

const user = { name: "user", email: "test@email.com" };

const saveUserData = (user: any) => console.log("save user data");
const logToSnapErrors = (error: unknown) => console.log("log errors");

// log module
const withLogging = (f: () => void) => {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
};

withLogging(() => saveUserData(user));
