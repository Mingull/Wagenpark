import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { Spinner } from './components/Spinner';
import { LoginPage, MenuPage, VehicleCreatePage, VehicleEditPage, VehicleShowPage } from './pages';
import { VehicleContext } from './utils/context/VehicleContext';
import { useFetchVehicles } from './utils/hooks/useFetchVehicles';
import { Flex } from './utils/styles';
import { Vehicle } from './utils/types';

function App() {
	const [vehicle, setVehicle] = useState<Vehicle>();
	const { vehicles, loading, error } = useFetchVehicles();
	const updateVehicle = (vehicle: Vehicle) => setVehicle(vehicle);

	if (loading) return <Spinner children={
		<PropagateLoader color="#fff" />
	} />
	return (
		<VehicleContext.Provider value={{ vehicle, updateVehicle }}>
			{vehicles && !error ? (
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/dashboard" element={<MenuPage />} />
					<Route path="/dashboard/show" element={<VehicleShowPage />} />
					<Route path="/dashboard/create" element={<VehicleCreatePage />} />
					<Route path="/dashboard/edit" element={<VehicleEditPage />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="*" element={
						<div style={{ height: '100%' }}>
							<Flex justifyContent='center' alignItems='center' flexDirection='column'>
								<h1>404</h1>
								<p>Not Found</p>
							</Flex>
						</div>
					} />
				</Routes>
			)}
		</VehicleContext.Provider>
	);
}

export default App;
