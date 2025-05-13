module.exports = (sequelize, DataTypes) => {
  const Archivo = sequelize.define('Archivo', {
    nombre: DataTypes.STRING,
    url: DataTypes.STRING,
    tarea_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'Archivos'
  });

  return Archivo;
};
