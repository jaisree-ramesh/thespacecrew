import React from "react";
import { Card } from "react-bootstrap";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div className="container mt-5">
      <div className="posts  scrollbar scrollbar-success p-5">
        {Data.map((post) => {
          return (
            <div
              key={post.id}
              className="decoration force-overflow overflow-auto m-3 "
            >
              <div className="d-flex flex-lg-row justify-content-between">
                <h4 className="p-4">{post.Name} </h4>
                <p className="p-3">
                  Science <br /> {post.Science}{" "}
                </p>
                <p className="p-3">
                  Mining <br /> {post.Mining}{" "}
                </p>
                <p className="p-3">
                  Farming <br /> {post.Farming}{" "}
                </p>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="materialChecked2"
                    checked
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}