const AddComment = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddClick = () => {
    // Chiamo  callback onAddComment per aggiungere il nuovo commento
    onAddComment(newComment);
    // svuoto il campo di input dopo l'aggiunta del commento
    setNewComment("");
  };

  return (
    <div>
      <textarea value={newComment} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add Comment</button>
    </div>
  );
};

export default AddComment;
