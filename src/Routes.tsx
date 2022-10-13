import { Routes, Route, BrowserRouter } from "react-router-dom";

import { CalculoPresumido } from "./pages/calculoPresumido";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CalculoPresumido />} /> {/* Temporario */}
                {/* <Route path="/" element={<MainPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

