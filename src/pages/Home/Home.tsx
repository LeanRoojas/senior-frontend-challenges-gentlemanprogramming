import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";

export type HomeProps = {
  id: string;
};

const Home: React.FC<HomeProps> = () => {
  const [selectedPeope, setSelectedPeope] = useState<Person[]>([]);

  const pageSize = 5;

  const findPerson = (person: Person) => !!selectedPeope.find((p) => p.id === person.id);

  const filterPerson = (person: Person) => selectedPeope.filter((p) => p.id != person.id);

  const handleChange = (person: Person) => {
    // const;
    setSelectedPeope(findPerson(person) ? filterPerson(person) : [...selectedPeope, person]);
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sorteable: false,
      headerName: "",
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      initialState={{
        pagination: {
          paginationModel: { pageSize: pageSize, page: 0 },
        },
      }}
    />
  );
};

export default Home;
