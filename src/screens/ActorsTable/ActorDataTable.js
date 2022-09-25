import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import NavigationBar from '../../components/NavigationBar';
import { Box, display } from '@mui/system';
import Checkbox from "../../components/CheckBox"
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Switch, FormGroup, FormControlLabel, Button, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../../constants/StyleConstants';
import { useState } from 'react';
import { getActors, reset } from '../../features/actors/ActorsSlice';





const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'name', width: 130 },
//   { field: 'email', headerName: 'email', width: 130 },
//   { field: 'password', headerName: 'password', width: 130 },
//   { field: 'release_date', headerName: 'Release Date', width: 130 },
//   { field: 'rating', headerName: 'Rating', width: 130 },
  {
    field: "actions",
    headerName: "actions",
    width: 130,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Link to={`/actors/edit/${params.id}`} >
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
          <Link to={`/actors/delete/${params.id}`} >
            <IconButton onClick={() => console.log(params.id)}>
              <DeleteIcon />
            </IconButton>
          </Link>
        </Box>)
    }
  },
  {
    field: "diabled",
    headerName: "diabled",
    width: 120,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <FormGroup>
            <FormControlLabel disabled={params.is_disabled} control={<Switch color="error" defaultChecked={!params.is_disabled} />} />
          </FormGroup>
        </Box>
      );
    }
  }
];

export default function ActorDataTable() {



  const dispatch = useDispatch()
  const { anError , actors , MessageRecived } = useSelector(
    (state) => state.actors
  )

  useEffect(() => {
    if (anError) {
      console.log(MessageRecived)
    }
    dispatch(getActors())
    return () => {
      dispatch(reset())
    }
  }, [dispatch, anError, MessageRecived])
  return (
    <>
      <NavigationBar />
      <br />
      <ThemeProvider theme={theme}>
        <Box>
          <Button color="neutral" variant='contained' sx={{ position: "relative", top: "40px", left: "225px" }}>Add</Button>
          <Typography color="white" fontSize="25px" sx={{ marginLeft: "25px" }}>Actors Table</Typography>
        </Box>
      </ThemeProvider>
      <Box sx={{ height: "450px", width: '98%', margin: "0 auto", marginTop: "20px" }}>
        <DataGrid
          sx={{
            borderRadius: "20px",
            backgroundColor: "white",
            boxShadow: 10,
            '& .MuiDataGrid-cell:hover': {
              color: '#ff4350',
            },
          }}
          rows={actors}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          checkboxSelection
          components={{
            BaseCheckbox: Checkbox
          }}
        />
      </Box>
    </>
  );
}
