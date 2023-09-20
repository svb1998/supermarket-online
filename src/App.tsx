import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="*" element={<>Not Found...</>}></Route>
                        <Route path="/home" element={<Home />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
