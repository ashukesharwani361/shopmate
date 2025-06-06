import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import ItemsList from "../pages/ItemsList";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ItemsList />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

