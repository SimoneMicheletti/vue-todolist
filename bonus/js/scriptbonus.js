var app = new Vue({

  el: "#app",
  data: {
    inputElement: "",
    arrayElementToDo: [],
  },

  methods: {

    // Function add element
    addElement: function() {
      if (this.inputElement != "") {

        let newElement = {};
        newElement.name = this.inputElement;
        newElement.doble = false;
        newElement.classActive = false;
        newElement.isAdded = true;

        // check doble
        this.arrayElementToDo.forEach((item) => {
          if (item.name === newElement.name ) {
            newElement.doble = true;
          }
        });

        // push and clean
        this.arrayElementToDo.push(newElement);
        this.inputElement = "";
        setTimeout(() => Vue.delete(newElement, 'isAdded'), 100);
        this.resetActiveClass();

      }
    },

    // Function remove element
    removeElement: function(indexElement) {
      Vue.set(this.arrayElementToDo[indexElement], "isDeleted", true)
      setTimeout(() => Vue.delete(this.arrayElementToDo, indexElement), 100);
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
      this.arrayElementToDo.forEach((item) => item.classActive = false);
    }
  }
})
