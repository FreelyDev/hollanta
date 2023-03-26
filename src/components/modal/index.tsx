import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface PropsType {
  show: boolean;
  onHide?: () => void;
  label?: any;
  border?: boolean;
  children: any;
  contentClassName?: string;
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
  contentClass?:string
}
const Modal = (props: PropsType) => {
  return (

    <Dialog
      open={props.show}
      onClose={props.onHide}
      maxWidth={props.maxWidth}
      aria-labelledby="responsive-dialog-title"
      
      className={props.contentClassName}
      style = {{backdropFilter : 'blur(5px)'}}
    >
      <DialogContent className={props.contentClass}>{props.children}</DialogContent>
    </Dialog>
  );
};
export default Modal;
