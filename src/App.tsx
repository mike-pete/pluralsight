import { center } from "../styled-system/patterns";
import ToolTip from "./components/ToolTip/ToolTip";

function App() {
  return (
    <div
      className={center({
        h: "100vh",
      })}
    >
      <ToolTip popupContent="Sample tooltip text goes here." theme="barbie">
        hover
      </ToolTip>
      <ToolTip popupContent="Sample tooltip text goes here.">hover</ToolTip>
    </div>
  );
}

export default App;
