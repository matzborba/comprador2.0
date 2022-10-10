function EyeButton({ action }) {
  return (
    <button
      type="button"
      onClick={action}
      className="boder-red absolute right-4 flex h-full items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="#212529"
          strokeWidth="1.5"
        ></circle>
        <path
          stroke="#212529"
          strokeWidth="1.5"
          d="M21 12s-4.03 5-9 5-9-5-9-5 4.03-5 9-5 9 5 9 5z"
        ></path>
      </svg>
    </button>
  );
}
export { EyeButton };
