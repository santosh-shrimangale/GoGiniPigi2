import { getLocalStorageToken } from ".";
/** ****Function is driver function for authenticate*******
 * ****user and route for which it will**************
 * ****return true and false************************** */

function authDriver(route, userData, pathname) {
  try {
    let checkData = getLocalStorageToken();
    let user = "";
    if (pathname.search("provider") >= 0) {
      user = "provider";
    } else {
      user = "user";
    }

    let userCheck = userData?.user_type ?? user;

    if (userCheck === "user" && route?.commonRoute === true) {
      return true;
    } else if (route.private && userData?.user_type === user) {
      // ********For secure route**************
      if (!!checkData) {
        return true;
      } else {
        return false;
      }
    } else {
      // **Non secure route****
      if (!!checkData) {
        return false;
      }
      if (route.private === false) {
        return true;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }
}

export default authDriver;
