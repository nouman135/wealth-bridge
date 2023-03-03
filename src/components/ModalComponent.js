import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid aqua",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button style={{ color: "white" }} onClick={handleOpen} color={"primary"}>
        Add Idea
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="text-center">Add Idea</h3>
          <div className="row">
            <div className="col-sm-6 mb-2">
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Title / Name"
                variant="outlined"
              />
            </div>
            <div className="col-sm-6 mb-2">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Stocks</MenuItem>
                  <MenuItem value={20}>Bonds</MenuItem>
                  <MenuItem value={30}>Mutual Funds</MenuItem>
                  <MenuItem value={30}>Real Estate</MenuItem>
                  <MenuItem value={30}>Gold</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mb-2">
              <TextField
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Wirte Details"
              />
            </div>
            <div className="col-sm-6">
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Proposed Amount For Investment"
                type="Number"
                variant="outlined"
              />
            </div>
            <div className="col-sm-6 mb-3">
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="ROI"
                type="Number"
                variant="outlined"
              />
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <Button onClick={handleClose} variant="outlined">Cancel</Button>
              <Button variant="contained">Upload</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
