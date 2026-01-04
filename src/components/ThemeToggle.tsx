type Theme = 'light' | 'dark';

type Props = {
    theme: Theme;
    onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: Props) {
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label="Cambiar tema"
            title="Cambiar tema"
            style={{
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--text)",
                padding: "8px 12px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: 600,
            }}
        >
            {isDark ? 'Claro' : 'Oscuro'}
        </button>
    );
}