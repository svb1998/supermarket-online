import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "./components/ui/toaster";
import Cart from "./pages/Cart/Cart";
import { PrivateRoutes, PublicRoutes } from "./models/routes";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={PublicRoutes.LOGIN}
                            element={<Login />}
                        ></Route>
                        <Route path="*" element={<>Not Found...</>}></Route>
                        <Route
                            path={PrivateRoutes.HOME}
                            element={<Home />}
                        ></Route>
                        <Route
                            path={PrivateRoutes.CART}
                            element={<Cart />}
                        ></Route>
                    </Routes>
                    <Toaster />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
