import { Person } from "@/models";
import { removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export type FavoriteTableProps = object;

const FavoriteTable: React.FC<FavoriteTableProps> = () => {

  const pageSize = 5;

  const dispatch = useDispatch();

  const stateFavorite = useSelector((store: AppStore) => store.favorites);



  const handleClick = (person: Person) => {

    dispatch(removeFavorite(person));

  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sorteable: false,
      headerName: "",
      renderCell: (params: GridRenderCellParams) => (
        <IconButton color="primary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
          <Delete />
        </IconButton>
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
      rows={stateFavorite}
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

export default FavoriteTable;
