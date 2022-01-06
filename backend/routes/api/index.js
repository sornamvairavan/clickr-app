const router = require('express').Router()

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body})
})

module.exports = router;


// fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `ff4BD1H2-kHQxyxlnrC6NBC2xl3yhlwSFnsw`
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));

