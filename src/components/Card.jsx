import { StyledCard } from "./styled/Card.styled";


// The layout in StyledCard does reverses the image and text when
// the index is even. That is what the ternary operator does below:
// if mod(id,2) is equals to 0, then apply row-reverse in the StyledCard
export default function Card({item: {id, title, body, image}}) {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`'../images/${image}`}></img>
            </div>
        </StyledCard>
    )
    
}