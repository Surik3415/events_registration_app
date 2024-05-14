const {Event, UserEvent} = require('../models/models')
const ApiError = require('../errors/apiError')

class EventController {
  async getAll(req, res) {
    let {limit, page} = req.query
    page = page || 1
    limit = limit || 12
    let offset = (page*limit)- limit

    const posts = await Event.findAndCountAll({limit,offset})
    return res.json(posts)
  }

  async create(req, res, next) {
    try {
      const { title, description, event_date, organizer, activate_status } = req.body;
      const event = await Event.create({
        title,
        description,
        event_date,
        organizer,
        activate_status: activate_status || 1
      });
  
      return res.status(201).json(event);
    } catch (error) {
      next(ApiError.bedRequest(error.maggage))
    }
  }

  async show(req, res) {
    const {id} = req.params
    const event = await Event.findOne(
      {
        where: {id},
        include:[{model: UserEvent}]
      }
    )
    return res.json(event)
  }

  async delete(req, res) {
    
  }

}

module.exports = new EventController()