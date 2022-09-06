import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function AppDragDropDemo() {
  const [pieces, setPieces] = useState<any>(
    [
      { name: "imagine 1", id: 1, category: "wip", part: 1, img: "" },
      { name: "imagine 2", id: 2, category: "wip", part: 1, img: "" },
      { name: "imagine 3", id: 3, category: "wip", part: 1, img: "" },
      { name: "imagine 4", id: 4, category: "wip", part: 2, img: "" },
      { name: "imagine 5", id: 5, category: "wip", part: 2, img: "" },
      { name: "imagine 6", id: 6, category: "wip", part: 2, img: "" },
    ]
  );
  const [part, setPart] = useState<number>(1);
  const [tasks, setTasks] = useState<any>({
    wip: [],
    complete: []
  });


  const onDragStart = (ev:any, id:number) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev:any) => {
    ev.preventDefault();
  };
  //idea: poate un buton de start si sa afisam un video al proiectului final
  const onDrop = (ev:any, cat:any) => {
    //verifica daca mai sunt imagini de drop-uit
    //marcheaza imaginile care au fost drop-uite
    //verifica ca imaginea sa fie din partea de ansamblu care trebuie
    //afiseaza imaginea ansamblului in cazul in care au fost toate imaginile drop=uite
    let id = parseInt(ev.dataTransfer.getData("id"));
    let completedTasks = pieces.filter((task:any) => {
      if (task.id === id) {
        task.category = cat;
      }
      return task;
    });

    setTasks(completedTasks);
  };

  const nextPart = () => {
    const noOfPart = part + 1;
    setPart(noOfPart);
  };

  const getDraggableItems = () => {
    let allTasks:any = {
      wip: [],
      complete: [],
    };

    pieces.forEach((t:any) => {
      if (part === t.part)
        allTasks[t.category].push(
          <div
            key={t.id}
            onDragStart={(e) => onDragStart(e, t.id)}
            draggable
            className="draggable"
            style={{ border: "1px solid red" }}>
            {t.name}
          </div>
        );
    });
    setTasks(allTasks);
  };

  useEffect(() => {
    getDraggableItems();
  }, []);

  useEffect(() => {
    getDraggableItems();
  }, [part]);

  return (
    <>
      <div className="container-drag">
        <h2 className="header">Globus Project</h2>
        <div
          className="wip"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {
            onDrop(e, "wip");
          }}>
          <span className="task-header">WIP</span>
          {tasks.wip}
        </div>
        <div
          className="droppable"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "complete")}>
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
      <button className="next-part" onClick={() => nextPart()}>
        Next part
      </button>
    </>
  );
}
