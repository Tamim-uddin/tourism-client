import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthProvider"

// setup of using Auth
const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth;