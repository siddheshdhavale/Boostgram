import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  // Opening a new Dynamic Block of code.
  // This following code is if not authenticated react fragment which renders an outlet
  return (
    <>
      { isAuthenticated ? (
        <Navigate to ="/" />
      ):
      (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout