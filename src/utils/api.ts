import axios, { AxiosRequestConfig } from "axios";
import { User, Vehicle } from "./types";

const CONFIG: AxiosRequestConfig = {
    withCredentials: false,
};
const API_URI = 'https://60c312da917002001739dfbf.mockapi.io/api/v1';
export const getAllVehicles = () =>
    axios.get<Vehicle[]>(`${API_URI}/vehicles/`, CONFIG);

export const getVehicle = (id: string) =>
    axios.get<Vehicle>(`${API_URI}/vehicles/${id}`, CONFIG);

export const updateVehicle = (vehicle: Vehicle) =>
    axios.put<Vehicle>(`${API_URI}/vehicles/${vehicle.id}`, { ...vehicle }, CONFIG);