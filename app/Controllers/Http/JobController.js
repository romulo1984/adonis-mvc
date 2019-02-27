'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with jobs
 */
const Job = use('App/Models/Job');

class JobController {
  async home({view}) {
        // Fetch a job
        const jobs = await Job.all();
        console.log(jobs);
        return view.render('index', { jobs: jobs.toJSON() })
    }
}

module.exports = JobController
