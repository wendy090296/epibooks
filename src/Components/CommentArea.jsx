import { useState, useEffect } from "react";
import CommentList from "./CommentsList";
import Error from "./Error";
import AddComments from "./AddComments";
import Loading from "./Loading";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // componentDidMount =  () => {
  //
  //     fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }

  useEffect(() => {
    fetchFunction();
    // si comporta come DidUpdate, viene aggiornato ogni volta che cambia l'asin!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);
  // if (prevProps.asin !== this.props.asin) {
  // this.setState({
  //   isLoading: true,
  // });

  // setIsLoading(true);

  const fetchFunction = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNGZkMmRlMzdiYzAwMWEwYmZlOTciLCJpYXQiOjE3MDcyMzMyMzQsImV4cCI6MTcwODQ0MjgzNH0.zQSH2GEoQ84lzwSuu_yyU0npqbnRcQNkudDg0Z5CyII",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
          // this.setState({
          //   comments: comments,
          //   isLoading: false,
          //   isError: false,
          // });
          // eslint-disable-next-line no-unreachable
          setComments({
            comments: comments,
          });
          setIsLoading({
            isLoading: false,
          });
          setIsError({
            isError: false,
          });
        } else {
          // this.setState({ isLoading: false, isError: true });
          setIsLoading({
            isLoading: false,
          });
          setIsError({
            isError: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // this.setState({ isLoading: false, isError: true });
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComments asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};
export default CommentArea;
