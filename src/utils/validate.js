export const checkValidateData = (email, password) => {
  const isEmailValidated =
    /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
  const isPasswordValidated = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password
  );

  if (!isEmailValidated) return "Email is not Valid";
  if (!isPasswordValidated)
    return "Password should contain at least 8 characters, an uppercase letter, a lowercase letter, a special character and a number.";

  return null;
};
