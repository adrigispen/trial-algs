import React, { Component } from "react";
import { generateTestGrids } from "../services/gridService";

class Grid extends Component {
  render() {
    let grids = generateTestGrids();
    console.log(grids);
    return (
      <div className="container">
        {grids.map((el, index) => (
          <div key={index} className="gridContainer">
            <ul>
              {el.grid.map((e, i) => (
                <li key={i}>
                  {e.map((ee, ii) => (
                    <span
                      key={ii}
                      className={(ee.count === el.size).toString()}
                    >
                      {ee.val}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
