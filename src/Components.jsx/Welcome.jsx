import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Alert variant="success" size="lg">
      <Alert.Heading> Welcome to our Store !</Alert.Heading>
      <p>
        Exciting times ahead: exclusive offers, insider tips, and much more, are
        all coming your way. Stay tuned!
      </p>
    </Alert>
  );
};

export default Welcome;
