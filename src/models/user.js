module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.ENUM('admin','miembro','invitado')
  });
  User.associate = models => {
    User.hasMany(models.Project, { foreignKey: 'creatorId' });
    User.belongsToMany(models.Project, { through: 'ProjectUser', as: 'collaborations' });
  };
  return User;
};
