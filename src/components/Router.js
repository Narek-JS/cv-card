import { Routes, Route } from "react-router-dom";
import { Home, Resume } from "../pages";
import { PATHS } from "../consts/path";

const Router = () => {
    return (
        <Routes>
            <Route exact path={PATHS.HOME} element={<Home/>} />
            <Route exact path={PATHS.RESUME} element={<Resume />}/>
        </Routes>
    );
};

export { Router }