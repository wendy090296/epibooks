import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card className={this.state.selected ? "selectedCard" : ""}>
          <Card.Img
            variant="top"
            src={this.props.oneBook.img}
            onClick={() => {
              this.setState({
                selected: this.state.selected ? false : true,
              });
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.oneBook.title}</Card.Title>
            <Card.Text>{this.props.oneBook.price} </Card.Text>
            <Card.Text>{this.props.oneBook.category} </Card.Text>
            <Button variant="dark">Get it now!</Button>
          </Card.Body>
        </Card>

        {this.state.selected && <CommentArea asin={this.props.oneBook.asin} />}
      </>
    );
  }
}

export default SingleBook;
