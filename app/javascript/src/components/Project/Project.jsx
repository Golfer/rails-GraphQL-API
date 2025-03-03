import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const Project = () => {
  return (
    <>
      <h3>List of Projects</h3>
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
      >
        <Masonry>
          <div className="col-12"><div className="p-3 border bg-light">Item 1</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 2</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 3</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 4</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 5</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 6</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 7</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 8</div></div>
          <div className="col-12"><div className="p-3 border bg-light">Item 9</div></div>
        </Masonry>
      </ResponsiveMasonry>

      <ul className="list-group">
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
      </ul>

    </>
  );
}

export default Project;
