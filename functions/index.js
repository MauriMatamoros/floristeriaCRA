const functions = require('firebase-functions')
const admin = require('firebase-admin')

const serviceAccount = require('./floristeria-cra-firebase-adminsdk-pdx5g-d28dccdf63.json')

const cors = require('cors')({ origin: true })

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://floristeria-cra.firebaseio.com'
})

let db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createProfile = functions.https.onRequest((req, res) =>
	cors(req, res, async () => {
		try {
			const { uid, name, lastName, birthday, gender, role } = req.body
			await db
				.collection('users')
				.doc(uid)
				.set({ name, lastName, birthday, gender, role })
			res.status(201).send('User profile created.')
		} catch (error) {
			res.status(500).send('Server Error')
		}
	})
)

exports.getProfile = functions.https.onRequest((req, res) =>
	cors(req, res, async () => {
		try {
			const { token } = req.body
			const { uid } = await admin.auth().verifyIdToken(token)
			const user = await db
				.collection('users')
				.doc(uid)
				.get()
			res.status(200).json(user.data())
		} catch (error) {
			res.status(500).send('Server Error')
		}
	})
)

exports.postAddress = functions.https.onRequest((req, res) =>
	cors(req, res, async () => {
		try {
			const { token, name, description } = req.body
			const { uid } = await admin.auth().verifyIdToken(token)

			if (!uid) {
				res.status(403).send('Please log in again.')
			}

			const { id } = await db
				.collection('addresses')
				.add({ name, description, owner: uid })

			const address = await db
				.collection('addresses')
				.doc(id)
				.get()

			res.status(201).json(address.data())
		} catch (error) {
			console.error(error)
			res.status(500).send('Server Error')
		}
	})
)

exports.getAddresses = functions.https.onRequest((req, res) =>
	cors(req, res, async () => {
		try {
			const { token } = req.body
			const { uid } = await admin.auth().verifyIdToken(token)
			if (!uid) {
				res.status(403).send('Please log in again.')
			}
			const snapshots = await db
				.collection('addresses')
				.where('owner', '==', `${uid}`)
				.get()
			const addresses = []
			if (snapshots.empty) {
				res.status(200).send('No addresses found')
			}
			snapshots.forEach((address) =>
				addresses.push({
					id: address.id,
					...address.data()
				})
			)
			res.status(200).json(addresses)
		} catch (error) {
			res.status(500).send('Server Error')
		}
	})
)
