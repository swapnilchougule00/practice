import { structure } from "./consts";
import Folders from "./Folders";

const FolderIndex = () => {
  return (
    <div>
      <Folders files={structure} />
    </div>
  );
};

export default FolderIndex;
