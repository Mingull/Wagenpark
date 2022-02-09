import { useEffect, useState } from "react";
import { getVehicle } from "../api";
import { Vehicle } from "../types";

export function useFetchVehicle(id: string) {
    const [vehicle, setVehicle] = useState<Vehicle>();
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleManu, setVehicleManu] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleCreatedAt, setVehicleCreatedAt] = useState<Date>(new Date());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        getVehicle(id)
            .then(({ data }) => {
                setVehicle(data);
                setVehicleName(data.vehicle);
                setVehicleType(data.type);
                setVehicleManu(data.manufacturer);
                setVehicleModel(data.model);
                setVehicleColor(data.color);
                setVehicleCreatedAt(new Date(data.createdAt));
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);
    return { vehicle, vehicleName, setVehicleName, vehicleManu, setVehicleManu, vehicleColor, setVehicleColor, vehicleType, setVehicleType, vehicleModel, setVehicleModel, vehicleCreatedAt, setVehicleCreatedAt, loading, error };
}