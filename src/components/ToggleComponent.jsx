import useToggle from "../hooks/useToggle";

function ToggleComponent() {
  const [isVisisble, toggleViisible] = useToggle();

  return (
    <div className="text-center space-y-3">
      <button
        onClick={toggleViisible}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-8"
      >
        {isVisisble ? "Hide" : "show"} Box
      </button>
      {isVisisble && (
        <div className="w-40 h-40 bg-green-500 mx-auto rounded"></div>
      )}
    </div>
  );
}
export default ToggleComponent;
