import React, { useState} from "react"
import MaterialTable from "material-table"
import tableIcons from "./TableIcons"
import SwitchButton from "./SwitchButton"
import "./custom-table.css"

const EXCHANGE = 21.50;
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
    title: "Company",
    field: "company",
    editable: "never"
  },
  {
    title: "Salary",
    field: "salary",
    type: "currency",   
     cellStyle: (e, rowData) => {
      if (rowData.salary>=10000) {
        return { color: "green" };
      }
      else  {
        return { color: "red" };
      }
    },    
  },
];
const title = "Employee table"

const tableOptions = {
  search: true,
  actionsColumnIndex: -1,
}


export default function CustomTable() {  

  const [checked, setChecked] = useState(true);    
  const [data, setData] = useState(
    [
      { id: 1, name: "Employee 1", company: "C1", salary: 9800 },
      { id: 2, name: "Employee 2", company: "C2", salary: 20000 },
      { id: 3, name: "Employee 3", company: "C3", salary: 20000 },
      { id: 4, name: "Employee 3", company: "C4", salary: 15000 },
      { id: 5, name: "Employee 4", company: "C5", salary: 20000 },
      { id: 6, name: "Employee 5", company: "C6", salary: 20000 },
      { id: 7, name: "Employee 7", company: "C7", salary: 20000 },
      { id: 8, name: "Employee 8", company: "C8", salary: 20000 },
      { id: 9, name: "Employee 9", company: "C9", salary: 20000 },
      { id: 10, name: "Employee 10", company: "C10", salary: 20000 },
      { id: 11, name: "Employee 11", company: "C11", salary: 20000 },
      { id: 12, name: "Employee 12", company: "C12", salary: 20000 },
      { id: 13, name: "Employee 13", company: "C13", salary: 20000 },
    ]  )
       
  
  const updateCurrency = () =>{
    const temporalData = [...data];   
    temporalData.forEach((element,index)=>{
      if (checked){
        let formated = element.salary / EXCHANGE
        element.salary = formated
      }
      else{
        let formated = element.salary * EXCHANGE
        element.salary = formated
      }        
      console.log(element)
    })    
  }
  
  const handleSwitchChange = (event) => { 
    updateCurrency()
    setChecked(event.target.checked)
    console.log(checked, "actual")
  };  
  return (
    <div className="">
      <SwitchButton checked={checked} onChange={handleSwitchChange}/>
      <span>Number of rows: {data.length}</span>
      <MaterialTable  
        className="test"      
        columns={columns}
        data={data}
        title={title}
        icons={tableIcons} 
        actions={[
          {
            icon: tableIcons.AddPhotoAlternateIcon,
            tooltip: 'Upload Photo',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },        
        ]}
        options={tableOptions}
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
