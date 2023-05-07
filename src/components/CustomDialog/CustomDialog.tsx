import { SubjectManager } from "@/models";
import { Dialog } from "@mui/material";
import { useState, useEffect } from "react";
import { Subscription } from "rxjs";

interface Props {
  children: React.ReactNode;
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

export const CustomDialog = ({ children }: Props) => {
  const [open, setopen] = useState(false);

  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => handleClickOpen());
    closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => handleClickClose());

    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);

  const handleClickOpen = () => {
    setopen(true);
  };

  const handleClickClose = () => {
    setopen(false);
  };

  const handleExit = () => {
    dialogCloseSubject$.setSubject = false;
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleExit()}
      aria-aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      {children}
    </Dialog>
  );
};
