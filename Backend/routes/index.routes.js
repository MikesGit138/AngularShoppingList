const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
	getItemById,
	updateItem
} = require('../controllers/items.controller')

router.route('/').get(IndexController.index)

router.route('/shopping_list').post(createItem).get(getAllItems)

router.route('/shopping_list/:id').delete(deleteItemsById)

router.route('/shopping_list/:id').get(getItemById)

router.route('update/:id').patch(updateItem)

module.exports = router
