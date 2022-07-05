import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Table, Column, defaultTableRowRenderer, AutoSizer } from "react-virtualized";
import "./VirtualizedStyles.css"
import { useRef } from "react";

export default function VirtualizedDndTable({ data, setData }) {

  const maxTableWidth = useRef(1400)
  // const [editable, setEditable] = useState(false)
  const height = 50

  function Cell({ rowData, rowIndex, target, isEditable }) {
    const [edit] = useState(false);
    const [inputValue, setInputValue] = useState(rowData[target]);
    return (
      <>
        {
          edit && isEditable
            ? <input autoFocus
              type={"text"}
              className="flex w-full px-4 bg-white focus:outline-sky-500"
              style={{ height: `${height - 1}px` }}
              value={inputValue}
              onChange={(e) => {
                setData((oldData) => {
                  setInputValue(e.target.value)
                  oldData[rowIndex][target] = e.target.value;
                  return oldData;
                })
              }}
            />
            : <div
              style={{ height: `${height}px` }}
              className={`${target === "ul"
                ? "font-bold text-white"
                : "font-semibold text-neutral-400"
                } flex items-center`
              }
              onClick={() => {
                // if (!editable) return;
                // if (!isEditable) return;
                // !edit && setEdit(() => true)
              }}
            >
              {rowData[target]}
            </div>
        }
      </>
    )
  }

  const _cellRenderer = {
    ul: ({ rowData, rowIndex }) =>
      <Cell target={"ul"} rowData={rowData} rowIndex={rowIndex} />,
    lv: ({ rowData, rowIndex }) =>
      <Cell target={"lv"} rowData={rowData} rowIndex={rowIndex} />,
    id: ({ rowData, rowIndex }) =>
      <Cell target={"id"} rowData={rowData} rowIndex={rowIndex} />
  }

  const _rowGetter = ({ index }) => {
    return data[index];
  };

  const widths = {
    lv: 120,
    id: 80,
    ul: maxTableWidth.current - 120 - 80
  }

  function calculateMaxWidth() {
    return window.innerWidth > maxTableWidth.current ? maxTableWidth.current : window.innerWidth - 60
  }
  function VirtualTable() {
    return (
      <Table
        width={calculateMaxWidth()}
        height={window.innerHeight} // nav-top = 105px, header = 30px
        getContainer={wrappedInstance =>
          ReactDOM.findDOMNode(wrappedInstance.Grid)
        }
        rowRenderer={defaultTableRowRenderer}
        rowGetter={_rowGetter}
        rowHeight={height}
        headerHeight={height}
        rowCount={data.length}
        data={data}
      >
        <Column
          dataKey="ul"
          label="Vingrinājums"
          width={widths.ul}
          cellRenderer={_cellRenderer.ul}
        />
        <Column
          width={widths.lv}
          dataKey="lv"
          label="Dizļums"
          cellRenderer={_cellRenderer.lv}
        >
        </Column>
        <Column
          width={widths.id}
          dataKey="id"
          label="ID"
          cellRenderer={_cellRenderer.id}
        />
      </Table>
    )
  }

  return (
    <>
      <AutoSizer className={`${window.innerWidth < maxTableWidth && "justify-center "} 
        flex`}
        style={{ width: `${calculateMaxWidth()}px` }}
      >
        {
          ({ width, height }) => {
            return (
              <VirtualTable />
            )
          }
        }
      </AutoSizer>
    </>
  )
}