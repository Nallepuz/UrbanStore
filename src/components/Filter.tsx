type Option<filter extends string> = {
    label: string;
    value: filter;
};

type Props<filter extends string> = {
    label: string;
    value: filter;
    options: readonly Option<filter>[];
    onChange: (value: filter) => void;
};

export default function Filter<Filter extends string>({
    label,
    value,
    options,
    onChange,
}: Props<Filter>) {

    return (
        <label style={{ display: "block", marginBottom: "1rem", color: "var--text" }}>
            {label}{" "}
            <select value={value} onChange={(e) => onChange(e.target.value as Filter)}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </label>
    );
}