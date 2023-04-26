
const {gql} = require("apollo-server")
exports.typeDefs = gql`

type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!) : Category
   }

type Product {
    id: ID!
    name: String!
    description: String!
    qiantity: Int
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String!
    category: Category
   }

type Category {
    id: ID!
    name: String!
    products: [Product!]!
}
`