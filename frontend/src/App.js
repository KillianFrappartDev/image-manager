import { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

//Local imports
import UploadPage from './pages/UploadPage';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

function App() {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const errorHandler = () => {
    setError(true);
  };

  const successHandler = () => {
    setSuccess(true);
  };

  return (
    <div className={classes.root}>
      <UploadPage errorAlert={errorHandler} successAlert={successHandler} />
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert severity="error">An error occured ...</Alert>
      </Snackbar>
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert severity="success">File uploaded!</Alert>
      </Snackbar>
    </div>
  );
}

export default App;
