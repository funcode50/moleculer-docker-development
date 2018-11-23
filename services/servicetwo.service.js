"use strict";


module.exports = {
	name: "serviceTwo",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],	
	
	/**
	 * Actions
	 */
	actions: {

		respondToServiceOne(ctx){
            return "{message: 'This is a message from serviceTwo.'}"
        }
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};