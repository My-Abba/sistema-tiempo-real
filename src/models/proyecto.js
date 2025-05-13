module.exports = (sequelize, DataTypes) => {
  const Proyecto = sequelize.define('Proyecto', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Proyectos'
  });

  Proyecto.associate = models => {
    Proyecto.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'creador'
    });

    Proyecto.belongsToMany(models.Usuario, {
      through: models.ProyectoUsuario,
      foreignKey: 'proyecto_id',
      otherKey: 'usuario_id',
      as: 'miembros'
    });

    Proyecto.hasMany(models.Tarea, {
      foreignKey: 'proyecto_id'
    });
  };

  return Proyecto;
};
