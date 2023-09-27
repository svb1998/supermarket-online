import { Button } from "@/components/ui/button";
import Logo from "../../assets/imgs/logo-dark.png";
import { useNavigate } from "react-router-dom";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { PrivateRoutes } from "@/models/routes";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();

    const [errorLogin, setErrorLogin] = useState(false);

    const responseMessage = (response: CredentialResponse) => {
        console.log(response);
        navigate(`/${PrivateRoutes.HOME}`, { replace: true });
    };
    const errorMessage = (error) => {
        console.log("Error:", error);
        setErrorLogin(true);
    };

    return (
        <div className="flex h-screen w-screen flex-wrap ">
            <section className="bg-login-bg bg-cover  bg-no-repeat bg-center w-screen sm:w-screen h-1/2 lg:h-screen  lg:w-1/2 flex direction-normal justify-center items-center">
                <img className="rounded-full h-56 " src={Logo} alt="" />
            </section>
            <section className=" w-screen sm:w-screen h-1/2 lg:h-screen  lg:w-1/2  flex flex-col justify-center items-center ">
                {/* <Button onClick={() => navigate("/home")}>Login</Button> */}
                <div className="w-full h-56 flex flex-col justify-center items-center ">
                    <GoogleLogin
                        onSuccess={responseMessage}
                        onError={errorMessage}
                    />
                </div>
                <Alert
                    className={`w-4/6 ${errorLogin ? "visible" : "invisible"}`}
                    variant="destructive"
                >
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Login failed. Please try again
                    </AlertDescription>
                </Alert>
            </section>
        </div>
    );
}
export default Login;
