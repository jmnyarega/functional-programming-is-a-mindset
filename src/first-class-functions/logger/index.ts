/*
 * Initial code:
 * try {
 *     saveUserData(user);
 *  } catch (error) {
 *     logToSnapErrors(error);
 *  }
 */

const user = { name: "user", email: "test@email.com" };
const products = [user];

const saveUserData = (user: any) => undefined;
const logToSnapErrors = (error: unknown) => console.log("log errors");

const fetchProduct = () => products;

// log module
const withLogging =
  (f: (...args: any) => void) =>
  (...args: any) => {
    try {
      f(args);
    } catch (error: unknown) {
      logToSnapErrors(error);
    }
  };

// separating data & functions
const saveUserDataWithLogging = withLogging(saveUserData);
const fetchProductWithLogging = withLogging(saveUserData);

saveUserDataWithLogging(user, 090, 909, 0);
fetchProductWithLogging();
