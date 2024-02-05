import { Component } from "react";
import CommentList from "./CommentsList";
import Error from "./Error";
import AddComments from "./AddComments";
import Loading from "./Loading";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
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

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      });
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMxMWIzY2UwODVmYTAwMTk2MzFiNWEiLCJpYXQiOjE3MDcxNTQyMzYsImV4cCI6MTcwODM2MzgzNn0.qTvYxR2l8a2n0StBjEblSpumPOUfDBDtx7Vfol4GUv0",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          });
        } else {
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    }
  };

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComments asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
