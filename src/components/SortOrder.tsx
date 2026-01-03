type SortOrder = "asc" | "desc";

type Props = {
    value: SortOrder;
    onChange: (value: SortOrder) => void;
};

export default function SortOrder({ value, onChange }: Props) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value as SortOrder)}
            style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                width: "150px",
            }} >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </ select>
    );
}