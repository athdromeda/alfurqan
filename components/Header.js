const Header = ({ readingMode, setReadingMode }) => {
  return (
    <header className="fixed top-0 flex py-8 px-12">
      <picture>
        <img
          src={readingMode ? "/align-right.svg" : "/align-justify.svg"}
          className="cursor-pointer"
          alt="reading mode"
          onClick={() => setReadingMode((prev) => !prev)}
        />
      </picture>
    </header>
  );
};

export default Header;
