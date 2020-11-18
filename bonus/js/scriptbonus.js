var app = new Vue({

  el: "#app",
  data: {
    inputElement: "",
    arrayElementToDo: [],
    doble: [],
    classActive: []
  },

  methods: {

    addElement: function() {
      if (this.inputElement != "") {
        if (this.arrayElementToDo.includes(this.inputElement)) {
          this.doble.push(true);
        } else {
          this.doble.push(false);
        }
        this.arrayElementToDo.push(this.inputElement);
        this.classActive.push(false);
        this.inputElement = "";
      }
    },

    removeElement: function(indexElement) {
      this.arrayElementToDo.splice(indexElement, 1);
      this.doble.splice(indexElement, 1)
      this.classActive.splice(indexElement, 1)

    },

    removeDoble: function(indexElement) {
      this.doble[indexElement] = false
    },

    classActiveOnOff: function(indexElement) {
      if (this.classActive[indexElement] === false) {
        this.classActive[indexElement] = true
      } else {
        this.classActive[indexElement] = false
      }
    }

  }

})
