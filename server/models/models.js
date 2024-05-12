const { DataTypes } = require('sequelize');
const sequelize = require('../bd.js');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  event_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  organizer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  activate_status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'events'
});

const UserEvent = sequelize.define('UserEvent', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_hear_it_from: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'user_event'
});

Event.hasMany(UserEvent, { foreignKey: 'event_id' });

module.exports = {
  Event,
  UserEvent
};
