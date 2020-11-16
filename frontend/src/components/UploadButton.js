import { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const UploadButton = props => {
  const imagePickerRef = useRef();
  const classes = useStyles();

  const uploadHandler = event => {
    if (event.target.files.length === 1) {
      props.onUpload(event.target.files[0]);
    } else {
      props.errorAlert();
    }
  };

  return (
    <div>
      <Button
        color="primary"
        size="large"
        variant="contained"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={() => imagePickerRef.current.click()}
      >
        Upload
      </Button>
      <input
        className={classes.input}
        type="file"
        ref={imagePickerRef}
        accept=".jpg,.png,.jpeg"
        onChange={uploadHandler}
      />
    </div>
  );
};

export default UploadButton;
