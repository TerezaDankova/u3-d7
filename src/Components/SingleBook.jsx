import {Card} from "react-bootstrap";



const SingleBook = (props) => {


      return(
            <>  
                  <Card className="mt-5 mr-5" 
                        onClick={() => console.log("changeSelected", props.changeSelectedBook(props.book.asin))}
                        style={{ border: props.selectedBook === props.book.asin ? '5px solid green' : 'none', width: '10rem'}}>
                        <Card.Img 
                        variant="top" src={props.book.img}  
                        style={{ width: '100%', height:'240px'}} />
                        <Card.Body  style={{border:'1px solid black', height: '70px'}}>
                              <Card.Title className=" pl-1 pr-1 " 
                              style={{fontSize: 10}}> {props.book.title} </Card.Title>
                        </Card.Body>
                  </Card>   
            </>
      )  
}
      
export default SingleBook