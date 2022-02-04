import { useContext, useState } from "react";
import { FaChevronCircleLeft, FaPen } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { VehicleContext } from "../utils/context/VehicleContext";
import { useFetchVehicle } from "../utils/hooks/useFetchVehicle";
import { Button, Container, Flex, Grid, InputField, Page, Subtitle, Title } from "../utils/styles"

export const VehicleShowPage = () => {
    const navigate = useNavigate();
    const { vehicle: vhContext } = useContext(VehicleContext);
    const vehicleId = (vhContext && vhContext.id) || '';
    const [edit, setEdit] = useState(false);
    const { vehicle, vehicleName, setVehicleName, vehicleManu, setVehicleManu, vehicleColor, setVehicleColor, loading, error } = useFetchVehicle(vehicleId);
    const saveVehicle = async (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        console.log(vehicleName);
        console.log(vehicleManu);
        console.log(vehicleColor);
        try {
            // const res = await updateGuildPrefix(guildId, prefix);
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    return vhContext ? (
        <Page>
            <Container style={{ width: '800px' }}>
                {!loading && vehicle ? <>
                    <Title>Update vehicle</Title>
                    <form>
                        <div>
                            <label htmlFor="prefix">Vehicle name</label>
                        </div>
                        <InputField value={vehicle.vehicle} onChange={(e) => setVehicleName(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                        <div>
                            <label htmlFor="prefix">Vehicle manufacturer</label>
                        </div>
                        <InputField value={vehicle.manufacturer} onChange={(e) => setVehicleManu(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                        <div>
                            <label htmlFor="prefix">Vehicle color</label>
                        </div>
                        <InputField value={vehicle.color} onChange={(e) => setVehicleColor(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                        <Flex justifyContent="flex-end">
                            <Button variant="secondary" type="button" style={{ marginRight: '8px' }}>Reset</Button>
                            <Button variant="primary" onClick={(e) => saveVehicle(e)}>Save</Button>
                        </Flex>
                    </form>
                </> : <Flex justifyContent="center" alignItems="center">
                    {/* <MoonLoader size={30} color="white" /> */}
                    <PropagateLoader color="#fff" />
                </Flex>
                }
            </Container>
        </Page>
    ) : (
        <Navigate replace to="/dashboard" />
    )
}