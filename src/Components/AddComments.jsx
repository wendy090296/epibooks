// questo componente conterrà un form con dei campi input per aggiungere una nuova recensione.,
//quindi capiamo che essendoci un form avremo bisogno di uno state, e quindi sarà un componente a classe!
//NON ESISTE FORM SENZA STATE, solo le classi possono avere uno state!

import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class AddComments extends Component {
  state = {
    comment: {
      comment: " ",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzk4MzE4N2U1YzAwMTgxNGM2MGIiLCJpYXQiOjE3MDU2NTQ2NjAsImV4cCI6MTcwNjg2NDI2MH0.m-VyEN7IXjkDAMHBVXposQro0DvmHebCNkYTneFVaOQ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.comment),
    }).then((response) => {
      if (response.ok) {
        alert("La recensione é stata salvata");
      } else {
        alert("La recensione NON é stata salavata!");
      }
    });
  };

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state.comment);
          this.sendComment();
        }}
      >
        <Form.Control
          value={this.state.comment.comment}
          onChange={(e) => {
            this.setState({
              comment: {
                ...this.state.comment,
                comment: e.target.value,
              },
            });
          }}
        />
        <Form.Select
          value={this.state.comment.rate}
          onChange={(e) => {
            this.setState({
              comment: {
                ...this.state.comment,
                rate: e.target.value,
              },
            });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        <Button type="submit">INVIA</Button>
      </Form>
    );
  }
}
export default AddComments;
