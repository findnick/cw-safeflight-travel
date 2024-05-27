import HeaderText from "./HeaderText";

const Header = ({ headingStart, headingEnd, para, img, children }) => {
  return (
    <div
      className="flex flex-col p-20 gap-4"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <HeaderText>{headingStart}</HeaderText>
      <HeaderText>{headingEnd}</HeaderText>
      <h4 className="font-light text-lg text-white">{para}</h4>
      {children}
    </div>
  );
};

export default Header;
