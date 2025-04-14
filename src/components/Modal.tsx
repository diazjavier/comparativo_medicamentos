import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from 'react';

interface BotonProps {
  className?: string; // La clase es opcional
}

export default function AlertDialog(props: Readonly<BotonProps>) {
  const [open, setOpen] = useState(true);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={props.className} variant="contained" onClick={handleClickOpen}>
        Sobre este sitio
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Descargo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Este sitio fue desarrollado en forma independiente y sus desarrolladores no mantienen ninguna relación con las compañías farmacéuticas ni con empresas o instituciones relacionadas.
            El objetivo de la presente página es ofrecer a la población una herramienta objetiva y clara para evaluar los precios de los medicamentos disponibles en el territorio nacional.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Volver
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
