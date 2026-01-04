import { NavLink } from 'react-router-dom';
import ThemeToggle from "./ThemeToggle";

type theme = "dark" | "light";

type Props = {
    theme: theme;
    onToggle: () => void;
};

export default function NavBar({ theme, onToggle }: Props) {

    return <nav
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            padding: "16px 0px",
            backgroundColor: "var(--surface-2)",
            fontSize: "18px",
            fontWeight: 500,
            borderBottom: "2px solid var(--accent)",
            width: "100%",
        }}
    >
        <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? "var(--accent)" : "var(--text)",
                textDecoration: "none",
              })}>
            Home
        </NavLink>
        <NavLink
            to="/products"
            style={({ isActive }) => ({
                color: isActive ? "var(--accent)" : "var(--text)",
                textDecoration: "none",
              })}>Products
        </NavLink>
        <ThemeToggle theme={theme} onToggle={onToggle} />
    </nav >
}