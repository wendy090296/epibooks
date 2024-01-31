import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card className={this.state.selected ? "selectedCard" : ""}>
          <Card.Img variant="top" src={this.props.oneBook.img} />
          <Card.Body>
            <Card.Title>{this.props.oneBook.title}</Card.Title>
            <Card.Text>{this.props.oneBook.price} </Card.Text>
            <Card.Text>{this.props.oneBook.category} </Card.Text>
            <Button
              variant="dark"
              onClick={() => {
                this.setState({
                  selected: this.state.selected ? false : true,
                });
              }}
            >
              Get it now!
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
