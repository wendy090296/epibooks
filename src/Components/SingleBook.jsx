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
            <Button onClick=()=>{
              {this.state.selected ?  <CommentArea comments={book.comments}  : "no-feedbacks"}
            }>
            </Button>
          </Card.Body>
        </Card>
      </>
    )}}

export default SingleBook;

