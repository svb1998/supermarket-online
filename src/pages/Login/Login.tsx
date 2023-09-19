import { Button } from "@/components/ui/button";
import Logo from "../../assets/imgs/logo-dark.png";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-screen flex-wrap ">
            <div className="bg-login-bg bg-cover  bg-no-repeat bg-center w-screen sm:w-screen h-1/2 lg:h-screen  lg:w-1/2 flex direction-normal justify-center items-center">
                <img className="rounded-full h-56 " src={Logo} alt="" />
            </div>
            <div className=" w-screen sm:w-screen h-1/2 lg:h-screen  lg:w-1/2  flex direction-normal justify-center items-center ">
                <Button onClick={() => navigate("/home")}>Login</Button>
            </div>
        </div>
    );
}
export default Login;
