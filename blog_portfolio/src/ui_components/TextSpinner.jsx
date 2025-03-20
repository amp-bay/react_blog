import { ClipLoader } from 'react-spinners';


const TextSpinner = ({ text=loading }) => {
  const override = {
    display: 'block',
    margin: '0 auto',
  };
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Adjust this value to control the space
  };

  return (
    <div style={containerStyle}>
      <ClipLoader
        cssOverride={override}
        size={16}

        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <small>{text}</small>
    </div>
  );
};



export default TextSpinner ;
