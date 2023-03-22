import { Button } from 'react-bootstrap';

export const TestButton = ({buttonName}) => {
    return(
        <div className = 'TestButton'>
            <Button>Test Button</Button>
            <Button variant="primary">Primary Button</Button>{' '}
            <Button variant="secondary">Secondary Button</Button>{' '}
            <Button className="TestButton" variant="primary">{buttonName}</Button>{' '}
        </div>
    );
}
export const PrimaryButton = () => {
    return (
        <div className = 'PrimaryButton'>
            <Button variant="primary"></Button>{' '}
        </div>
    );

}



