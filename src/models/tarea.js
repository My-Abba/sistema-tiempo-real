module.exports = (sequelize, DataTypes) => {
  const Tarea = sequelize.define('Tarea', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    estado: {
      type: DataTypes.ENUM('pendiente', 'en progreso', 'completada'),
      defaultValue: 'pendiente'
    },
    proyecto_id: DataTypes.INTEGER,
    asignado_a: DataTypes.INTEGER
  }, {
    tableName: 'Tareas'
  });

  return Tarea;
};
