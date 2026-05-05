import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Nav() {
    const login = () => {
        setAuth(true);
    };

    const logout = () => {
        setAuth(false);
    };
}