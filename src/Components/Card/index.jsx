import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


export function BodyShorthandExample({text}) {
    return <Card body>{text}</Card>;
  }


export function BasicExample() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Basic_human_drawing.png" />
        <Card.Body>
          <Card.Title>Stick Man</Card.Title>
          <Card.Text>
            Sumair Khanani
          </Card.Text>
          <Button variant="primary">Click here</Button>
        </Card.Body>
      </Card>
    );
}
  
