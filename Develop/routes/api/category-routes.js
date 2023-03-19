const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  await Category.create(req.body)
    .then((category) => {
      if (req.body.productIds.length) {
        const productsArr = req.body.productIds.map((product_id) => {
          return Product.update(
            { category_id: category.id },
            { where: { id: product_id } }
          );
        });
      }
      res.status(200).json(category);
    })
    .then((category) => res.status(200).json(category))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update a category by its `id` value
router.put("/:id", (req, res) => {
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
