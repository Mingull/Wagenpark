import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { VehicleContext } from "../utils/context/VehicleContext";
import { AppBarStyle } from "../utils/styles"

export const Navbar = () => {
    const { vehicle } = useContext(VehicleContext);
    return vehicle ? (
        <AppBarStyle>
            <h1 style={{ fontWeight: 'normal', fontSize: '24px' }}>Wagen park</h1>
        </AppBarStyle>
    ) : (
        <Navigate replace to="/" />
    )
}