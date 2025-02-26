// TextInput Component (Reusable Input Field)
const TextInput = ({ label, type = "text", name, value, onChange, error }) => (
    <div className="mb-4 w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
        placeholder={`Enter ${label}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  ); 

  export default TextInput;