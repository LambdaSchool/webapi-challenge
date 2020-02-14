const express = require("express");
const router = express.Router();
const Db = require("../data/helpers/actionModel");

// GET =======>

router.get("/", (req, res) => {
  Db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not retrieve data from database" });
    });
});

router.get(".:id", (req, res) => {
  const { id } = req.params;
  actionsDB
    .get(id)
    .then(action => {
      res.json(action);
    })
    .catch(() => {
      res.status(500).json({ message: "Error retrieving action from database." });
    });
});

// POST =======>

router.post('/', (req, res) => {
  const action = req.body
  if (action.project_id && action.description && action.notes) {
    actionsDB
    .insert(action)
    .then(() => {
      res.status(200).json({ message: 'Add new action to database.' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error occurred when adding new action to database' })
    })
  } else {
    res.catch(() => {
      res.status(500).json({ message: "Unable to add new action to database." })
    })
  }

  // PUT =======>

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newAction = req.body;
    if(newAction.description, newAction.notes, newAction.project_id) {
      actionsDB
      .update(id, newAction)
      .then(() => {
        res.status(200).json({ message: 'Action successfully updated' })
      })
    } else {
      res.catch(() => {
        res.status(400)({ message: "Error with request." })
      })
      res.catch(() => {
        res.status(500).json({ message: "Error updating action" })
      })
    }
  })

  // DELETE =======>

  router.delete("/:id", (req, res) => {
    
  })





})



module.exports = router;
