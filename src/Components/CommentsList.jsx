// questo componente ,invece, riceverà SOLO ED UNICAMENTE un array di recensioni risultante dalla fetch di CommentArea via prop,
//dovrà cioé mostrare i commenti.

import { ListGroup, ListGroupItem } from "react-bootstrap";
const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.commentsToShow.map((comment) => (
        <ListGroupItem key={comment._id}>
          {comment.rate}-{comment.comment}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default CommentsList;
