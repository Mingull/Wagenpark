import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { VehicleContext } from "../utils/context/VehicleContext";

export const VehicleEditPage = () => {
    const { vehicle } = useContext(VehicleContext);
    return vehicle ? (
        <div>{vehicle.vehicle} edit page</div>
    ) : (
        <Navigate replace to="/dashboard" />
    )
}