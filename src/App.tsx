import { center } from "../styled-system/patterns";
import ToolTip from "./components/ToolTip";

function App() {
  return (
    <div
      className={center({
        h: "100vh",
      })}
    >
      <ToolTip popupContent="Sample tooltip text goes here.">hover</ToolTip>
    </div>
  );
}

export default App;
