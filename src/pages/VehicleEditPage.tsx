import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { VehicleContext } from "../utils/context/VehicleContext";
import { useFetchVehicle } from "../utils/hooks/useFetchVehicle";
import { Button, Container, Flex, InputField, Page, Title } from "../utils/styles";

export const VehicleEditPage = () => {
    const { vehicle: vhContext } = useContext(VehicleContext);
    const vehicleId = (vhContext && vhContext.id) || '';
    const { vehicle, vehicleName, setVehicleName, vehicleManu, setVehicleManu, vehicleColor, setVehicleColor, vehicleType, setVehicleType, vehicleModel, setVehicleModel, vehicleCreatedAt, loading } = useFetchVehicle(vehicleId);
    const saveVehicle = async (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        console.log(vehicleName);
        console.log(vehicleManu);
        console.log(vehicleColor);
        console.log(vehicleType);
        console.log(vehicleModel);
        console.log(vehicleCreatedAt.toLocaleString());
        try {
            // const res = await updateVehicle({
            //     id: vehicleId,
            //     vehicle: vehicleName,
            //     manufacturer: vehicleName,
            //     color: vehicleName,
            //     type: vehicleName,
            //     model: vehicleName,
            //     createdAt: vehicleCreatedAt.toLocaleDateString()
            // });
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
    return vhContext ? (
        <Page>
            <Container width='800px'>
                {!loading && vehicle ? <>
                    <Title>Update vehicle</Title>
                    <form>
                        <div>
                            <label htmlFor="prefix">Vehicle name</label>
                        </div>
                        <InputField value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} style={{ margin: '10px 0' }} id="vehicleName" />
                        <div>
                            <label htmlFor="prefix">Vehicle Type</label>
                        </div>
                        <InputField value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                        <div>
                            <label htmlFor="prefix">Vehicle manufacturer</label>
                        </div>
                        <InputField value={vehicleManu} onChange={(e) => setVehicleManu(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                        <div>
                            <label htmlFor="prefix">Vehicle Model</label>
                        </div>
                        <InputField value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                        <div>
                            <label htmlFor="prefix">Vehicle color</label>
                        </div>
                        <InputField value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} style={{ margin: '10px 0' }} id="prefix" />
                        {/* <InputField type="datetime-local" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}" value={`${vehicleCreatedAt.getFullYear()}-${vehicleCreatedAt.getMonth() < 10 ? '0' + vehicleCreatedAt.getMonth() : vehicleCreatedAt.getMonth()}-${vehicleCreatedAt.getDay() < 10 ? '0' + vehicleCreatedAt.getDay() : vehicleCreatedAt.getDay()}T${vehicleCreatedAt.getHours()}:${vehicleCreatedAt.getMinutes()}:${vehicleCreatedAt.getSeconds()}`} onChange={(e) => setVehicleColor(e.target.value)} style={{ margin: '10px 0' }} id="prefix" /> */}
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