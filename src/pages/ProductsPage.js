import React from 'react'
import styled from 'styled-components'
import { FeaturedProducts, PageHero } from '../components'
const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <FeaturedProducts/>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
   margin: 20rem;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
