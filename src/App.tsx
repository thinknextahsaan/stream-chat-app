import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { SignIn, useUser } from "@clerk/clerk-react";
import { ClipLoader } from "react-spinners";
import Login from "./pages/Login";

const App = () => {
    const { user, isLoaded: isUserLoaded } = useUser();

    console.log(user);

    return (
        <>
            {isUserLoaded ? (
                <Routes>
                    <Route path="/" element={user ? <Homepage /> : <Login />} />
                </Routes>
            ) : (
                <div className="h-screen flex items-center justify-center">
                    <ClipLoader color="#000" />
                </div>
            )}
        </>
    );
};

export default App;
