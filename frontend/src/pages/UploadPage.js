import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//Local imports
import UploadButton from '../components/UploadButton';
import logo from '../assets/logo-black.png';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    borderRadius: 10
  }
}));

const UploadPage = props => {
  const classes = useStyles();

  const postImage = async data => {
    let response;
    try {
      response = await axios.post(process.env.REACT_APP_API_URL + '/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } catch (error) {
      console.log('[ERROR][POSTIMAGE] Upload image failed');
    }
    console.log(response.data.message);
  };

  const uploadHandler = file => {
    const formData = new FormData();
    formData.append('image', file);
    postImage(formData);
  };

  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} width="400px" alt="logo" />
      <UploadButton
        errorAlert={() => props.errorAlert()}
        successAlert={() => props.successAlert()}
        onUpload={uploadHandler}
      />
    </div>
  );
};

export default UploadPage;
