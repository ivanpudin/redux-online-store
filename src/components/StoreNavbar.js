import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../logo.svg';

const StoreNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <img src={logo} alt="logo" width="50"></img>
            <Container>
                <Navbar.Brand href="/">Redux Online Store</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/cart'>
                        <Nav.Link>Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default StoreNavbar;
