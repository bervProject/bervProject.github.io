import React, { useState, useEffect } from "react";
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      height: 600,
      width: '100%',
    },
  })
);

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 500,
  },
  {
    field: 'html_url',
    headerName: 'Link',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (<Button startIcon={<GitHubIcon />} href={params.value} variant="contained">Repo</Button>)
  }
];


const Home: React.FC = () => {
  const [projects, setProjects] = useState<Array<any>>([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("https://api.github.com/orgs/bervProject/repos")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.root}>
      <DataGrid
        rows={projects}
        loading={projects.length === 0}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Home;
