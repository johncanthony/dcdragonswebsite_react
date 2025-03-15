import { Card,Button,Carousel } from "react-daisyui";

function CarouselEventCard(props) {
  return (
    <Carousel.Item>
      <Card imageFull="false" compact side className="max-w-[23rem] md:max-w-[29rem] max-h-[32rem] ">
         <Card.Image src={props.image} alt={props.title} className="max-h-[100%]" />
         <Card.Body>
            <Card.Title tag="h2" className="text-white">{props.title}</Card.Title>
            <p>{props.message}</p>
            <Card.Actions className=""> 
                <Button tag="a" href={props.fbUrl} responsive="true" size="sm" >Read More</Button>
            </Card.Actions>
         </Card.Body>
      </Card>
    </Carousel.Item>
  );
}

export default CarouselEventCard;