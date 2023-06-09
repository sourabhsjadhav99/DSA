let express = require("express")
const Product = require("../connectionAndSchema/product");
const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    let data = await Product.find({ _id: req.params._id });
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});



router.post("/", async (req, res) => {
  try {
    const { filename } = req.file;
    let data = new Product({
      ...req.body,

    });
    let result = await data.save()
    res.status(201).json({
      status: "Success",
      message: "Signup succesfully",
      result: result
    })
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    let data = await Product.updateOne({ _id: req.params._id }, { $set: req.body })
    res.send(data);
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    let data = await Product.deleteOne({ _id: req.params._id });
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

module.exports = router;