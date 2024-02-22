const Person = require("../models/person");

async function handleGetData(req, res) {
  try {
    const result = await Person.find();
    res.status(200).json({ data: result, message: "success" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
}

async function handleCreateData(req, res) {
  try {
    const data = req.body;
    const result = await Person.create(data);
    res.status(200).json({ data: result, message: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function handleUpdateData(req, res) {
  try {
    const data = req.body;
    const id = req.params.id;

    const result = await Person.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: data.name,
          age: data.age,
          email: data.email,
          work: data.work,
          mobile: data.mobile,
          address: data.address,
          salary: data.salary,
        },
      },
      { new: true, runValidators: true }
    );
    if (!result) {
      res.status(404).json({ message: "person not found" });
    }
    res.status(200).json({ data: result, message: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function handleDeleteData(req, res) {
  try {
    const data = req.body;
    const id = req.params.id;
    const result = await Person.findByIdAndDelete({ _id: id });
    if (!result) {
        res.status(404).json({ message: "person not found" });
      }
    res.status(200).json({ data: result, message: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  handleGetData,
  handleCreateData,
  handleUpdateData,
  handleDeleteData,
};
