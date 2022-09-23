const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ['id',
      catagory_name
    ]
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    attributes: [id,
      ProductTag
    ]

  })
});

router.post('/', (req, res) => {
  Category.create({

  })
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update({

  })
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.delete({

  })
  // delete a category by its `id` value
});

module.exports = router;
