fetch("http://localhost:5000/business-data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, location })
}).then(res => res.json())
  .then(data => setResult(data));
  fetch(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`)
  .then(res => res.json())
  .then(data => setHeadline(data.headline));