import { Container, Row, Col } from "react-bootstrap";

import { capitalizeEveryWord } from "../../../../helpers/general";
import { createPrismaClient } from "../../../../apollo/server/db/context";

export default function ProductName({ isLoggedIn, product }) {
  console.log(product);
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          ciao
        </Col>

        <Col xs={12} md={6}>
          ciao
        </Col>
      </Row>
    </Container>
  );
}

export async function getStaticProps(context) {
  const prisma = createPrismaClient();
  var { productName } = context.params;

  const product = await prisma.product.findFirst({
    where: {
      productName: capitalizeEveryWord(productName.replace(/-/g, " ")),
    },
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const prisma = createPrismaClient();
  const products = await prisma.product.findMany();
  const categories = await prisma.category.findMany();

  var mergedArray = [];

  // unisco i due array in uno che avrà i campi di category dentro i prodotti
  products.forEach(function (p) {
    categories.forEach(function (c) {
      if (p.categoryId === c.id) mergedArray.push(Object.assign({}, p, c));
    });
  });

  return {
    // ritorno tutti i possibili path da pre-renderizzare
    paths: mergedArray.map((product) => {
      return {
        // per nested dynamic routes devo specificare tutto lo slug
        params: {
          categoryName: product.categoryName.toLowerCase(),
          productName: product.productName.replace(/\s/g, "-").toLowerCase(),
        },
      };
    }),
    fallback: false,
  };
}
