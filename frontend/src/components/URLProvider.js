import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const useStyles = makeStyles(theme => ({
  container: {
    width: '390px',
    border: 'solid 1px grey',
    borderRadius: 5,
    marginTop: 10,
    display: 'flex',
    paddingLeft: 5
  },
  url: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'grey'
  },
  button: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  buttonSuccess: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#4caf50'
  }
}));

const URLProvider = props => {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsCopied(false);
  }, [props.text]);

  return (
    <div className={classes.container}>
      <p className={classes.url}>{props.text}</p>
      <CopyToClipboard text={props.text} onCopy={() => setIsCopied(true)}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={isCopied ? classes.buttonSuccess : classes.button}
        >
          {isCopied ? <AssignmentTurnedInIcon /> : <AssignmentIcon />}
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default URLProvider;
