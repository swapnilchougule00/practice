/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useState } from "react";

const Folders = ({ files }) => {
  const [isOpened, setIsOpened] = useState(false);
  console.log(files);
  if (files.isFolder) {
    return (
      <>
        <div onClick={() => setIsOpened(true)}>{files.name}</div>
        <br />
        <div className="ml-4">
          {isOpened && files.children.map((item) => <Folders files={item} />)}
        </div>
      </>
    );
  }
  return <div>{files.name}</div>;
};

export default Folders;
