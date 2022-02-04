import { Flex, MenuItemStyle } from "../utils/styles"
import { Vehicle } from "../utils/types";
import ReactTooltip from 'react-tooltip';

export type Props = {
    vehicle: Vehicle;
}

export const MenuItem = ({ vehicle }: Props) => {
    return (
        <MenuItemStyle data-tip={`Klik om voledig te bekijken`}>
            <ReactTooltip effect="solid" type="light" />
            <div style={{ position: 'relative' }}>
                <h3>{vehicle.vehicle}</h3>
                <div data-tip={`kleur: ${vehicle.color}`} style={{ position: 'absolute', right: '0', top: '0', backgroundColor: vehicle.color === "mint green" ? "#cfffe5" : vehicle.color, width: '30px', height: '30px', borderRadius: '50%' }}></div>
            </div>
            <Flex justifyContent="space-between" alignItems="center">
                <h4>{vehicle.manufacturer}</h4>
                <h4>{vehicle.type}</h4>
            </Flex>
        </MenuItemStyle>
    )
}