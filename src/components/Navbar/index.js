import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthButton from "../AuthButton";
import { Link } from "react-router-dom";

function BookNavbar({ displayLogout = true }) {
	const baseUrl = "/Team-Artem---BookShare";
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand>
					<Link style={{ textDecoration: "none" }} to="/home">
						BookShare
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link>
							<Link style={{ textDecoration: "none" }} to="/about-us">
								About
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link style={{ textDecoration: "none" }} to="/home">
								Home
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link style={{ textDecoration: "none" }} to="/post">
								Post
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link style={{ textDecoration: "none" }} to="/request">
								Request
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link style={{ textDecoration: "none" }} to="/my-account">
								My Account
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link style={{ textDecoration: "none" }} to="/profile">
								Profile
							</Link>
						</Nav.Link>
						<Nav.Link href={`${baseUrl}/settings`}>
							<Link style={{ textDecoration: "none" }} to="/settings">
								Settings
							</Link>
						</Nav.Link>
					</Nav>
					<AuthButton />
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Find a book..."
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default BookNavbar;
