import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/globalStyle";
import { UserProvider } from "./contexts/userContext/userContext";

function App() {
    return (
        <>
            <ToastContainer />
            <GlobalStyle />
            <UserProvider>
                <RoutesMain />
            </UserProvider>
        </>
    );
}

export default App;
