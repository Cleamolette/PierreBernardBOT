const PORT = process.env.PORT || 3000
	express()
  		.listen(PORT, () => console.log(`Listening on ${ PORT }`));