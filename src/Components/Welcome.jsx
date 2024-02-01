import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert variant="success" size="md" className="my-3">
      <Alert.Heading> Welcome to our Store !</Alert.Heading>
      <p>
        Exciting times ahead: exclusive offers, insider tips, and much more, are
        all coming your way. Stay tuned!
      </p>
    </Alert>
  );
};

export default Welcome;
