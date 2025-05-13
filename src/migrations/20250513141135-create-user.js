'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // Este bloque crea la tabla 'Users'
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,      // no puede quedar vacío
        autoIncrement: true,   // se incrementa solo
        primaryKey: true,      // clave primaria
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING // texto corto
      },
      email: {
        type: Sequelize.STRING,
        unique: true           // no puede haber dos emails iguales
      },
      password: {
        type: Sequelize.STRING // guardaremos el hash
      },
      role: {
        type: Sequelize.ENUM('admin','miembro','invitado')
      },
      createdAt: {
        type: Sequelize.DATE,  // registro automático de cuándo se creó
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,  // registro automático de cuándo se actualizó
        allowNull: false
      }
    });
  },
  async down(queryInterface) {
    // Este bloque deshace la migración: borra la tabla
    await queryInterface.dropTable('Users');
  }
};
