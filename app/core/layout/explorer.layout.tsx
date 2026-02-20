import { Outlet } from "react-router";
import { Container } from "../components/container";

export default function ExplorerLayout() {
    return <Container>

        <Outlet />       
    </Container>
}