const ApiError = require("../errors/apiError");
const { UserEvent } = require("../models/models");

class UserEventController {

  async create(req, res, next) {
    try {
      const { userHearItFrom, email, fullName, birthDate } = req.body;
      const eventId = req.params.id;
      const userEvent = await UserEvent.create({
        user_hear_it_from: userHearItFrom,
        email,
        full_name: fullName,
        birth_date: birthDate,
        event_id: eventId
      });

      return res.status(201).json(userEvent);
    } catch (error) {
      next(ApiError.bedRequest(error.message));
    }
  }
}

module.exports = new UserEventController()