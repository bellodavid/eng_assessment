const axios  = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Consumer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
});

//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customers:{
            type:CustomerType,
            args: {
                id: {type:GraphQLString}
            },
            resolve(parentValue, args){

                return axios.get('http://localhost:3000/customers/'+args.id).
                then(res => res.data);
            }
        }
    },

    customers: {
        type: new GraphQLList(CustomerType),
        resolve(parentValue, args){
            return customers
        }
    }
  
})

module.exports = new GraphQLSchema({

})