import { Person } from "@/models";
import { addFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export type PeopleTableProps = object;

const PeopleTable: React.FC<PeopleTableProps> = () => {
  const [selectedPeope, setSelectedPeope] = useState<Person[]>([]);

  const pageSize = 5;

  const dispatch = useDispatch();

  const statePeople = useSelector((store: AppStore) => store.people);
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) => !!stateFavorites.find((p) => p.id === person.id);
  const filterPerson = (person: Person) => selectedPeope.filter((p) => p.id != person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeope, person];
    dispatch(addFavorite(filteredPeople));

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


  useEffect(() => {
    setSelectedPeope(stateFavorites)
  },[stateFavorites])

  return (
    <DataGrid
      rows={statePeople}
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

export default PeopleTable;
