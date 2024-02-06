// questo componente conterrà un form con dei campi input per aggiungere una nuova recensione.,
//quindi capiamo che essendoci un form avremo bisogno di uno state, e quindi sarà un componente a classe!
//NON ESISTE FORM SENZA STATE, solo le classi possono avere uno state!

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

const initialComment = {
  comment: " ",
  rate: 1,
  // elementId: props.asin,
};

const AddComments = () => {
  // state = {
  //   comment: {
  //     comment: " ",
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // };

  // nei componenti a funzione lo stato va scritto in questo modo:
  const [comment, setComment] = useState(initialComment);

  const sendComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNGZkMmRlMzdiYzAwMWEwYmZlOTciLCJpYXQiOjE3MDcyMzMyMzQsImV4cCI6MTcwODQ0MjgzNH0.zQSH2GEoQ84lzwSuu_yyU0npqbnRcQNkudDg0Z5CyII",
        "Content-Type": "application/json",
        body: JSON.stringify(comment),
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("La recensione é stata salvata");
          return response.json();
        } else {
          alert("La recensione NON é stata salavata!");
          throw new Error();
        }
      })
      .catch((err) => {
        console.log("errore nella richiesta");
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(comment);
        sendComment();
      }}
    >
      <Form.Control
        value={comment.comment}
        onChange={(e) => {
          // this.setState({
          //   comment: {
          //     ...this.state.comment,
          //     comment: e.target.value,
          //   },
          // });

          setComment({
            ...comment,
            comment: e.target.value,
          });
        }}
      />
      <Form.Select
        value={comment.rate}
        onChange={(e) => {
          // this.setState({
          //   comment: {
          //     ...this.state.comment,
          //     rate: e.target.value,
          //   },
          // });

          setComment({
            ...comment,
            rate: e.target.value,
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
};

export default AddComments;
