import { useEffect, useState } from "react";
import { getAllVehicles } from "../api";
import { Vehicle } from "../types";

export function useFetchVehicles() {
    const [vehicles, setVehicles] = useState<Vehicle[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        getAllVehicles()
            .then(({ data }) => {
                console.log(data);
                setVehicles(data);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return { vehicles, loading, error };
}