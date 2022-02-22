import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cards({children}){
    return(
        
        <Card style={{ width: '25rem',margin:'20px' }}>

            <Card.Body>
            <Card.Title> {children }</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
      
     
        )
    
}