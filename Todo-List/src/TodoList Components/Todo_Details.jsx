import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetails(
    {setOpenDialog,
    openDialog, todoDetails,
     setTodoDetails})
{
 return <Fragment>
    <Dialog open={openDialog} onClose={()=>{setOpenDialog(false)}}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
            
    <Button onClick={()=>{setTodoDetails(null)
        setOpenDialog(false)
    }} >Close</Button>
        </DialogActions>
    </Dialog>
 </Fragment>

}