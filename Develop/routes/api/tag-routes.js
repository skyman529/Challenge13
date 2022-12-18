const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => { 
  const tag=await Tag.findAll()
  
res.json(tag)
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tag=await Tag.findOne({where:{id: req.params.id}})
  
  res.json(tag)
});

router.post('/', async (req, res) => {
  const newtag = await Tag.create(req.body)
  res.json(newtag)
  // create a new tag
});

router.put('/:id', async (req, res) => {
  const tag = await Tag.update(req.body,{where: {id: req.params.id} }) 
  // update a category by its `id` value
  res.json(tag)
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tag = req.destroy  ({ where: { id:req.params.id } })

  res.json(tag)
});

module.exports = router;
