import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComments from "./AddComments";

// questo compnente conterrà 2 figli CommentsList e AddComments e poi si occuperà di fare una fetch()!
//ATTENZIONE, fare una fetch sull'endpoint generico https://striveschool-api.herokuapp.com/api/comments/, ritornerà un array con TUTTI i commenti di TUTTI i libri, quindi mi occorre
// un endpoint più specifiico che mi ricavo dall'asin di ciascun libro!

class CommentArea extends Component {
  state = {
    comments: [],
  };

  // questa é la chiamata dalla quale otterremo l'array di commenti per OGNI LIBRO SELEZIONATO!
  retrieveComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMzk4MzE4N2U1YzAwMTgxNGM2MGIiLCJpYXQiOjE3MDU2NTQ2NjAsImV4cCI6MTcwNjg2NDI2MH0.m-VyEN7IXjkDAMHBVXposQro0DvmHebCNkYTneFVaOQ",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      // se la chiamata é ok, otteniamo il json, ovvero il nostro array di oggetti (commenti)
      .then((arrayOfComments) => {
        console.log(arrayOfComments);
        this.setState({
          comments: arrayOfComments,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  // richiamiami qui la nostra funzione contenente la fetch per farla eseguire UNA sola volta dopo in render()
  componentDidMount() {
    this.retrieveComments();
  }

  render() {
    return (
      <div>
        <CommentsList commentsToShow={this.state.comments} />
        <AddComments asin={this.props.asin} />
      </div>
    ); // visto che i commenti deve mostrarli il componente CommentsList, allora glie li passo tramote una prop
  }
}
export default CommentArea;
