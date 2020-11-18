var app = new Vue({

  el: "#app",
  data: {
    inputElement: "",
    arrayElementToDo: [],
    doble: [],
    classActive: []
  },

  methods: {

    // Function add element
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
        this.resetActiveClass();
        console.log(this.arrayElementToDo);
        console.log(this.doble);
        console.log(this.classActive);

      }
    },

    // Function remove element
    removeElement: function(indexElement) {
      this.arrayElementToDo.splice(indexElement, 1);
      this.doble.splice(indexElement, 1);
      this.classActive.splice(indexElement, 1);
      Vue.set(this.classActive, indexElement, false);
      console.log(this.arrayElementToDo);
      console.log(this.doble);
      console.log(this.classActive);
    },

    // Function to manage the "doble" class
    removeDoble: function(indexElement) {
      Vue.set(this.doble, indexElement, false);
      this.resetActiveClass();
    },

    // Function to manage the "active" class
    classActiveOnOff: function(indexElement) {
      if (this.classActive[indexElement] === false) {
        this.resetActiveClass();
        Vue.set(this.classActive, indexElement, true);
      } else {
        Vue.set(this.classActive, indexElement, false);
      }
    },

    // Function to reset "active" class
    resetActiveClass: function() {
      for (var i = 0; i < this.classActive.length; i++) {
        Vue.set(this.classActive, i, false);
      }
    }

  }
})
