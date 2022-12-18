const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
 
    // Get all babers and JOIN with user data
    const category = await Category.findAll({
      
    });
    res.json(category)
  // find all categories
  // be sure to include its associated Products
  });

router.get('/:id',async (req, res) => {
  const catogory=await Category.findOne({where:{id: req.params.id}})
  // find one category by its `id` value
  // be sure to include its associated Products
  res.json(catogory)
});

router.post('/', async (req, res) => {
  // create a new category
const newcatagory = await Category.create(req.body)
res.json(newcatagory)
});

router.put('/:id', async (req, res) => {
  const category = await Category.update(req.body,{where: {id: req.params.id} }) 
// update a category by its `id` value
res.json(category)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({where: {id: req.params.id}})
  res.json(category)
});

module.exports = router;
