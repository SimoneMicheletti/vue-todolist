var app = new Vue({

  el: "#app",
  data: {
    inputElement: "",
    arrayElementToDo: [],
  },

  methods: {

    // Function add element
    addElement: function() {
      if (this.inputElement.name != "") {

        let newElement = {};
        newElement.name = this.inputElement;
        newElement.doble = false;
        newElement.classActive = false;

        for (var i = 0; i < this.arrayElementToDo.length; i++) {
          if (this.arrayElementToDo[i].name === newElement.name ) {
            newElement.doble = true;
          }
        }

        this.arrayElementToDo.push(newElement);
        this.inputElement = "";
        this.resetActiveClass();
      }
    },

    // Function remove element
    removeElement: function(indexElement) {
      Vue.delete(this.arrayElementToDo, indexElement)
      this.resetActiveClass();
    },

    // Function to manage the "doble" class
    removeDoble: function(indexElement) {
      this.arrayElementToDo[indexElement].doble = false
      this.resetActiveClass();
    },

    // Function to manage the "active" class
    classActiveOnOff: function(indexElement) {
      if (this.arrayElementToDo[indexElement].classActive === false) {
        this.resetActiveClass();
        this.arrayElementToDo[indexElement].classActive = true
      } else {
        this.arrayElementToDo[indexElement].classActive = false
      }
    },

    // Function to reset "active" class
    resetActiveClass: function() {
      for (var i = 0; i < this.arrayElementToDo.length; i++) {
        this.arrayElementToDo[i].classActive = false
      }
    }
  }
})
