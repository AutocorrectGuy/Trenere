import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react"
import { useTable } from "react-table"
import SelectedExerciseModal from "../ExerciseLibrary/SelectedExerciseModal";


export default function PaginatedTable({ data, setData, itemsPerPage }) {

  function PaginateDemoApp({ perPage }) {
    const [visibleData, setVisibleData] = useState(() => data.slice(0, itemsPerPage))
    const [pageOffset, setPageOffset] = useState(0);
    const [pageCount] = useState(Math.ceil(data.length / perPage));

    useEffect(() => {
      setVisibleData(() => data.slice(
        itemsPerPage * (pageOffset),
        itemsPerPage * (pageOffset) + itemsPerPage))
    }, [pageOffset]);

    const handlePageChange = (event) => {
      setPageOffset(event.selected)

    };

    function MyTable() {
      const [modalData, setModalData] = useState({ isOpen: false, data: "" })

      const columns = React.useMemo(
        () => [
          { Header: 'Vingrinājums', accessor: 'ul' },
          { Header: 'MM grupa', accessor: 'group' },
          { Header: 'Galvenais mm', accessor: 'main_mm' },
          { Header: 'Pakārtotie mm', accessor: 'secondary_mm' },
          { Header: 'Ekipējums', accessor: 'equipment' },
          { Header: 'Fiziskā īp', accessor: 'phys_a' },
        ],
        []
      )

      const data = React.useMemo(() => visibleData, [])
      const tableInstance = useTable({ columns, data })

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

      return (
        <>
          <table className="w-full rounded-t-[8px] overflow-hidden"
            {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr className="h-[50px] bg-slate-700 uppercase"
                  {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th className="text-left px-4"
                      {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr className="h-[50px] bg-[#1F2937] hover:bg-[#4B5563] border-b border-b-[#111827] cursor-pointer"
                    {...row.getRowProps()}
                    onClick={() => {
                      setModalData({
                        isOpen: true,
                        data: row
                      })
                      console.log(row)
                    }}
                  >
                    {row.cells.map(cell => {
                      return (
                        <td className={`px-4 
                        ${cell.getCellProps().key.includes("_ul")
                            ? "text-white font-bold"
                            : "text-slate-400 font-normal opacity-75"}`}
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          {
            modalData.isOpen &&
            <SelectedExerciseModal data={modalData} setData={setModalData} />
          }
        </>
      )
    }

    return (
      <div className="w-full shadow-sm shadow-slate-900 bg-[#334155] bg-opacity-25 rounded-md">
        <MyTable />
        <ReactPaginate
          containerClassName="bg-transparent h-[70px] flex items-center justify-center border-slate-800 px-6"
          previousLabel="Iepriekšējā"
          nextLabel="Nākošā"
          breakLabel="..."

          pageClassName="active:translate-y-px select-none mx-1 bg-slate-800 rounded-md hover:bg-slate-700 rounded-md"
          pageLinkClassName="rounded-md shadow-sm shadow-slate-800 select-none z-1 w-full flex h-full text-sm text-slate-300 font-medium px-4 py-2 hover:text-slate-100"
          previousLinkClassName="active:translate-y-px shadow-sm shadow-slate-800 select-none mr-1 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-300 bg-slate-700 hover:bg-slate-600 hover:text-slate-100"
          nextLinkClassName="active:translate-y-px shadow-sm shadow-slate-800 select-none ml-1 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-300 bg-slate-700 hover:bg-slate-600 hover:text-slate-100"
          breakLinkClassName="select-none mx-1 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-slate-300 bg-slate-700 hover:bg-slate-700 hover:text-slate-700 hover:bg-slate-700 hover:text-slate-100"
          activeClassName="select-none z-[10] text-neutral-500 text-sm font-medium outline-[2px] bg-slate-600 outline outline-slate-700"

          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={handlePageChange}
          forcePage={pageOffset}
        />
      </div>
    );
  }

  return (
    <>
      <PaginateDemoApp perPage={itemsPerPage} />
    </>
  )
}
