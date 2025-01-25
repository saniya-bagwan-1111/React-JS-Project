import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

function TodoItem({todoEachItem,fetchDetailofCurrentTodo})
{
    return <Card sx={{maxWidth:350, display:"flex", flexDirection:"column"
        ,justifyContent:"space-between"}}>
        <CardContent>
            <Typography variant="h5" color="textPrimary">
                {todoEachItem?.todo}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                sx={{backgroundColor: "black", color: "white", opacity:0.9,
                        '&:hover':{backgroundColor: "white", color: "black"}
                    }}
                    onClick={()=>fetchDetailofCurrentTodo(todoEachItem.id)}
            >Show Details</Button>
        </CardActions>
    </Card>
    // <div sx={{

    // }}>
    //     <h3>{todoEachItem?.todo}</h3>
    // </div>
}

export default TodoItem;