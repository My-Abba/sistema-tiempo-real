module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {  // Cambiado de "contraseña" a "password" por convención en proyectos backend
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.ENUM('admin', 'miembro', 'invitado'),
      defaultValue: 'miembro'
    }
  }, {
    tableName: 'Usuarios' // Para que coincida con el nombre real de la tabla
  });

  Usuario.associate = models => {
    Usuario.hasMany(models.Proyecto, { foreignKey: 'usuario_id' });
    Usuario.belongsToMany(models.Proyecto, {
      through: models.ProyectoUsuario,
      foreignKey: 'usuario_id'
    });
    Usuario.hasMany(models.Tarea, { foreignKey: 'asignado_a' });
  };

  return Usuario;
};
