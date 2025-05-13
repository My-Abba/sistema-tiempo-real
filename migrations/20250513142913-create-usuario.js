'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // Crea la tabla 'Usuarios'
    await queryInterface.createTable('Usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false    // campo obligatorio
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true        // no pueden repetirse
      },
      contraseña: {
        type: Sequelize.STRING,
        allowNull: false    // guardaremos el hash
      },
      rol: {
        type: Sequelize.ENUM('admin', 'miembro', 'invitado'),
        allowNull: false,
        defaultValue: 'miembro'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')  // marca de tiempo
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    // Borra la tabla 'Usuarios'
    await queryInterface.dropTable('Usuarios');
  }
};
