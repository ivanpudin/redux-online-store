import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../logo.svg';

const StoreNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <img src={logo} alt="logo" width="50"></img>
            <Container>
                <Navbar.Brand href="/">Redux Online Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default StoreNavbar;
