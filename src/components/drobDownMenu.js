import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: "#ff4350",
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
            "#ff4350",
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = (anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ marginLeft : "58px" }}>
    <Button
    sx = {{width : "90%" , backgroundColor : "#ff4350"}}
      id="demo-customized-button"
      aria-controls={open ? 'demo-customized-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      variant="contained"
      disableElevation
      onClick={handleClick}
      endIcon={<KeyboardArrowDownIcon />}
    >
      Genres
    </Button>
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >


    {/* TODO : GET THE GENRES FROM AN API AND THEN LOOP THEM WITH MENU ITEM  */}
      <MenuItem onClick={handleClose} disableRipple>
        <EditIcon />
        Action
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <FileCopyIcon />
        Comedy
      </MenuItem>
      {/* <Divider sx={{ my: 0.5 }} /> */}
      <MenuItem onClick={handleClose} disableRipple>
        <ArchiveIcon />
        Horror
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <MoreHorizIcon />
        More
      </MenuItem>
    </StyledMenu>
  </Box>
  );
}
