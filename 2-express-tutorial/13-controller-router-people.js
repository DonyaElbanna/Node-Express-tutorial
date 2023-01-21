const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePersonPostman,
  deletePersonPostman,
} = require("./controllers/people");

// router.get("/people", getPeople);
// router.post("/people", createPerson);
// router.post("/postman/people", createPersonPostman);
// router.put("/postman/people/:id", updatePersonPostman);
// router.delete("/postman/people/:id", deletePersonPostman);

router.route("/people").get(getPeople).post(createPerson);
router.route("/postman/people").post(createPersonPostman);
router.route("/postman/people/:id").put(updatePersonPostman).delete(deletePersonPostman)

module.exports = router;
