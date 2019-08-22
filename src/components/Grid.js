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
            <p>
              Max square: {el.size.max}
              <br />
              Top left at ({el.size.maxi}, {el.size.maxj})
            </p>
            <ul>
              {el.grid.map((e, i) => (
                <div key={i} className="row">
                  {e.map((ee, ii) => (
                    <div key={ii} className="cell">
                      {ee}
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
