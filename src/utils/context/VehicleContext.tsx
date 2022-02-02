import { createContext } from "react";
import { Vehicle } from "../types";

type VehicleContextType = {
    vehicle?: Vehicle;
    updateVehicle: (vehicle: Vehicle) => void;
}

export const VehicleContext = createContext<VehicleContextType>({
    updateVehicle: () => { },
});