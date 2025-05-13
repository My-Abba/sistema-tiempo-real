module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    rol: DataTypes.STRING,
  });
  Usuario.associate = models => {
    Usuario.hasMany(models.Proyecto, { foreignKey: 'usuario_id' });
    Usuario.belongsToMany(models.Proyecto, { through: 'ProyectoUsuario' });
    Usuario.hasMany(models.Tarea, { foreignKey: 'asignado_a' });
  };
  return Usuario;
};