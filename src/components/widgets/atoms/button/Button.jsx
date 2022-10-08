function Button({ text, onClick }) {
  return (
    <div className="">
      <button
        onClick={onClick}
        className=" flex h-8 w-28 cursor-pointer select-none items-center gap-3 rounded-md border border-neutra-400 px-4 text-sm outline-none"
      >
        <span>{text}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 12 12"
        >
          <g clipPath="url(#clip0_2113_5744)">
            <path
              fill="#000"
              d="M10.439 6.367a1.594 1.594 0 01-3.098 0H1.053a.367.367 0 110-.734H7.34a1.593 1.593 0 013.098 0h.41a.367.367 0 110 .734h-.41zm-1.55-1.224a.858.858 0 10.003 1.716.858.858 0 00-.002-1.716zM4.562 1.959a1.594 1.594 0 01-3.098 0h-.41a.367.367 0 010-.735h.41a1.594 1.594 0 013.098 0h6.288a.367.367 0 110 .735H4.56zM3.012.735a.858.858 0 000 1.714.858.858 0 000-1.714zm3.753 10.04a1.593 1.593 0 01-3.098 0H1.053a.367.367 0 110-.734h2.614a1.593 1.593 0 013.098 0h4.084a.367.367 0 010 .734H6.765zM5.216 9.551a.858.858 0 000 1.714.858.858 0 000-1.714z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2113_5744">
              <path fill="#fff" d="M0 0H12V12H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}
export { Button };
