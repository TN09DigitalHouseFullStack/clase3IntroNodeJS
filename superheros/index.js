let superHeros = [
    {
        nombre: 'Batman',
        saludar: function() {
            return 'hola soy ' + this.nombre
        }
    },
    {
        nombre: 'Superman',
        saludar: function() {
            return 'hola soy ' + this.nombre
        }
    },
    {
        nombre: 'IronMan',
        saludar: function() {
            return 'hola soy ' + this.nombre;
        }
    },
];

module.exports = superHeros;