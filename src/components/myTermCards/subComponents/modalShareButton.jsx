const ModalShareButton = (props) => {
  const { item, link } = props;

  const handlechange = () => {
    link(item.link);
  };

  return (
    <>
      {/* button is selecting the className as per the condition applied */}
      <button
        className={`modal-icon ${
          item.name === "whatsapp"
            ? "a"
            : item.name === "email"
            ? "e"
            : item.name === "twitter"
            ? "d"
            : "b"
        }`}
        onClick={handlechange}
      >
        {item.icon}
      </button>
    </>
  );
};

export default ModalShareButton;
