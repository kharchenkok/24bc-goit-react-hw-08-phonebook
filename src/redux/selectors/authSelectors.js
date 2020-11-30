export const isUserAuth = state=>state.userAuth.token
export const getUserName = state=>state.userAuth.user.name
export const getAuthError = state=>state.userAuth.authError