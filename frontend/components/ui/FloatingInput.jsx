export default function FloatingInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg bg-transparent
          focus:ring-2 focus:ring-blue-500 focus:outline-none
          ${error ? "border-red-500" : ""}`}
        placeholder=" "
      />
      <label
        className={`absolute left-4 top-3 text-gray-500 text-sm transition-all
          ${value ? "-top-2 text-xs bg-white px-1" : ""}
          peer-focus:-top-2 peer-focus:text-xs`}
      >
        {label}
      </label>

      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
