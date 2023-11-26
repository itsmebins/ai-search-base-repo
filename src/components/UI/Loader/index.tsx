export const Loader = () => (
  <>
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-25 pointer-events-none z-50"></div>
    <div className="fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center">
      <div className="w-[80px] flex items-center justify-center">
        <span className="w-full loading loading-spinner text-primary"></span>
      </div>
    </div>
  </>
);
