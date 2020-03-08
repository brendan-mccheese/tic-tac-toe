import React from "react";
import style from "./Board.module.css";
import { Cell } from "./Cell";

export const Board = () => (
    <div className={style.board}>
        <div className={`${style.row} ${style.borderBottom}`}>
            <Cell rowId={0} cellId={0} border="right" />
            <Cell rowId={0} cellId={1} border="right" />
            <Cell rowId={0} cellId={2} />
        </div>
        <div className={`${style.row} ${style.borderBottom}`}>
            <Cell rowId={1} cellId={0} border="right" />
            <Cell rowId={1} cellId={1} border="right" />
            <Cell rowId={1} cellId={2} />
        </div>
        <div className={style.row}>
            <Cell rowId={2} cellId={0} border="right" />
            <Cell rowId={2} cellId={1} border="right" />
            <Cell rowId={2} cellId={2} />
        </div>
    </div>
);
