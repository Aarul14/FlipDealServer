const express = require("express");
const router = express.Router();

//<http://localhost:3000/api/cart-total?newItemPrice=1200&cartTotal=0>
router.get("/cart-total", async (req, res) => {
  const newItemPrice = req.query.newItemPrice;
  const cartTotal = req.query.cartTotal;

  const total = parseFloat(newItemPrice) + parseFloat(cartTotal);
  res.send(total.toString());
});

//<http://localhost:3000/api/membership-discount?cartTotal=3600&isMember=true>
router.get("/membership-discount", async (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal);
  const isMember = req.query.isMember;
  discountedPrice =
    isMember === "true" ? cartTotal - cartTotal * 0.1 : cartTotal;

  res.send(discountedPrice.toString());
});

//http://localhost:3000/api/calculate-tax?cartTotal=3600
router.get("/calculate-tax", async (req, res) => {
  const cartTotal = parseFloat(req.query.cartTotal);
  const taxApplied = cartTotal * 0.05;
  res.send(taxApplied.toString());
});

///estimate-delivery?shippingMethod=express&distance=600
router.get("/estimate-delivery", async (req, res) => {
  const distance = parseFloat(req.query.distance);
  const shippingMethod = req.query.shippingMethod;
  const time = shippingMethod === "express" ? distance / 100 : distance / 50;
  res.send(time.toString());
});

module.exports = router;

//<http://localhost:3000/shipping-cost?weight=2&distance=600>
router.get("/shipping-cost", async (req, res) => {
  const weight = parseFloat(req.query.weight);
  const distance = parseFloat(req.query.distance);

  if (isNaN(weight) || isNaN(distance)) {
    return res.status(400).send("Invalid weight or distance");
  }
  const shippingCost = weight * distance * 0.1;
  res.send(shippingCost.toString());
});

//<http://localhost:3000/loyalty-points?purchaseAmount=3600>
router.get("/loyalty-points", async (req, res) => {
  const purchaseAmount = parseFloat(req.query.purchaseAmount);
  if (isNaN(purchaseAmount)) {
    return res.status(400).send("Invalid purchase amount");
  }
  const loyaltyPoints = purchaseAmount * 2;
  res.send(loyaltyPoints.toString());
});
