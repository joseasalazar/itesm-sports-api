
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let sportSchema = mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	name: { type: String, required: true }
});

let Sports = mongoose.model('Sports', sportSchema);

const ListSports = {
	get: function () {
		return Sports.find()
			.then(sports => {
				return sports;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	getById: function (sportId) {
		return Sports.findById({ _id: sportId })
			.then(sport => {
				return sport;
			})
			.catch(err => {
				throw new Error(err);
			})
	},
	post: function (newSport) {
		return Sports.create(newSport)
			.then(sport => {
				return sport;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	update: function (updateSportId, updateName) {
		return Sports.updateOne({ _id: updateSportId }, { $set: { "name": updateName } })
			.then(sport => {
				return sport;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	delete: function (deleteSport) {
		return Sports.deleteOne({ _id: deleteSport })
			.then(sport => {
				return sport;
			})
			.catch(err => {
				throw new Error(err)
			})
	}
}

module.exports = { ListSports };





