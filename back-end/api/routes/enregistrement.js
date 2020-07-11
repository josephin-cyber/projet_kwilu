const express = require("express");
const router = express.Router();
const db = require("../../models");
const multer = require("multer");
const { Op } = require("sequelize");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });

function createClient(req) {
  return new Promise((successCallback, failureCallback) => {
    try {
      db.client
        .create({
          nom_client: req.body.nom_client,
          email: req.body.email,
          adresse: req.body.adresse,
        })
        .then((result) => {
          successCallback(result);
        });
    } catch (err) {
      failureCallback(err);
    }
  });
}

function rechercheEmploye(reqId) {
  return new Promise((successCallback, failureCallback) => {
    db.employe
      .findAll({
        where: {
          id: reqId,
        },
      })
      .then((result) => {
        if (result.length >= 0) {
          successCallback(result[0]);
        } else {
          failureCallback("Not found");
        }
      });
  });
}

function createVehicule(employe, req, file) {
  return new Promise((successCallback, failureCallback) => {
    try {
      db.vehicule
        .create({
          numero_plaque: req.body.numero_plaque,
          transporteur: req.body.transporteur,
          photo_vehicule: file,
          marque: req.body.marque,
          heure_parking: new Date(),
          etatId: Number(req.query.etatId),
        })
        .then((result) => {
          result.setEmployes(employe["dataValues"].id);
          successCallback(result);
        });
    } catch (err) {
      failureCallback(err);
    }
  });
}

function createDetail(client, vehicule, req) {
  return new Promise((successCallback, failureCallback) => {
    try {
      db.detail_produit
        .create({
          ref_bon: req.body.ref_bon,
          quantite: Number(req.body.quantite),
          photo_bon: null,
          vehiculeId: Number(vehicule["dataValues"].id),
          produitId: Number(req.query.produitId),
          clientId: Number(client["dataValues"].id),
        })
        .then((result) => {
          successCallback(result);
        });
    } catch (err) {
      failureCallback(err);
    }
  });
}

router.get("/enregistrements", (req, res) => {
  db.vehicule
    .findAll({
      include: [db.employe, db.etat],
    })
    .then((allVehicule) => {
      return res.send(allVehicule);
    })
    .catch((err) => res.status(404).json(err));
});

router.get("enregistrements/:id", (req, res) => {
  db.vehicule
    .findAll({
      where: {
        id: req.params.id,
      },
      include: [db.employe, db.etat],
    })
    .then((unVehicle) => {
      res.send(unVehicle);
    })
    .catch((err) => res.status(404).json(err));
});

router.put("/enregistrements/:id", (req, res) => {
  let values = {
    heure_chargement: new Date(),
    heure_charge: new Date(),
    etatId: req.body.etatId,
  };
  let condition = { where: { id: req.params.id } };
  let options = { multi: true };

  db.vehicule
    .update(values, condition, options)
    .then((vehiculeUp) => {
      res.send(vehiculeUp);
    })
    .catch((err) => res.status(400).json(err));
});

router.post(
  "/employes/:id/enregistrements",
  upload.single("photo_vehicule"),
  async (req, res) => {
    let employeId = Number(req.params.id);
    let file;
    if (req.file) {
      file = `https://appkwilu2.herokuapp.com/${req.file.path}`;
    } else {
      file = null;
    }

    const user1 = await rechercheEmploye(employeId);
    const client1 = await createClient(req);
    const unVehicle = await createVehicule(user1, req, file);
    const detail = await createDetail(client1, unVehicle, req);

    return res.status(201).json(detail);
  }
);

router.get("/employes/:id/enregistrements", (req, res) => {
  db.employe
    .findAll({
      where: {
        id: req.params.id,
      },

      include: { all: true, nested: true },
    })
    .then((unVehicle) => {
      res.send(unVehicle);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
