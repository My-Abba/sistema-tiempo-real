module.exports = (sequelize, DataTypes) => {
  const ProyectoUsuario = sequelize.define('ProyectoUsuario', {
    usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    proyecto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: 'ProyectoUsuarios'
  });

  return ProyectoUsuario;
};
