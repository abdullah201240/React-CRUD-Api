import mongoose from 'mongoose'; 
const productsSchma = mongoose.Schema( {

    name: {
        type:String,
        require:[true,'Please enter Product name']

    },
    price: {
        type:Number,
        require:[true,'Please enter Price of your product']

    }
    ,
    description: {
        type:String,
        require:[true,'Please enter Description of your product']

    }
    ,
    published: {
        type:Boolean,
        

    },
    category: {
        type:String,
        require:[true,'Please enter Category of your product']

    }
},
{
    timestamps:true 
}
)
const product =mongoose.model('product',productsSchma);
export default product;