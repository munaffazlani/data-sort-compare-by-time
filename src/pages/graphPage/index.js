import React, { useState, useEffect } from "react";
import Graph from "../../components/graph";
import "./graphPage.scss";
export default function () {
  const initialState = [
    { passedWidth: 1, name: "name1" },
    { passedWidth: 1, name: "name2" },
    { passedWidth: 1, name: "name3" },
    { passedWidth: 1, name: "name4" },
    { passedWidth: 1, name: "name5" },
    { passedWidth: 1, name: "name6" },
    { passedWidth: 1, name: "name7" },
    { passedWidth: 1, name: "name8" },
    { passedWidth: 1, name: "name9" },
    { passedWidth: 1, name: "name10" },
    { passedWidth: 1, name: "name11" },
    { passedWidth: 1, name: "name13" },
  ];
  
  const [start, setstart] = useState(false);
  const [data, setdata] = useState(initialState);
  function runData(data) {
    let xdata = [...data];
    xdata.sort((a, b) => b.passedWidth - a.passedWidth);
    xdata = xdata.map((item, index) => {
      return { ...item, style: { top: `${index * 70 + 10}px` } };
    });
    let newData = [];
    data.forEach((item) => {
      xdata.forEach((xitem) => {
        if (item.name === xitem.name) {
          newData.push({
            ...item,
            passedWidth: item.passedWidth + Math.random(),
            style: xitem.style,
          });
        }
      });
    });
    if (data[0].passedWidth > 600) {
      setstart(false);
    }
    console.log("start", start, "data", newData);
    return newData;
  }
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setdata((data) => runData(data));
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  let winner = data[0].name;
  return (
    <div id="graphPageContainer">
      {data.map((item) => {
        item.style && item.style.top === "10px"
          ? (winner = item.name)
          : (winner = winner);
        return (
          <Graph
            style={item.style}
            passedWidth={item.passedWidth}
            name={item.name}
          />
        );
      })}
      <h1>winner : {winner}</h1>
      <button onClick={() => setstart(!start)}>
        {start ? "Stop" : "Start"}{" "}
      </button>
    </div>
  );
}
