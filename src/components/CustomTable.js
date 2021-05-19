import React, { forwardRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import MaterialTable from "material-table"
//table icons
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
  {
    title: "ID",
    field: "id",
  },
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Salary",
    field: "salary",
    type: "numeric"
  },
];
const title = "Employee table"

export default function CustomTable() {
  const [data, setData] = useState(
    [
      { id: 1, name: "Employee 1", salary: 20000, },
      { id: 2, name: "Employee 2", salary: 20000, },
      { id: 3, name: "Employee 3", salary: 20000, },
      { id: 4, name: "Employee 3", salary: 20000, },
      { id: 5, name: "Employee 4", salary: 20000, },
      { id: 6, name: "Employee 5", salary: 20000, },
      { id: 7, name: "Employee 7", salary: 20000, },
      { id: 8, name: "Employee 8", salary: 20000, },
      { id: 9, name: "Employee 9", salary: 20000, },
      { id: 10, name: "Employee 10", salary: 20000, },
      { id: 11, name: "Employee 11", salary: 20000, },
      { id: 12, name: "Employee 12", salary: 20000, },
      { id: 13, name: "Employee 13", salary: 20000, },
    ]

  )

  return (
    <div className="">
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        icons={tableIcons}
        options={{
          search: true,
          actionsColumnIndex: -1,
        }}
        editable={{
          // isEditable: rowData => rowData.name === 'a', // only name(a) rows would be editable
          //isEditHidden: rowData => rowData.name === 'x',
          //isDeletable: rowData => rowData.name === 'b', // only name(b) rows would be deletable,
          //isDeleteHidden: rowData => rowData.name === 'y',          
          onRowAddCancelled: rowData => console.log('Row adding cancelled'),
          onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve();
              }, 1000);
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            })
        }}

      />
    </div>
  )
}
