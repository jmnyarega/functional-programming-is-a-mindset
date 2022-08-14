/*
 * Initial code:
 * try {
 *     saveUserData(user);
 *  } catch (error) {
 *     logToSnapErrors(error);
 *  }
 */

import compose from "../../_internals/_compose";

const user = { name: "user", email: "test@email.com" };
const products = [user];

const saveUserData = (user: any) => console.log(user);
const logToSnapErrors = (error: unknown) => console.log("This is an error!!!");

const fetchProduct = () => console.log(products, _);

// log module
// @TODO allows mutliple functions & arguments
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
const saveUserDataWithLogging = withLogging(
  compose(saveUserData, saveUserData, saveUserData)
);
const fetchProductWithLogging = withLogging(
  compose(fetchProduct, fetchProduct, fetchProduct)
);

saveUserDataWithLogging(user, 90, 909, 0);
fetchProductWithLogging();
