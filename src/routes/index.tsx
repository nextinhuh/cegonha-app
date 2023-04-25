import { useEffect, useState } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
    const [activeRoute, setActiveRoute] = useState(AppRoutes);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    }, []);

    return activeRoute;
}