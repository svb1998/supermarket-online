import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "./components/ui/toaster";

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
                    <Toaster />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
