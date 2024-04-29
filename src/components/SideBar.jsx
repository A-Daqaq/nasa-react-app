export default function SideBar(props) {
  const { handelDisplayModal, data } = props;

  return (
    <div className="sidebar">
      <div onClick={handelDisplayModal} className="bgOverlay"></div>

      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handelDisplayModal}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
}
