const express = require('express')
const app = express()
const passport = require('passport')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const config = require('./config/config')
const authRoutes = require('./routes/auth.router')
const analyticsRouter = require('./routes/analytics.router')
const categoryRoutes = require('./routes/category.router')
const orderRoutes = require('./routes/order.router')
const positionRoutes = require('./routes/position.router')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(morgan('dev'))
app.use(express.json())

app.use(passport.initialize())
require('./middlewares/passport.middleware')(passport)

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRouter)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

const start = async () => {
	try {
		await mongoose.connect(config.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		app.listen(PORT, () => {
			console.log(`Server start, port 5000...`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()


