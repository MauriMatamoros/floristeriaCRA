const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./floristeria-cra-firebase-adminsdk-pdx5g-d28dccdf63.json");

const cors = require("cors")({origin: true});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://floristeria-cra.firebaseio.com"
});

let db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createProfile = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {uid, name, lastName, birthday, gender} = req.body;
      await db
        .collection("users")
        .doc(uid)
        .set({name, lastName, birthday, gender, role: "client"});
      res.status(201).send("User profile created.");
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.getProfile = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);
      const user = await db
        .collection("users")
        .doc(uid)
        .get();
      res.status(200).json(user.data());
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.updateProfile = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, name, lastName, birthday, gender, email} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);
      await admin.auth().updateUser(uid, {
        email: email,
        emailVerified: false
      });
      await db
        .collection("users")
        .doc(uid)
        .update({name, lastName, birthday, gender});
      const user = await db
        .collection("users")
        .doc(uid)
        .get();
      res.status(200).json(user.data());
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.postAddress = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, name, description} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);

      if (!uid) {
        res.status(403).send("Please log in again.");
      }

      const {id} = await db
        .collection("addresses")
        .add({name, description, owner: uid});

      const address = await db
        .collection("addresses")
        .doc(id)
        .get();

      res.status(201).json({id, ...address.data()});
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  })
);

exports.getAddresses = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);
      if (!uid) {
        res.status(403).send("Please log in again.");
      }
      const snapshots = await db
        .collection("addresses")
        .where("owner", "==", `${uid}`)
        .get();
      const addresses = [];
      if (snapshots.empty) {
        res.status(200).json([]);
      }
      snapshots.forEach(address =>
        addresses.push({
          id: address.id,
          ...address.data()
        })
      );
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.removeAddress = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, id} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);
      if (!uid) {
        res.status(403).send("Please log in again.");
      }
      await db
        .collection("addresses")
        .doc(id)
        .delete();
      res.status(200).json(id);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.postType = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, name, image} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);

      if (!uid) {
        res.status(403).send("Please log in again.");
      }

      const {id} = await db.collection("types").add({name, image});

      const type = await db
        .collection("types")
        .doc(id)
        .get();

      res.status(201).json({id, ...type.data()});
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  })
);

exports.getTypes = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const snapshots = await db.collection("types").get();
      const types = [];
      if (snapshots.empty) {
        res.status(200).send([]);
      }
      snapshots.forEach(type =>
        types.push({
          id: type.id,
          ...type.data()
        })
      );
      res.status(200).json(types);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.removeType = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, id} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);
      if (!uid) {
        res.status(403).send("Please log in again.");
      }
      await db
        .collection("types")
        .doc(id)
        .delete();
      res.status(200).json(id);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.postCoupon = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, name, discount, expireDate} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);

      if (!uid) {
        res.status(403).send("Please log in again.");
      }

      const {id} = await db
        .collection("coupons")
        .add({name, discount, expireDate});

      const coupon = await db
        .collection("coupons")
        .doc(id)
        .get();

      res.status(201).json({id, ...coupon.data()});
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  })
);

exports.getCoupons = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const snapshots = await db.collection("coupons").get();
      const coupons = [];
      if (snapshots.empty) {
        res.status(200).send([]);
      }
      snapshots.forEach(coupon =>
        coupons.push({
          id: coupon.id,
          ...coupon.data()
        })
      );
      res.status(200).json(coupons);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.removeCoupons = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, id} = req.body;
      const {uid} = await admin.auth().verifyIdToken(token);
      if (!uid) {
        res.status(403).send("Please log in again.");
      }
      await db
        .collection("coupons")
        .doc(id)
        .delete();
      res.status(200).json(id);
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);

exports.authorizeProducts = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      const {token, productId, authorized} = req.body;
      
      await admin.auth().verifyIdToken(token);
      await db
        .collection("products")
        .doc(productId)
        .update({authorized});
      const product = await db
        .collection("products")
        .doc(productId)
        .get();
      res.status(200).json(product.data());
    } catch (error) {
      res.status(500).send("Server Error");
    }
  })
);