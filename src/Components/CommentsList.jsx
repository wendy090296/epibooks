// questo componente ,invece, riceverà SOLO ED UNICAMENTE un array di recensioni risultante dalla fetch di CommentArea via prop,
//dovrà cioé mostrare i commenti.

import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
