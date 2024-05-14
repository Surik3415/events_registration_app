import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes } from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to="/events" />} />
    </Routes>
  );
};

export default AppRouter;
