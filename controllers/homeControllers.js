import product from "../model/product.js";
export const products = async(req,res)=>{
    try {
        const showAll= await product.find();
        res.status(200).json(showAll); 
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }

}
export const create = async(req,res)=>{
    try {
        const add= new product(req.body);
        const savedata= await add.save();
        res.status(200).json(savedata);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' }); 
    }

}  
export const update = async(req,res)=>{
    try {
        const id=req.params.id; 
        const exist= await product.findOne({_id:id});
        if(!exist){
            return res.status(404).json({massage:"Dress not available "});
        }
        const update = await product.findByIdAndUpdate(id,req.body,{new:true});

        
        res.status(201).json(update);  
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' }); 
    }

}
export const productsById = async(req,res)=>{
    try {
        const id=req.params.id; 
        const exist= await product.findOne({_id:id});
        if(!exist){
            return res.status(404).json({massage:"Dress not available "});
        }
        

        
        res.status(201).json(exist);  
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' }); 
    }


}
export const deletes = async(req,res)=>{
    try {
        const id=req.params.id; 
        const exist= await product.findOne({_id:id});
        if(!exist){
            return res.status(404).json({massage:"Dress not available "});
        }
        
        const delet = await product.findByIdAndDelete(id,req.body,{new:true});
        
        res.status(201).json({ Delete: 'Delete Successfully' });  
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' }); 
    }

}

const homeControllers = (req,res)=>{
    res.render('index')

}
export { homeControllers}