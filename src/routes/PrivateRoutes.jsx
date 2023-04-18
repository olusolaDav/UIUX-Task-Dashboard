import React, { Suspense, lazy } from 'react';
import {  Routes, Route} from 'react-router-dom';
import ROUTES from '../resources/routes';
import LoadingComponent from '../components/loading';
import Dashboard from '../components/dashboard/index'

//const Dashboard = lazy(() => import("../components/dashboard/index"));

function PrivateRoutes() {
    return (
      <Suspense fallback={<LoadingComponent loading />}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path={ROUTES.settings} element={<div>Settings</div>}></Route>
          <Route
            path={ROUTES.activities}
            element={<div>Activities</div>}
          ></Route>
          <Route path={ROUTES.users} element={<div>Users</div>}></Route>
          <Route
            path={ROUTES.addeduser}
            element={<div>Added Users</div>}
          ></Route>
          <Route path={ROUTES.afflilite} element={<div>Afflilite</div>}></Route>
          <Route path={ROUTES.profile} element={<div>Profile</div>}></Route>
          <Route path={ROUTES.logout} element={<div>Logout</div>}></Route>

          {/* <Navigate to="/" replace={true} /> */}
          {/* <Outlet /> */}
        </Routes>
      </Suspense>
    );
}

export default PrivateRoutes;
