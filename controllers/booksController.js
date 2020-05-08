// const db = require("../models");

// module.exports = {
//     //find all books
//     findAll: function(req, res) {
//       db.Book
//         .find(req.query)
//         .sort({ date: -1 })
//         .then(dbRes => res.json(dbRes))
//         .catch(err => {
//           console.error(err)
//           res.status(500).json(err)
//         });
//     },
//     //find by id
//     findById: function(req, res) {
//       db.Book
//         .findById(req.params.id)
//         .then(dbRes => res.json(dbRes))
//         .catch(err => {
//           console.error(err)
//           res.status(500).json(err)
//         });
//     },
//     //create/post books
//     create: function(req, res) {
//       db.Book
//         .create(req.body)
//         .then(dbRes => res.json(dbRes))
//         .catch(err => {
//           console.error(err)
//           res.status(500).json(err)
//         });
//     },
// };