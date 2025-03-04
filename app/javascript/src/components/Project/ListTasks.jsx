import React, { useEffect, useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const ListTasks = ({ tasks, toggleView }) => {

  return(
    <div className={"tasks-wrapper"}>

      {toggleView ?
        (<ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
        >
          <Masonry>
            {tasks?.map((task) => {
              return <div className="col-12" key={task?.id}>
                <div className="p-3 border bg-light" >{task?.name}</div>
              </div>
            })}

          </Masonry>
        </ResponsiveMasonry>)
        : (
          <ul className="list-group" >
            {tasks?.map((task) => {
              return <li
                key={task.id}
                className="list-group-item"
              >{task?.name}</li>
            })}
          </ul>
        )
      }
    </div>
  )
}

export default ListTasks;
