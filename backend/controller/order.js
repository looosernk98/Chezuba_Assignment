

const getOrderList = (req, res, next) => {
    res.status(200).json({
     message:"Handling get requests"
    })
 }

 const createOrder = (req, res, next) => {
    const data = {
      order_id: req.body.order_id,
      item: req.body.item,
      status: req.body.status
    }
    res.status(200).json({
     message:"Handling post requests",
     data,
    })
 }

 const getOrderById = (req, res, next) => {
    const { productId:id } = req.params;
    console.log('id: ', id);
    if(id == 1){
       res.status(200).json({
          message: 'your id is 1',
          id:id
       })
    }else{
       res.status(200).json({
          id: id
       })
    }
  }

  const updateOrderById = (req, res, next) => {
    const { productId:id } = req.params;
    res.status(200).json({
       message: 'updated successfully',
       id
    })
  }

  const deleteOrderById = (req, res, next) => {
    const { productId:id } = req.params;
    res.status(200).json({
       message: 'deleted successfully',
       id
    })
  }

 module.exports = {
    getOrderList,
    createOrder,
    getOrderById,
    updateOrderById,
    deleteOrderById,
 }