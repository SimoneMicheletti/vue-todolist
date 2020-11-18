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
        console.log(this.classActive);
      }
    },

    // Function remove element
    removeElement: function(indexElement) {
      this.arrayElementToDo.splice(indexElement, 1);
      this.doble.splice(indexElement, 1)
      Vue.set(this.classActive, indexElement, false)
      this.classActive.splice(indexElement, 1)
    },

    // Function to manage the "doble" class
    removeDoble: function(indexElement) {
      this.doble[indexElement] = false
    },

    // Function to manage the "active" class
    classActiveOnOff: function(indexElement) {
      if (this.classActive[indexElement] === false) {
        for (var i = 0; i < this.classActive.length; i++) {
          Vue.set(this.classActive, i, false)
        }
        Vue.set(this.classActive, indexElement, true)
      } else {
        Vue.set(this.classActive, indexElement, false)
      }
      console.log(this.classActive);
    }

  }
})
