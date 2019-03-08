export const PREFIX = '[AUTH]'
export const LOGIN  = `${PREFIX} LOGIN`;
export const REGISTER  = `${PREFIX} REGISTER`;
export const LOGIN_OK = `${PREFIX} LOGIN_OK`;
export const REGISTER_OK = `${PREFIX} REGISTER_OK`;

//ავტორიზაციის მოქმედება პარამეტრი ობექტი მომხარებლის მონაცემებით
export const login = (user) => ({
  type: LOGIN,
  payload: user
});
//რეგისტრაციის მოქმედება პარამეტრი ობექტი მომხარებლის მონაცემებით
export const register = (user) => ({
  type: REGISTER,
  payload: user
});
