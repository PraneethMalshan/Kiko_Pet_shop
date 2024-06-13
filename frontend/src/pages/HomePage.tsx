import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'

export default function HomePage() {
  return (
    <Row>
        {sampleProducts.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3}>
                <img 
                    className='max-w-xs w-full' 
                    src={product.image} 
                    alt={product.name} 
                />
                <h2 className='text-3xl font-bold'>{product.name}</h2>
                <p>${product.price}</p>
            </Col>
        ))}
    </Row>    
  )
}
