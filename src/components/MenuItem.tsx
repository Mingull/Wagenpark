import { Flex, MenuItemStyle } from "../utils/styles"
import { Vehicle } from "../utils/types";
import ReactTooltip from 'react-tooltip';
import { FaTimes } from "react-icons/fa";
import { VehicleContext } from "../utils/context/VehicleContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { deleteVehicle } from "../utils/api";

export type Props = {
    vehicle: Vehicle;
}

export const MenuItem = ({ vehicle }: Props) => {
    const navigate = useNavigate();
    const { updateVehicle } = useContext(VehicleContext);
    const handleDelete = async (vehicle: Vehicle) => {
        try {
            const res = await deleteVehicle(vehicle);
            console.log(res);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
        }
    }
    const handleShowClick = (vehicle: Vehicle) => {
        updateVehicle(vehicle);
        navigate('/dashboard/show');
    }
    return vehicle && (
        <MenuItemStyle onClick={() => handleShowClick(vehicle)} data-tip={`Klik om voledig te bekijken`}>
            <ReactTooltip effect="solid" type="light" />
            <div style={{ position: 'relative' }}>
                <h3>{vehicle.vehicle}</h3>
                <FaTimes onClick={() => handleDelete(vehicle)} data-tip={`Delete Wagen`} size={25} style={{ position: 'absolute', right: '-15px', top: '-15px', cursor: 'pointer' }} color="hsl(0,90%,60%)" />
            </div>
            <Flex justifyContent="space-between" alignItems="center" style={{ position: 'relative' }}>
                <h4>{vehicle.manufacturer}</h4>
                <div data-tip={`kleur: ${vehicle.color}`} style={{ backgroundColor: vehicle.color === "mint green" ? "#cfffe5" : vehicle.color, width: '30px', height: '30px', borderRadius: '50%' }}></div>
                <h4>{vehicle.type}</h4>
            </Flex>
        </MenuItemStyle>
    )
}