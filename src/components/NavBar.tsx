import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        padding: '16px 0px',
        backgroundColor: '#1F1D20',
        fontSize: "18px",
        fontWeight: 500,
        borderBottom: '2px solid #FF6F61',
        width: '100%',
    
    }}
    >
        <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? '#FF6F61' : '#F5ECDC',
                textDecoration: 'none',
            })}>
            Home
        </NavLink>
        <NavLink
            to="/products"
            style={({ isActive }) => ({
                color: isActive ? '#FF6F61' : '#F5ECDC',
                textDecoration: 'none',
            })}>Products
        </NavLink>
    </nav >
}