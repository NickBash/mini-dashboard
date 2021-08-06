module.exports = new class AnalyticsController {
	async overview(req, res) {
		try {
			return res.status(200).json({message: 'AAAA'})
		} catch (e) {
			console.log(e)
		}
	}

	async analytics(req, res) {
		try {
			return res.status(200).json({message: 'AAAA'})
		} catch (e) {
			console.log(e)
		}
	}
}
