import React, { useState } from "react";
import { TextField } from "@mui/material";
import Header from "list/header"
import { Button } from "@mui/material";
import { useStore } from "store/store";


const update = ({ goHome }) => {
    const { add } = useStore();
    const [task, setTask] = useState("")
    const onCreate = () => {
        add({ name: task, status: "pending" });
        goHome();
    }
    return (
        <div>
            <Header />
            <div className="container">
                <TextField id="outlined-basic" value={task} onChange={(e) => setTask(e.target.value)} label="Task" variant="outlined" sx={{ width: "50%" }} />
                <Button variant="contained" sx={{ marginLeft: 3 }} onClick={onCreate} >Create</Button>
            </div>
        </div>
    )
}

export default update;