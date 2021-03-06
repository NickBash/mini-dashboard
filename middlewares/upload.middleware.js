const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'uploads/')
	},
	filename(req, file, cb) {
		const date = moment().format('DDMMYYYY-HHmmss_SSS')
		console.log(file)
		cb(null, `${date}-${file.originalname}`)
	}
})

const fileFilter = (req, file, cb) => {
	console.log(file)
	if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const limits = {
	fileSize: 1024*1024*10
}

module.exports = multer({
	storage,
	fileFilter,
	limits
})
