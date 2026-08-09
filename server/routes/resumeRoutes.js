const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

router.post("/upload", upload.single("resume"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Resume uploaded successfully",
    file: req.file,
  });
});

module.exports = router;
