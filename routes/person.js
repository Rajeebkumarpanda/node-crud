const express = require("express");
const {
  handleGetData,
  handleCreateData,
  handleUpdateData,
  handleDeleteData,
} = require("../controllers/Person.js");
const router = express.Router();

router.get("/", handleGetData);
router.post("/create", handleCreateData);
router.patch("/update/:id", handleUpdateData);
router.delete("/delete/:id", handleDeleteData);

module.exports = router;
