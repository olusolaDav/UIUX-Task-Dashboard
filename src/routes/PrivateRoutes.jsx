import React, { Suspense } from 'react';
import {  Routes, Route} from 'react-router-dom';
import ROUTES from '../resources/routes';
import LoadingComponent from '../components/loading/index';
import Dashboard from '../components/dashboard/index'
import { DemoPage } from '../components/demo/DemoPage';




function PrivateRoutes() {
    return (
      <Suspense fallback={<LoadingComponent loading />}>
        <Routes>
          {/* root route "Dashboard" The expected component for this task*/}
          <Route path="/" element={<Dashboard />}></Route>
          <Route
            path={ROUTES.settings}
            element={<DemoPage title={`Settings`} />}
          ></Route>

          {/* Demo routes for other Navbar Items */}
          <Route
            path={ROUTES.activities}
            element={<DemoPage title={`Activities`} />}
          ></Route>
          <Route
            path={ROUTES.users}
            element={<DemoPage title={`Users`} />}
          ></Route>
          <Route
            path={ROUTES.addeduser}
            element={<DemoPage title={`Add User`} />}
          ></Route>
          <Route
            path={ROUTES.affiliate}
            element={<DemoPage title={`Affiliate`} />}
          ></Route>
          <Route
            path={ROUTES.profile}
            element={<DemoPage title={`Profile`} />}
          ></Route>
          <Route
            path={ROUTES.logout}
            element={<DemoPage title={`Log out`} />}
          ></Route>

          <Route
            path={`/new-project`}
            element={<DemoPage title={`Add New Project`} />}
          ></Route>

          {/* <Navigate to="/" replace={true} /> */}
          {/* <Outlet /> */}
        </Routes>
      </Suspense>
    );
}

export default PrivateRoutes;
