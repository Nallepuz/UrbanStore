type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function Search({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Search products..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                width: "250px",
            }}
        />
    );
}
