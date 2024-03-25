import React from "react";

import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ProjectItem({ image, name, id ,isVisible }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const navigate = useNavigate();
  return (
    <React.Fragment>
        <div
     className={`projectItem ${isVisible ? 'visible' : 'exit'}`}
      // onClick={() => {
      //   navigate("/project/" + id);
      // }}
      
      onClick={handleClickOpen}
    >
      {/* <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1> */}
    </div>
    
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
     
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className="pushToRight"
          >
            
            <CloseIcon />
          </IconButton>
         

    </Dialog>
  </React.Fragment>
  
  );
}


