module.exports = (sequelize, DataTypes) => {
  const Proyecto = sequelize.define('Proyecto', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  });
  Proyecto.associate = models => {
    Proyecto.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'creador' });
    Proyecto.belongsToMany(models.Usuario, { through: 'ProyectoUsuario', as: 'miembros' });
    Proyecto.hasMany(models.Tarea, { foreignKey: 'proyecto_id' });
  };
  return Proyecto;
};