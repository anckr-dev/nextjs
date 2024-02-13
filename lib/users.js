const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecretKey = 'process.env.JWT_SECRET_KEY';
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
/* The `users` variable is an array that stores user objects. Each user object represents a user with
properties such as `id`, `username`, `email`, and `password`. In this case, there is only one user
object in the array with the following values: */

let users = [
  {
    id: 0,
    username: "ron",
    email: "ron@anckr.com",
    password: "$2b$10$Sl8BsmAmJAKUCKlG2FlwZOgbiCGMkEkpgjEfc/FDdFMcq6RFaZjw2",
  },
];
/**
 * The function `findUser` searches for a user in an array of users based on their username.
 * @param username - The username parameter is a string that represents the username of the user we are
 * trying to find.
 * @returns the user object that matches the given username.
 */
export function findUser(username) {
  return users.find((user) => user.username === username);
}

export function isUserExists(username) {
  return findUser(username) || false;
}
/**
 * The login function checks if the provided username and password are valid, and if so, generates a
 * JSON Web Token (JWT) for authentication.
 * @param username - The `username` parameter is the username entered by the user during the login
 * process. It is used to identify the user and find their corresponding account information in the
 * system.
 * @param password - The `password` parameter is the password entered by the user during the login
 * process.
 * @returns an object with either an error or a payload property. If there is an error, the object will
 * have an error property with a specific error code and message. If there is no error, the object will
 * have a payload property with a token value.
 */
export function login(username, password) {
  if (!username || !password) {
    return {
      error: "WRONG_CREDENTIAL",
      message: `Both Username and Password are required.`,
    };
  }

  if (!isUserExists(username)) {
    return {
      error: "USER_NOT_FOUND",
      message: `${username} is not defined, make sure the user is registered before.`,
    };
  }

  const user = findUser(username); //user={}
  const hashedPassword = hashPassword(password);
  // console.log(hashedPassword);

  if (!checkPassword(hashedPassword, user.password)) {
    return {
      error: "WRONG_CREDENTIAL",
      message: "Your Password is wrong. Shame on you!(^_^)",
    };
  }

  const token = jwt.sign({ username: user.username, email: user.email, id: user.id }, jwtSecretKey, {
    expiresIn: 3000, // 50min
  });

  return {
    payload: {
      token,
    },
  };
}


/**
 * The `register` function in JavaScript is used to register a user by validating their credentials and
 * adding them to a list of users if they are valid.
 * @returns an object with two properties: "isSuccessful" and "payload". The value of "isSuccessful" is
 * set to true, indicating that the registration was successful. The value of "payload" is an empty
 * object.
 */
export function register({ username, password, email }) {
  if (!username || !password || !email) {
    return errorMessage("WRONG_CREDENTIAL", `Username, password and email is required.`);
  }

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    return errorMessage("WRONG_CREDENTIAL", `${email} is wrong.`);
  }

  if (isUserExists(username)) {
    return errorMessage(
      "DUPLICATE_USER",
      `${username} has already registered. Try another username(But never mind, don't do this.)`
    );
  }

  const hashedPassword = hashPassword(password);
  const lastUser = users[users.length - 1];
  console.log(lastUser);
  const id = lastUser ? lastUser.id + 1 : 0;
  console.log("users:before", users.length);
  users = users.concat([
    {
      username,
      password: hashedPassword,
      email,
      id,
    },
  ]);
  console.log("users:after", users.length);
  console.log("users", JSON.stringify(users, null, 2));

  return {
    isSuccessful: true,
    payload: {},
  };
}

/**
 * The function `whoAmI` returns user information if the user exists, otherwise it returns an error
 * message.
 * @param username - The `username` parameter is a string that represents the username of a user.
 * @returns an object with either an error or a successful payload. If the username is not defined or
 * does not exist, an error object is returned with the error code "USER_NOT_FOUND" and a message
 * indicating that the user is not defined or registered. If the username exists, a successful payload
 * object is returned with the username, id, and email of the user.
 */
export function whoAmI(username) {
  if (!username || !isUserExists(username)) {
    return {
      error: "USER_NOT_FOUND",
      message: `${username} is not defined, make sure the user is registered before.`,
    };
  }

  const user = findUser(username);
  return {
    isSuccessful: true,
    payload: {
      username: user.username,
      id: user.id,
      email: user.email,
    },
  };
}

/**
 * The function hashPassword uses bcrypt to hash a given password using a salt.
 * @param password - The password parameter is the plain text password that you want to hash.
 * @returns the hashed version of the password using bcrypt.
 */
function hashPassword(password) {
  return bcrypt.hashSync(password, salt);
}

/**
 * The function checks if a given current hashed password matches a stored hashed password.
 * @param currentHashedPassword - The current hashed password is the hashed version of the password
 * that the user is trying to authenticate with. This is typically stored in a database or some other
 * secure storage.
 * @param hashedPassword - The hashed password is the password that has been transformed using a
 * cryptographic hash function. It is a one-way transformation, meaning it cannot be reversed to obtain
 * the original password. The hashed password is typically stored in a database for security purposes.
 * @returns the result of the comparison between the current hashed password and the hashed password.
 */
function checkPassword(currentHashedPassword, hashedPassword) {
  return bcrypt.compare(currentHashedPassword, hashedPassword);
}

/**
 * The function `verifyToken` verifies the authenticity of a token using a secret key.
 * @param token - The token parameter is a string that represents a JSON Web Token (JWT).
 * @returns the result of the jwt.verify() function, which is the verification of the token using the
 * jwtSecretKey.
 */
export function verifyToken(token) {
  return jwt.verify(token, jwtSecretKey);
}

/**
 * The function `errorMessage` returns an object with properties `isSuccessful`, `error`, and
 * `message`, with `isSuccessful` set to `false` and the other properties set based on the provided
 * arguments.
 * @param error - The error parameter is used to pass in any error object or error message that
 * occurred during the execution of a function or operation. It can be a string, an error object, or
 * any other type of error representation.
 * @param message - The `message` parameter is a string that represents the error message or
 * description. It is used to provide additional information about the error that occurred.
 * @returns An object with the properties "isSuccessful", "error", and "message" is being returned.
 */
function errorMessage(error, message) {
  return {
    isSuccessful: false,
    error,
    message,
  };
}
