import {  Routes, Route } from "react-router-dom";
import ROUTES from '../resources/routes';

function PublicRoutes() {
    return (
      <Routes>
        <Route path={ROUTES.login} element={<div>Log in</div>}></Route>
        <Route path={ROUTES.signup} element={<div>Sign up</div>}></Route>
        <Route path={ROUTES.forgotPassword}  element={ <div>forgot Password</div>}></Route>

      </Routes>
    );
}

export default PublicRoutes;
