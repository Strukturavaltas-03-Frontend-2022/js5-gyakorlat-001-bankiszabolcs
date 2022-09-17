/* const Walker = {
    name: 'John Doe',
    state: 'dead',
    walk: function(speedInMph) {
        return this.name + ' the ' + this.state + ' walks with ' + speedInMph + ' mph!'
    },
    eat: function(foodName) {
        return this.name + ' the ' + this.state + ' eats ' + foodName + '!'
    },
    speak: function(sound){
        return this.name + ' the ' + this.state + ' says ' + sound + '!'
    }
} */

function Walker(name, state) {
  this.name = name || 'John Doe';
  this.state = state || 'dead';

  Object.defineProperties(this, {
    firstName: {
      configurable: false,
      enumerable: true,
      get() {
        return this.name.split(' ')[0];
      },
      set(newValue) {
        this.name = `${newValue} ${this.name.split(' ')[1]}`;
      },
    },
    lastName: {
      configurable: false,
      enumerable: true,
      get() {
        return this.name.split(' ')[1];
      },

      set(newValue) {
        this.name = `${this.name.split(' ')[0]} ${newValue}`;
      },
    },
  });
}

Walker.prototype.walk = function (speedInMph = 10) { return `${this.name} the ${this.state} walks with ${speedInMph} mph!`; };
Walker.prototype.eat = function (foodName = 'meat') { return `${this.name} the ${this.state} eats ${foodName}!`; };
Walker.prototype.speak = function (sound = 'grrrrrr') { return `${this.name} the ${this.state} says ${sound}!`; };

export default Walker;
