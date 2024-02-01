const CommentArea = ({ comments }) => {
  return (
    <div>
      <h3>Feedbacks</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentArea;
