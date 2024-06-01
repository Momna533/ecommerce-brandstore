const MobileDrawer = ({ mobileDrawerOpen, setMobileDrawerOpen }) => {
  return (
    <div className="mobile__drawer">
      MobileDrawer
      <button onClick={() => setMobileDrawerOpen(false)}>close</button>
    </div>
  );
};

export default MobileDrawer;
