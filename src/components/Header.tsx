import Logo from '../images/Logo.png';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      backgroundColor: "var(--surface-2)",
      color: "var(--text)",
      borderBottom: "1px solid var(--border)",
      padding: '10px 20px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }} >
      <h1 style={{ margin: 0, fontSize: "24px" }}>
        <img style={{
          height: "100px",
        }} src={Logo} alt="Urban Store Logo" />
      </h1>
      <p style={{ margin: 0, fontSize: "14px" }}>
        Your one-stop shop for urban essentials
      </p>
    </header>
  );
}