import './PanelMain.css';

function PanelMain({ children }) {
  return (
    <div className="PanelMain">
      {children}
    </div>
  );
}

export default PanelMain;