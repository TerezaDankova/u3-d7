import {ListGroup,Button} from "react-bootstrap"

const SingleComment = (props) => {

    const deleteComment = async (asin) => {
        try {
        let response = await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + asin , {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3YTZiMzFlYjc2ZDAwMTUxNTAyNDgiLCJpYXQiOjE2NjI2MzU5NTUsImV4cCI6MTY2Mzg0NTU1NX0.Sxfd0UiSLfePsqw61xi9cF1H4BolbnnnXU9ZIOmNft0'
            }
        })
        if(response.ok) {
            alert('Your comment was deleted')
            props.didDeleteComment()
        }
        else {
            alert('There is some problem, you cannot delete your comment!')
        }
        }
        catch(error) {
            console.log(error)
        }
    }
    
    
        return (
        
        <ListGroup.Item className="mt-2 mb-2 ml-5" style={{backgroundColor: '#F3F2F1'}}>
            <span className="mr-2"style={{fontWeight: 'bold'}}>COMMENT:</span><br />{props.comment.comment}<br />
            <Button variant="danger" className="ml-2 mt-2" onClick={() => deleteComment(props.comment._id)}>DELETE</Button>
        </ListGroup.Item>
        )
            
}

export default SingleComment