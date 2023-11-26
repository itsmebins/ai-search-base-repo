type Props = {
  breadcrumbs?: JSX.Element;
  left?: JSX.Element;
  right?: JSX.Element;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  noHeader: boolean;
};

export const Header: React.FC<Props> = ({
  breadcrumbs,
  left,
  right,
  setToggleSidebar,
  noHeader,
}) => (
  <header
    className={`relative flex w-full flex-shrink-0 flex-row z-10 items-center justify-between gap-y-4 border-b border-brand-base bg-brand-sidebar px-5 py-4 ${
      noHeader ? "md:hidden" : ""
    }`}
  >
    <div className="flex items-center gap-2">
      <div className="block md:hidden">
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded border border-brand-base"
          onClick={() => setToggleSidebar((prevData) => !prevData)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {breadcrumbs}
      {left}
    </div>
    {right}
  </header>
);
