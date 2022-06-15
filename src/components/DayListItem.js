import React from "react";
import classNames from "classnames";
import "./DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames("day", {
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots
  });
  
// call mentor to explain formatSpots
  const formatSpots = function (spots) {
    const spotCount = spots === 0 ? "no" : spots;
    const oneSpot = spots === 1 ? "spot" : "spots";

    return `${spotCount} ${oneSpot} remaining`

  }


  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}